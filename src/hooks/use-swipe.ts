import { useCallback, useRef } from "react";

export interface UseSwipeOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
}

export function useSwipe({ onSwipeLeft, onSwipeRight, threshold = 40 }: UseSwipeOptions) {
  const start = useRef<{ x: number; y: number; time: number } | null>(null);

  const onTouchStart = useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0];
    if (!touch) return;
    start.current = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  }, []);

  const onTouchMove = useCallback((event: React.TouchEvent) => {
    const s = start.current;
    const touch = event.touches[0];
    if (!s || !touch) return;

    const dx = touch.clientX - s.x;
    const dy = touch.clientY - s.y;

    // Se o movimento horizontal for claramente dominante, evita scroll da página.
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold / 2) {
      event.preventDefault();
    }
  }, [threshold]);

  const onTouchEnd = useCallback((event: React.TouchEvent) => {
    const s = start.current;
    const touch = event.changedTouches[0];
    start.current = null;
    if (!s || !touch) return;

    const dx = touch.clientX - s.x;
    const dy = touch.clientY - s.y;
    const dt = Date.now() - s.time;

    // Só conta como swipe se for principalmente horizontal e rápido o suficiente.
    if (Math.abs(dx) < threshold || Math.abs(dy) > Math.abs(dx) || dt > 600) return;

    if (dx < 0) {
      onSwipeLeft?.();
    } else {
      onSwipeRight?.();
    }
  }, [onSwipeLeft, onSwipeRight, threshold]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}
