import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useT } from '../../lib/i18n';

interface DashboardPromptModalProps {
  open: boolean;
  cardIndex: number; // 0-6
  onClose: () => void;
}

const PROMPT_KEYS = [
  'dashboard.prompt1',
  'dashboard.prompt2',
  'dashboard.prompt3',
  'dashboard.prompt4',
  'dashboard.prompt5',
  'dashboard.prompt6',
  'dashboard.prompt7',
];

const MODAL_TITLE_KEYS = [
  'dashboard.modalTitle1',
  'dashboard.modalTitle2',
  'dashboard.modalTitle3',
  'dashboard.modalTitle4',
  'dashboard.modalTitle5',
  'dashboard.modalTitle6',
  'dashboard.modalTitle7',
];

const TIP_KEYS = [
  'dashboard.tip1',
  'dashboard.tip2',
  'dashboard.tip3',
  'dashboard.tip4',
  'dashboard.tip5',
  'dashboard.tip6',
  'dashboard.tip7',
];

export function DashboardPromptModal({ open, cardIndex, onClose }: DashboardPromptModalProps) {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const promptKey = PROMPT_KEYS[cardIndex] || PROMPT_KEYS[0];
  const titleKey = MODAL_TITLE_KEYS[cardIndex] || MODAL_TITLE_KEYS[0];
  const tipKey = TIP_KEYS[cardIndex] || TIP_KEYS[0];
  const promptText = t(promptKey);
  const tipText = t(tipKey);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(promptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = promptText;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [promptText]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-bg-card border border-border-subtle rounded-xl shadow-lg
          max-w-xl w-full mx-4 animate-fade-in flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <h3 className="text-sm font-semibold text-text-primary">
            {t(titleKey)}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-bg-secondary text-text-tertiary
              hover:text-text-primary transition-smooth cursor-pointer"
            title={t('dashboard.closeModal')}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l6 6M10 4l-6 6" />
            </svg>
          </button>
        </div>

        {/* Prompt text area */}
        <div className="px-5 py-2 flex-1 min-h-0">
          {/* Usage tip */}
          <div className="mb-2 px-3 py-2 rounded-lg bg-accent/5 border border-accent/10
            text-xs text-text-secondary leading-relaxed">
            {tipText}
          </div>
          <textarea
            readOnly
            value={promptText}
            className="w-full h-full min-h-[280px] max-h-[55vh] resize-none
              bg-bg-secondary border border-border-subtle rounded-lg p-3
              text-xs text-text-primary leading-relaxed font-mono
              focus:outline-none focus:border-border-default
              selection:bg-accent/20 cursor-default"
          />
        </div>

        {/* Footer with copy button */}
        <div className="flex items-center justify-between px-5 py-3">
          <p className="text-[11px] text-text-muted">
            {t('dashboard.hint')}
          </p>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg
              transition-smooth cursor-pointer font-medium
              ${copied
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-accent/10 text-accent hover:bg-accent/20'
              }`}
          >
            {copied ? (
              <>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 7l3 3 5-6" />
                </svg>
                {t('dashboard.copied')}
              </>
            ) : (
              <>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="8" height="8" rx="1" />
                  <path d="M2 10V3a1 1 0 011-1h7" />
                </svg>
                {t('dashboard.copyPrompt')}
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
