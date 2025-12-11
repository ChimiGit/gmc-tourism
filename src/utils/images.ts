function getBaseUrl(): string {
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || '';
  // Use PUBLIC_BASE_PATH if set, otherwise fall back to Astro's BASE from config
  // import.meta.env.BASE is always available from astro.config.mjs
  const basePath = import.meta.env.PUBLIC_BASE_PATH || import.meta.env.BASE || '/tourism';

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
 * Combines base URL with the path, always including the base path
 * @param path - The internal path (e.g., '/gallery' or '/events')
 * @returns Full URL or path with base path
 */
export function getLinkUrl(path: string): string {
  if (!path) return '';

  // If path is already a full URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get base path (always available from Astro config)
  const basePath = import.meta.env.PUBLIC_BASE_PATH || import.meta.env.BASE || '/tourism';
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || '';

  // Normalize base path
  let normalizedBasePath = basePath;
  if (!normalizedBasePath.startsWith('/')) {
    normalizedBasePath = `/${normalizedBasePath}`;
  }
  if (normalizedBasePath.endsWith('/') && normalizedBasePath.length > 1) {
    normalizedBasePath = normalizedBasePath.slice(0, -1);
  }

  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // If site URL is set, return full URL, otherwise return path with base path
  if (siteUrl) {
    return `${siteUrl}${normalizedBasePath}${normalizedPath}`;
  }

  // For local development, return path with base path
  return `${normalizedBasePath}${normalizedPath}`;
}
