export function getImageBaseUrl(): string {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || '';
  // Use PUBLIC_BASE_PATH if set, otherwise fall back to Astro's BASE from config
  const basePath = import.meta.env.PUBLIC_BASE_PATH || import.meta.env.BASE || '';

  // Ensure basePath starts with / if it's not empty
  const normalizedBasePath = basePath && !basePath.startsWith('/') ? `/${basePath}` : basePath;

  return `${siteUrl}${normalizedBasePath}`;
}
