export const classNamesFilter = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};
