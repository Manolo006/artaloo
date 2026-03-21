"use client";

import { useEffect } from "react";

export default function TrailingSlashRedirect() {
  useEffect(() => {
    const { pathname, search, hash } = window.location;

    let normalizedPath = pathname
      .replace(/\/index\.html$/i, "")
      .replace(/\/+$/, "");

    if (normalizedPath === "") {
      normalizedPath = "/";
    }

    if (normalizedPath !== pathname) {
      window.location.replace(`${normalizedPath}${search}${hash}`);
    }
  }, []);

  return null;
}
