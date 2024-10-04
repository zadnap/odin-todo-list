import { format } from "date-fns";
import { ru } from "date-fns/locale";

function getMonthName(date) {
  return format(date, "LLL");
}

export { getMonthName };
