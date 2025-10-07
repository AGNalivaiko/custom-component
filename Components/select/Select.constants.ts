export const LABELS = {
  default: "Выбери значение",
  cities: "Города",
  fruits: "Фрукты",
  test: "Test",
  email: "Email",
  countries: "Страны",
} as const;

export const OPTIONS = {
  cities: [
    { label: "Москва", value: "moscow" },
    { label: "Питер", value: "spb" },
  ],
  fruits: [
    { label: "Яблоко", value: "apple" },
    { label: "Банан", value: "banana" },
  ],
  countries: [{ label: "Россия", value: "ru" }],
} as const;

export const VARIANTS = {
  outlined: "select-container-outlined",
  filled: "select-container-filled",
  standard: "select-container-standard",
} as const;

export const HELPERTEXT = "Введите правильный email";
