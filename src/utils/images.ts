/**
 * Utility functions for handling dynamic image URLs
 * Supports loading images from GitHub or local paths via environment variables
 */

/**
 * Get the base URL for images by combining PUBLIC_SITE_URL and PUBLIC_BASE_PATH
 * Falls back to empty string (relative paths) if not set
 */
function getImageBaseUrl(): string {
  // In Astro, PUBLIC_* env vars are available at build time
  const siteUrl = import.meta.env.PUBLIC_SITE_URL || '';
  const basePath = import.meta.env.PUBLIC_BASE_PATH || '';

  // If no site URL is set, return empty (use relative paths)
  if (!siteUrl) {
    return '';
  }

  // Remove trailing slash from siteUrl if present
  const cleanSiteUrl = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;

  // Ensure basePath starts with / if provided
  const cleanBasePath = basePath && !basePath.startsWith('/') ? `/${basePath}` : basePath;
  // Remove trailing slash from basePath if present
  const finalBasePath = cleanBasePath.endsWith('/') ? cleanBasePath.slice(0, -1) : cleanBasePath;

  // Combine site URL and base path
  return finalBasePath ? `${cleanSiteUrl}${finalBasePath}` : cleanSiteUrl;
}

/**
 * Construct a full image URL from a path
 * Combines PUBLIC_SITE_URL and PUBLIC_BASE_PATH to create the base URL
 * Otherwise, returns the path as-is (for local/relative paths)
 *
 * @param imagePath - The image path (e.g., '/backgrounds/home-background.jpg')
 * @returns Full URL or relative path
 *
 * @example
 * // With PUBLIC_SITE_URL=https://chimigit.github.io and PUBLIC_BASE_PATH=/gmc-tourism
 * getImageUrl('/backgrounds/home-background.jpg')
 * // Returns: 'https://chimigit.github.io/gmc-tourism/backgrounds/home-background.jpg'
 *
 * // Without PUBLIC_SITE_URL
 * getImageUrl('/backgrounds/home-background.jpg')
 * // Returns: '/backgrounds/home-background.jpg'
 */
export function getImageUrl(imagePath: string): string {
  if (!imagePath) return '';

  // If path is already a full URL, return as-is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  const baseUrl = getImageBaseUrl();

  // If no base URL is set, return the path as-is (for local development)
  if (!baseUrl) {
    return imagePath;
  }

  // Ensure path starts with /
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;

  // Combine base URL with path
  return `${baseUrl}${normalizedPath}`;
}

/**
 * Get the base URL for assets (videos, etc.)
 * Uses the same logic as images
 */
export function getAssetUrl(assetPath: string): string {
  return getImageUrl(assetPath);
}

/**
 * Get GitHub raw URL for a file in the repository
 * Useful for constructing GitHub raw URLs dynamically
 *
 * @param repoPath - Path to the file in the repo (e.g., 'public/backgrounds/home-background.jpg')
 * @param options - Optional configuration
 * @returns GitHub raw URL
 */
export function getGitHubRawUrl(
  repoPath: string,
  options?: {
    owner?: string;
    repo?: string;
    branch?: string;
  }
): string {
  const owner = options?.owner || import.meta.env.PUBLIC_GITHUB_OWNER || '';
  const repo = options?.repo || import.meta.env.PUBLIC_GITHUB_REPO || '';
  const branch = options?.branch || import.meta.env.PUBLIC_GITHUB_BRANCH || 'main';

  if (!owner || !repo) {
    // Return relative path if GitHub config is not available
    return repoPath.startsWith('/') ? repoPath : `/${repoPath}`;
  }

  // Remove leading slash from repoPath if present
  const normalizedPath = repoPath.startsWith('/') ? repoPath.slice(1) : repoPath;

  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${normalizedPath}`;
}
