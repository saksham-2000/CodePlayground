import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="px-3 py-1.5 rounded-lg border hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
      title="Toggle theme"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
