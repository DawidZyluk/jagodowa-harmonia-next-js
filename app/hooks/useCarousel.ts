import { useEffect, useState } from "react";

export function useCarousel(itemsCount: number, autoplayInterval: number = 6000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % itemsCount);
    }, autoplayInterval);

    return () => window.clearInterval(timer);
  }, [itemsCount, autoplayInterval]);

  const goTo = (index: number) => {
    setActiveIndex((itemsCount + index) % itemsCount);
  };

  return {
    activeIndex,
    goTo,
  };
}

