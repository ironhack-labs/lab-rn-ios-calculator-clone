export const cancelButton = (
    shouldConcatenateDigit: boolean,
    display: number | string,
    setDisplay: React.Dispatch<React.SetStateAction<number | string>>,
    setShouldConcatenateDigit: React.Dispatch<React.SetStateAction<boolean>>,
    setOperation: React.Dispatch<React.SetStateAction<string>> // Agregar este parámetro
  ) => {
    if (!shouldConcatenateDigit && display === 0) {
      setOperation('');
    }
    setDisplay(0);
    setShouldConcatenateDigit(false);
  };
  
  export const addDot = (display: number | string, setDisplay: React.Dispatch<React.SetStateAction<number | string>>, setShouldConcatenateDigit: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (Math.round(display as number) === Number(display)) {
      setDisplay(prevDisplay => `${prevDisplay}.`);
      setShouldConcatenateDigit(true);
    }
  };
  
  export const percentage = (display: number | string, setDisplay: React.Dispatch<React.SetStateAction<number | string>>) => {
    const displayNumber = typeof display === 'number' ? display : Number(display);
    setDisplay(displayNumber / 100);
  };
  
  export const invertSignal = (display: number | string, setDisplay: React.Dispatch<React.SetStateAction<number | string>>) => {
    const displayNumber = typeof display === 'number' ? display : Number(display);
    setDisplay(displayNumber * -1);
  };
  