import { useState, useCallback } from 'react';
import { generateRandomColor } from '@/utilities/generateRandomColors';

export function useColorChange() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [tapCount, setTapCount] = useState(0);

  const handleScreenTap = useCallback(() => {
    setBackgroundColor(generateRandomColor());
    setTapCount(prevCount => prevCount + 1);
  }, []);

  return { backgroundColor, tapCount, handleScreenTap };
}