'use client';

import { useEffect, useRef, useState } from 'react';
import { RotateCcw, Eraser } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';

interface CharacterWriterProps {
  hanzi: string;
  pinyin?: string;
  meaningVi?: string;
}

/**
 * Khung luyện viết chữ Hán đơn giản dùng <canvas>.
 * Trẻ có thể dùng chuột/ngón tay viết lên ô vuông có chữ mờ làm mẫu.
 */
export function CharacterWriter({ hanzi, pinyin, meaningVi }: CharacterWriterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawing, setDrawing] = useState(false);

  // Chuẩn bị canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#ff2e63';
    ctx.lineWidth = 8;
  }, []);

  function getPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * canvas.width,
      y: ((e.clientY - rect.top) / rect.height) * canvas.height
    };
  }

  function start(e: React.PointerEvent<HTMLCanvasElement>) {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setDrawing(true);
  }

  function draw(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing) return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function stop() {
    setDrawing(false);
  }

  function clear() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="card-cute">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="font-chinese text-3xl font-bold">{hanzi}</p>
          {pinyin && <p className="text-secondary-600 italic font-bold">{pinyin}</p>}
          {meaningVi && <p className="text-sm text-slate-500">{meaningVi}</p>}
        </div>
        <AudioButton text={hanzi} />
      </div>

      <div className="relative aspect-square w-full max-w-xs mx-auto rounded-2xl border-4 border-dashed border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/30 overflow-hidden">
        {/* Khung kẻ mễ chữ */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-chinese text-[180px] leading-none text-slate-200 dark:text-slate-600 select-none">
              {hanzi[0]}
            </span>
          </div>
          {/* đường chéo và đường giữa */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="#cbd5e1" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="#cbd5e1" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#cbd5e1" strokeWidth="0.3" strokeDasharray="2 2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="0.3" strokeDasharray="2 2" />
          </svg>
        </div>

        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          onPointerDown={start}
          onPointerMove={draw}
          onPointerUp={stop}
          onPointerLeave={stop}
          className="relative w-full h-full touch-none cursor-crosshair"
        />
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <Button variant="outline" onClick={clear} size="sm">
          <Eraser className="w-4 h-4" /> Xoá
        </Button>
        <Button variant="ghost" onClick={clear} size="sm">
          <RotateCcw className="w-4 h-4" /> Viết lại
        </Button>
      </div>
    </div>
  );
}
