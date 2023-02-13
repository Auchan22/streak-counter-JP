import { formattedDate } from './utils';

interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

const KEY = 'streak';

export function streakCounter(storage: Storage, date: Date): Streak {
  const streak: Streak = {
    currentCount: 1,
    lastLoginDate: formattedDate(date),
    startDate: formattedDate(date),
  };

  storage.setItem(KEY, JSON.stringify(streak));

  return streak;
}
