'use client';

import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isInvisible, setIsInvisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme('light');
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      isSelected={!isInvisible}
      onValueChange={(value: boolean) => {
        setIsInvisible(!value);
        if (value === true) {
          setTheme('light');
        } else {
          setTheme('dark');
        }
      }}
    ></Switch>
  );
}
