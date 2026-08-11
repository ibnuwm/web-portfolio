export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;
  const dataLayer = (window.dataLayer = window.dataLayer || []);
  dataLayer.push({ event: eventName, ...params });
}

export function trackLinkClick(eventName, params = {}) {
  trackEvent(eventName, params);
}
