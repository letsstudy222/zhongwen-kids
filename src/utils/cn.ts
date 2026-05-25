import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Gộp class Tailwind một cách thông minh, tránh xung đột.
 * Sử dụng: cn('px-2 py-1', condition && 'bg-red-500')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
