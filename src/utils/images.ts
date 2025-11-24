export function getImageBaseUrl(): string {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || '';
  const basePath = import.meta.env.PUBLIC_BASE_PATH || '';

  return `${siteUrl}${basePath}`;
}
