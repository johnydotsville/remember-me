import { todayNoTime } from "../../../utils/todayNoTime";


export function getColorByDateDiffHSL(targetTimestamp) {
  const diffInDays = (todayNoTime() - targetTimestamp) / (1000 * 60 * 60 * 24);
  const ratio = Math.min(Math.max(diffInDays / 14, 0), 1);
  
  const lightness = 100 - ratio * 63;
  return `hsl(0, 0%, ${lightness}%)`;
}