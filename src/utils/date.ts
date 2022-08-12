import { DateTime } from "luxon";

export const formatDateLong = (date: Date) => {
  const newDate = DateTime.fromJSDate(date);
  return newDate.toLocaleString(DateTime.DATE_HUGE);
};
