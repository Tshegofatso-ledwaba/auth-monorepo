export function apiUrl(path) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, '');

  if (!baseUrl) {
    throw new Error('The API is not configured. Set NEXT_PUBLIC_API_URL in Vercel.');
  }

  return `${baseUrl}${path}`;
}