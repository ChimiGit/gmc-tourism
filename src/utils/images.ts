export function getImageBaseUrl(): string {
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
