const TOTAL_SUPPLY = 508;

export const getPercentage = (value: number) => {
  return ((value / 100) * TOTAL_SUPPLY).toFixed(2);
};

export function isValidEmail(email: string) {
  const re =
    /^(([^<>():[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// function to get number as k, m, b
export function getNumberWithSuffix(num: number) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "b";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "m";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
}
