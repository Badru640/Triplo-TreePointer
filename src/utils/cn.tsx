export const cn = (...classes: (string | undefined | boolean | null)[]) => {
    return classes.filter(Boolean).join(' ');
  };
  