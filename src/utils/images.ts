function getBaseUrl(): string {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || '';
  // Use PUBLIC_BASE_PATH if set, otherwise fall back to Astro's BASE from config
  // import.meta.env.BASE is always available from astro.config.mjs
  const basePath = import.meta.env.PUBLIC_BASE_PATH || import.meta.env.BASE || '/gmc-tourism';

  // Ensure basePath starts with / and doesn't end with /
  let normalizedBasePath = basePath;
  if (!normalizedBasePath.startsWith('/')) {
    normalizedBasePath = `/${normalizedBasePath}`;
  }
  if (normalizedBasePath.endsWith('/') && normalizedBasePath.length > 1) {
    normalizedBasePath = normalizedBasePath.slice(0, -1);
  }

  return `${siteUrl}${normalizedBasePath}`;
}

export function getImageBaseUrl(): string {
  return getBaseUrl();
}

/**
 * Get a dynamic URL for internal links
 * Combines base URL with the path
 * @param path - The internal path (e.g., '/gallery' or '/events')
 * @returns Full URL or relative path
 */
export function getLinkUrl(path: string): string {
  if (!path) return '';

  // If path is already a full URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  const baseUrl = getBaseUrl();

  // If no base URL is set, return the path as-is (for local development)
  if (!baseUrl) {
    return path;
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // Combine base URL with path
  return `${baseUrl}${normalizedPath}`;
}
