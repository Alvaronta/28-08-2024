import moment from "moment/moment";
import { useEffect, useState } from "react";

function getTimeRemaing(target) {
  const difference = moment.duration(moment(target).diff(moment()));
  const result = { finished: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const units = ["days", "hours", "minutes", "seconds"];

  units.forEach(function (unit) {
    const value = Math.max(0, difference[unit]());
    result[unit] = value;

    if (value > 0) {
      result.finished = false;
    }
  });

  return result;
}

export default function useCountdown(date) {
  const [countdown, setCountdown] = useState(getTimeRemaing(date));

  useEffect(() => {
    const interval = setInterval(() => {
      if (!countdown.finished) {
        const current = getTimeRemaing(date);
        setCountdown(current);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countdown, date]);

  return countdown;
}
