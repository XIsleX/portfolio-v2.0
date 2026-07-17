import { useEffect, useState } from "react";

function formatUptime(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  let months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  months = Math.max(months, 0);

  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  if (years === 0) return `${remMonths} mo${remMonths === 1 ? "" : "s"}`;
  if (remMonths === 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${years} yr${years === 1 ? "" : "s"} ${remMonths} mo${remMonths === 1 ? "" : "s"}`;
}

export function useUptime(startDate) {
  const [uptime, setUptime] = useState(() => formatUptime(startDate));

  useEffect(() => {
    const interval = setInterval(() => setUptime(formatUptime(startDate)), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, [startDate]);

  return uptime;
}
