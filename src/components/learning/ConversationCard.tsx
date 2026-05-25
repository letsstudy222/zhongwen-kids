import { AudioButton } from '@/components/ui/AudioButton';
import { Card } from '@/components/ui/Card';
import { Pill } from '@/components/ui/Pill';
import type { Conversation } from '@/types';

interface ConversationCardProps {
  conversation: Conversation;
}

export function ConversationCard({ conversation }: ConversationCardProps) {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-xl">{conversation.title}</h3>
        <Pill color="primary">YCT {conversation.yctLevel}</Pill>
      </div>

      <div className="space-y-3">
        {conversation.lines.map((line, i) => {
          const isA = line.speaker === 'A';
          return (
            <div
              key={i}
              className={`flex gap-3 ${isA ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                  isA
                    ? 'bg-primary-100 dark:bg-primary-900/40'
                    : 'bg-secondary-100 dark:bg-secondary-900/40'
                }`}
              >
                {isA ? '👦' : '👧'}
              </div>
              <div
                className={`flex-1 max-w-[80%] p-3 rounded-2xl ${
                  isA
                    ? 'bg-primary-50 dark:bg-primary-900/20 rounded-tl-sm'
                    : 'bg-secondary-50 dark:bg-secondary-900/20 rounded-tr-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="font-chinese text-lg font-bold">{line.hanzi}</p>
                  <AudioButton text={line.hanzi} className="w-7 h-7 !shadow-none" />
                </div>
                <p className="text-xs italic text-secondary-700 dark:text-secondary-300">
                  {line.pinyin}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {line.vi}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
