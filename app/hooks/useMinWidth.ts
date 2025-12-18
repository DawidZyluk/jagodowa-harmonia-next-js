import { useEffect, useState } from "react";

export function useMinWidth(minWidth: number): boolean {
  const [matches, setMatches] = useState<boolean>(() =>
    typeof window === "undefined" ? true : window.innerWidth >= minWidth,
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const query = window.matchMedia(`(min-width: ${minWidth}px)`);
    const updateMatches = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    setMatches(query.matches);
    query.addEventListener("change", updateMatches);

    return () => {
      query.removeEventListener("change", updateMatches);
    };
  }, [minWidth]);

  return matches;
}

