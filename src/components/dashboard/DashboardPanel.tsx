import { useState, useCallback } from 'react';
import { useT } from '../../lib/i18n';
import { DashboardPromptModal } from './DashboardPromptModal';

interface DashboardCard {
  key: string;
  icon: string;
}

const CARDS: DashboardCard[] = [
  { key: 'dashboard.card1', icon: 'M4 4h8v2H4zM4 8h8v2H4zM4 12h5v2H4zM13 10l3 3-3 3M16 6h2v2h-2z' },
  { key: 'dashboard.card2', icon: 'M3 3h10l2 2v10l-2 2H3V3zM7 8v6M11 8v6M5 12h6' },
  { key: 'dashboard.card3', icon: 'M7 3l-5 9h4l-2 6 10-8h-4l2-5z' },
  { key: 'dashboard.card4', icon: 'M8 1L1 4.5l7 3.5 7-3.5L8 1zM1 11.5l7 3.5 7-3.5M1 8l7 3.5L15 8' },
  { key: 'dashboard.card5', icon: 'M5 2a2 2 0 00-2 2v10a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H5zM8 6h1M8 9h4M8 12h3' },
  { key: 'dashboard.card6', icon: 'M4 4h4v4H4zM9 4h4v4H9zM9 9h4v4H9zM4 9h4v4H4zM1 1v2M1 13v2M15 1v2M15 13v2' },
  { key: 'dashboard.card7', icon: 'M8 1C4.7 1 2 3.7 2 7c0 2.7 2.2 5.3 5 5.9V14l-3 2h8l-3-2v-1.1c2.8-.6 5-3.2 5-5.9 0-3.3-2.7-6-6-6z' },
];

const CARD_DESCRIPTIONS: Record<string, string> = {
  'dashboard.card1': 'dashboard.desc1',
  'dashboard.card2': 'dashboard.desc2',
  'dashboard.card3': 'dashboard.desc3',
  'dashboard.card4': 'dashboard.desc4',
  'dashboard.card5': 'dashboard.desc5',
  'dashboard.card6': 'dashboard.desc6',
  'dashboard.card7': 'dashboard.desc7',
};

/** Pre-defined gradient accent colors for each card */
const CARD_ACCENTS = [
  'from-blue-500/20 to-purple-500/20 text-blue-400',
  'from-emerald-500/20 to-teal-500/20 text-emerald-400',
  'from-amber-500/20 to-orange-500/20 text-amber-400',
  'from-violet-500/20 to-pink-500/20 text-violet-400',
  'from-cyan-500/20 to-sky-500/20 text-cyan-400',
  'from-rose-500/20 to-red-500/20 text-rose-400',
  'from-indigo-500/20 to-blue-500/20 text-indigo-400',
];

export function DashboardPanel() {
  const t = useT();
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const openModal = useCallback((idx: number) => setModalIndex(idx), []);
  const closeModal = useCallback(() => setModalIndex(null), []);

  return (
    <div className="flex flex-col h-full">
      {/* Header with drag region */}
      <div
        className="flex items-center px-4 pt-6 pb-3 cursor-default"
        data-tauri-drag-region
      >
        <h2 className="text-base font-semibold text-text-primary">
          {t('dashboard.title')}
        </h2>
      </div>

      {/* Card grid */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-1 gap-3">
          {CARDS.map((card, idx) => (
            <button
              key={card.key}
              onClick={() => openModal(idx)}
              className="group relative flex items-start gap-3 p-4 rounded-xl
                bg-bg-secondary border border-border-subtle
                hover:border-border-default hover:bg-bg-tertiary
                transition-smooth text-left cursor-pointer w-full"
            >
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${CARD_ACCENTS[idx]}
                  flex items-center justify-center`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={card.icon} />
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-text-primary group-hover:text-accent transition-smooth">
                  {t(card.key)}
                </div>
                <div className="text-xs text-text-muted mt-0.5 leading-relaxed">
                  {t(CARD_DESCRIPTIONS[card.key])}
                </div>
              </div>

              {/* Arrow */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="flex-shrink-0 text-text-tertiary group-hover:text-accent
                  group-hover:translate-x-0.5 transition-smooth mt-3"
              >
                <path d="M5 3l4 4-4 4" />
              </svg>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <p className="text-[11px] text-text-tertiary text-center mt-4 mb-2">
          {t('dashboard.hint')}
        </p>
      </div>

      {/* Prompt modal */}
      <DashboardPromptModal
        open={modalIndex !== null}
        cardIndex={modalIndex ?? 0}
        onClose={closeModal}
      />
    </div>
  );
}
