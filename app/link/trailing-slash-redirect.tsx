"use client";

import { useEffect } from "react";

export default function TrailingSlashRedirect() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;

    if (!pathname || pathname === "/" || !pathname.endsWith("/")) {
      return;
    }

    const canonicalPath = pathname.replace(/\/+$/, "");
    if (!canonicalPath) {
      return;
    }

    window.location.replace(`${canonicalPath}${search}${hash}`);
  }, []);

  return null;
}