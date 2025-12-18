type Review = {
  id: number;
  author: string;
  condition: string;
  avatar: string;
  content: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    author: "Ania",
    condition: "insulinooporność",
    avatar: "/woman.jpg",
    content:
      "Jagoda pomogła mi wypracować nowe nawyki, które realnie zobaczyłam na wynikach badań. Zero presji, dużo wsparcia.",
  },
  {
    id: 2,
    author: "Kasia",
    condition: "problemy z tarczycą",
    avatar: "/woman.jpg",
    content:
      "Wreszcie mam jasny plan żywieniowy, który działa i nie zabiera mi całej energii. Prosto, jasno i z empatią.",
  },
  {
    id: 3,
    author: "Marek",
    condition: "redukcja wagi po kontuzji",
    avatar: "/man.jpg",
    content:
      "Czułem się wysłuchany. Jagoda tłumaczy wszystko z cierpliwością i poczuciem humoru. Gorąco polecam jej wsparcie.",
  },
  {
    id: 4,
    author: "Ola",
    condition: "PCOS i wahania hormonalne",
    avatar: "/woman.jpg",
    content:
      "Plan żywieniowy był dopasowany do mojej codzienności. Po raz pierwszy czuję stabilizację hormonów i energii w ciągu dnia.",
  },
];

export type { Review };

