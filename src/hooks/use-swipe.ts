import { useCallback, useRef } from "react";

export interface UseSwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 40 }: UseSwipeOptions) {
  const start = useRef<{ x: number; y: number; time: number } | null>(null);

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    if (!event.isPrimary) return;
    start.current = { x: event.clientX, y: event.clientY, time: Date.now() };
    // Garante que capturamos os movimentos subsequentes mesmo que o cursor saia do alvo.
    (event.target as Element | null)?.setPointerCapture?.(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent) => {
    const s = start.current;
    if (!s || !event.isPrimary) return;

    const dx = event.clientX - s.x;
    const dy = event.clientY - s.y;

    // Se o movimento horizontal for claramente dominante, evita scroll da página.
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold / 2) {
      event.preventDefault();
    }
  }, [threshold]);

  const onPointerUp = useCallback((event: React.PointerEvent) => {
    const s = start.current;
    start.current = null;
    if (!s || !event.isPrimary) return;

    const dx = event.clientX - s.x;
    const dy = event.clientY - s.y;
    const dt = Date.now() - s.time;

    // Só conta como swipe se for principalmente horizontal e rápido o suficiente.
    if (Math.abs(dx) < threshold || Math.abs(dy) > Math.abs(dx) || dt > 600) return;

    if (dx < 0) {
      onSwipeLeft?.();
    } else {
      onSwipeRight?.();
    }
  }, [onSwipeLeft, onSwipeRight, threshold]);

  const onPointerCancel = useCallback(() => {
    start.current = null;
  }, []);

  return {
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
    style: { touchAction: "pan-y" } as React.CSSProperties,
  };
}
