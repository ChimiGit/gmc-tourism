import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeIcon() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Get initial theme
    const html = document.documentElement;
    const theme = html.getAttribute('data-theme') || 'dark';
    setIsDark(theme === 'dark');

    // Listen for theme changes
    const handleThemeChange = (e: CustomEvent) => {
      setIsDark(e.detail.theme === 'dark');
    };

    window.addEventListener('themechange', handleThemeChange as EventListener);

    // Also check on storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        setIsDark(e.newValue === 'dark');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('themechange', handleThemeChange as EventListener);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return <>{isDark ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5" />}</>;
}
