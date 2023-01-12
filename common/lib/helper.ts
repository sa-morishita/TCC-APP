export const filterClassNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};
