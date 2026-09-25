/**
 * Google Tag Manager (GTM-MTGBXX23) loader.
 *
 * Consent route: no banner. The tag is blocked for visitors in regions that
 * require cookie consent (EEA, UK, Switzerland), for visitors whose region
 * cannot be resolved, and for Tor exit traffic. Everywhere else (e.g. Brazil)
 * the tag loads normally. The region is resolved once per page visit via the
 * same-origin Cloudflare trace endpoint and cached.
 */

const GTM_ID = "GTM-MTGBXX23";
const TRACE_TIMEOUT_MS = 2000;

const CONSENT_REGIONS = new Set([
  // EEA
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO",
  // UK + Switzerland
  "GB", "CH",
]);

let cachedCountry: string | null | undefined;

async function getVisitorCountry(): Promise<string | null> {
  if (cachedCountry !== undefined) return cachedCountry;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TRACE_TIMEOUT_MS);
    const res = await fetch("/cdn-cgi/trace", { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) {
      cachedCountry = null;
      return null;
    }
    const text = await res.text();
    const match = text.match(/^loc=(\S+)$/m);
    cachedCountry = match ? match[1].trim() : null;
  } catch {
    cachedCountry = null;
  }
  return cachedCountry;
}

/** Loads the GTM tag unless the visitor is in a consent region / unresolved. */
export async function initGTM(): Promise<void> {
  if (typeof window === "undefined") return;
  if (document.querySelector(`script[src*="googletagmanager.com/gtm.js"]`)) return;

  const country = await getVisitorCountry();
  if (country === null || country === "XX" || country === "T1" || CONSENT_REGIONS.has(country)) {
    return;
  }

  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
}
