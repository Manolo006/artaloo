"use client";

import { useEffect } from "react";

export default function TrailingSlashRedirect() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;

    if (pathname.endsWith("/link/")) {
      const normalizedPath = pathname.replace(/\/$/, "");
      window.location.replace(`${normalizedPath}${search}${hash}`);
    }
  }, []);

  return null;
}
