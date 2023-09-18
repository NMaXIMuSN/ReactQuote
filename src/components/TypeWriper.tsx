import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite }: {text: string, delay: number, infinite: boolean}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const resetData = () => {
    setCurrentIndex(0);
    setCurrentText('');
  }

  useEffect(() => {
    resetData()
  }, [text])

  useEffect(() => {
    let timeout: any;
    if (currentIndex <= text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

    } else if (infinite) { // ADD THIS CHECK
      resetData()
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
