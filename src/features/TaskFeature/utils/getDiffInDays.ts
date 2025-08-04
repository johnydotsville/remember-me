export function getDiffInDays(timestamp1, timestamp2) {
  const date1: any = new Date(timestamp1);
  const date2: any = new Date(timestamp2);
  
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  
  const diffMs = Math.abs(date1 - date2);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  return diffDays;
}