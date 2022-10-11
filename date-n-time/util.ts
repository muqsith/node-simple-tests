export const getTimestampWithSecondsAdded = (
  timestamp: string,
  secs: number
): string => {
  let result = null;
  if (timestamp && secs) {
    const dt = new Date(timestamp);
    const updatedDate = new Date(dt.getTime() + secs * 1000);
    result = updatedDate.toISOString();
  }
  return result;
};

export const getTimestamp = (millis: number): string => {
  let result = null;
  if (millis) {
    const dt = new Date(millis);
    result = dt.toISOString();
  }
  return result;
};

export const isTimestamp1LessthanTimestamp2 = (
  t1: string,
  t2: string
): boolean => {
  let result = false;
  if (t1 && t2) {
    const d1 = new Date(t1);
    const d2 = new Date(t2);
    result = d1.getTime() < d2.getTime();
  }
  return result;
};

export const isTimestamp1LessthanOrEqualToTimestamp2 = (
  t1: string,
  t2: string
): boolean => {
  let result = false;
  if (t1 && t2) {
    const d1 = new Date(t1);
    const d2 = new Date(t2);
    result = d1.getTime() <= d2.getTime();
  }
  return result;
};
