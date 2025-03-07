export function formatDate(date) {
  // Ensure `date` is a Date object
  const parsedDate = date instanceof Date ? date : new Date(date);

  return parsedDate.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
