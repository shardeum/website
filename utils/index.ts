const TOTAL_SUPPLY = 508;

export const getPercentage = (value: number) => {
  return ((value / 100) * TOTAL_SUPPLY).toFixed(2);
};

export function isValidEmail(email: string) {
  const re =
    /^(([^<>():[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
