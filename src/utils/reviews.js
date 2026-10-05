export const STORAGE_KEY = "playbox-reviews";

export function loadReviews() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}
export function getSummary(productId) {
  const list = loadReviews()[productId] || [];
  if (list.length === 0) return null;
  const average = list.reduce((sum, r) => sum + r.rating, 0) / list.length;
  return { average, count: list.length };
}