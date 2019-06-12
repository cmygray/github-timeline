export function dateTimeToDate(dateString: string): string {
  const date = new Date(dateString);

  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((s): string => String(s).padStart(2, '0'))
    .join('.');
}
