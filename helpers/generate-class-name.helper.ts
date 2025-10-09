export const generateClassName = (prefix: string, suffix: string) =>
  `${prefix}${suffix.charAt(0).toUpperCase() + suffix.slice(1)}`;
