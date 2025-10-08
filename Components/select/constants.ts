// export const LABELS = {
//   default: "Choose your option",
//   cities: "Cities",
//   fruits: "Fruits",
//   test: "Test",
//   email: "Email",
//   countries: "Coun
// };

// export const OPTIONS = {
//   cities: [
//     { label: "Moscow", value: "moscow" },
//     { label: "STPiterburg", value: "spb" },
//   ],
//   fruits: [
//     { label: "Apple", value: "apple" },
//     { label: "Banana", value: "banana" },
//   ],
//   countries: [{ label: "Russia", value: "ru" }],
// };

// export const VARIANTS = {
//   outlined: "select-container-outlined",
//   filled: "select-container-filled",
//   standard: "select-container-standard",
// };

// export const HELPERTEXT = "Inter the correct email";

export const DEFAULT = {
  label: "Choose option",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  variant: "standard",
  helperText: "Please select an option",
};

export const FILLED = {
  ...DEFAULT,
  variant: "filled",
};

export const DISABLED = {
  ...DEFAULT,
  disabled: true,
};

export const ERROR = {
  ...DEFAULT,
  error: true,
  helperText: "Something went wrong",
};
