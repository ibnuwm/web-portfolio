"use client";
// @flow strict
import { useEffect } from "react";

function PWARegister() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      !(window.location.protocol === "https:" || window.location.hostname === "localhost")
    ) {
      return;
    }
    const register = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js");
      } catch (error) {
        console.warn("Service worker registration failed:", error.message);
      }
    };
    register();
  }, []);

  return null;
}

export default PWARegister;
