"use client";
// @flow strict
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";

function getTrackableElements(event) {
  const target = event.target;
  if (!target || typeof target.closest !== "function") return [];
  return [target.closest("[data-track]")].filter(Boolean);
}

function AnalyticsTracker() {
  useEffect(() => {
    const handleClick = (event) => {
      const trackable = getTrackableElements(event);
      trackable.forEach((el) => {
        const eventName = el.dataset.track;
        const label = el.dataset.trackLabel || el.getAttribute("aria-label") || el.textContent?.trim();
        trackEvent(eventName, { label: label || "" });
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export default AnalyticsTracker;
