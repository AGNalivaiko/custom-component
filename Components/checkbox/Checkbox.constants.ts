export const CONSTANTS = {
  DEFAULT_CLASSES: {
    variant: "outlined",
    sizeCheckbox: "medium",
    color: "primary",
    label: "enter your label",
  } as const,

  CUSTOM_PROPS: {
    variant: "contained",
    sizeCheckbox: "large",
    color: "success",
    label: "test",
  } as const,

  CUSTOM_CLASSES: ["checkbox-contained", "checkbox-large", "checkbox-success"] as const,
};
