import { useState, useEffect } from "react";

function useCounter(targetNumber: number) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter < targetNumber) {
        setCurrentNumber(counter + 1);
        counter++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Le compteur augmentera tous les 100ms

    return () => clearInterval(intervalId); // Nettoyage lorsque le composant est démonté
  }, [targetNumber]);

  return currentNumber;
}

export default useCounter;
