import { useProviderStore } from '../stores/providerStore';
import type { ModelId } from '../stores/settingsStore';
import {
  DEEPSEEK_V4_FLASH,
  DEEPSEEK_V4_PRO,
  normalizeDeepSeekModelName,
  normalizeProviderModelName,
} from './deepseek-models';

/**
 * Result of model resolution — either a mapped model name or an error.
 */
export type ModelResolution =
  | { ok: true; model: string }
  | { ok: false; reason: 'no_mapping'; tier: string; providerName: string };

/**
 * Resolve the UI-selected model ID to the provider's actual model name,
 * returning an error if the provider has no mapping for the selected tier.
 */
export function resolveModelOrError(selectedModel: string): ModelResolution {
  const provider = useProviderStore.getState().getActive();
  if (!provider) return { ok: true, model: normalizeDeepSeekModelName(selectedModel) };

  // 1. Check direct model ID mapping first (e.g. 'claude-opus-4-6-1m' → 'glm-5-1m')
  const directMapping = provider.modelMappings.find(
    (m) => m.tier === selectedModel && m.providerModel,
  );
  if (directMapping?.providerModel) {
    return { ok: true, model: normalizeProviderModelName(directMapping.providerModel) };
  }

  // 2. Fall back to tier mapping
  const tierMap: Record<string, 'opus' | 'sonnet' | 'haiku'> = {
    'claude-opus-4-6': 'opus',
    'claude-opus-4-6-1m': 'opus',
    'claude-sonnet-4-6': 'sonnet',
    'claude-haiku-4-5-20251001': 'haiku',
  };
  const tier = tierMap[selectedModel];
  if (!tier) return { ok: true, model: normalizeDeepSeekModelName(selectedModel) };

  const mapping = provider.modelMappings.find(
    (m) => m.tier === tier && m.providerModel,
  );
  if (!mapping?.providerModel) {
    return { ok: false, reason: 'no_mapping', tier, providerName: provider.name };
  }
  return { ok: true, model: normalizeProviderModelName(mapping.providerModel) };
}

/**
 * Resolve the UI-selected model ID to the provider's actual model name.
 * When a provider is active, looks up the model mapping for the selected tier.
 * Returns the original model ID if no mapping is configured (silent fallback).
 */
/** Map internal model IDs to CLI-expected format */
const CLI_MODEL_MAP: Partial<Record<ModelId, string>> = {
  'claude-opus-4-6-1m': 'claude-opus-4-6[1m]',
};

export function resolveModelForProvider(selectedModel: string): string {
  const r = resolveModelOrError(selectedModel);
  const model = r.ok ? r.model : selectedModel;
  return CLI_MODEL_MAP[model as ModelId] ?? model;
}

export function supportsDeepSeekThinking(model: string): boolean {
  const normalized = normalizeProviderModelName(model);
  return normalized === DEEPSEEK_V4_PRO || normalized === DEEPSEEK_V4_FLASH;
}

export function resolveThinkingLevelForProvider(selectedModel: string, requestedLevel: string): string {
  if (requestedLevel === 'off') return 'off';
  const resolvedModel = resolveModelForProvider(selectedModel);
  return supportsDeepSeekThinking(resolvedModel) ? requestedLevel : 'off';
}

/**
 * Stable fingerprint of the current API provider config.
 * Any provider config change invalidates the pre-warmed session.
 */
export function envFingerprint(): string {
  const { activeProviderId, providers } = useProviderStore.getState();
  const provider = providers.find((p) => p.id === activeProviderId);
  return JSON.stringify({
    activeProviderId,
    updatedAt: provider?.updatedAt ?? 0,
  });
}
