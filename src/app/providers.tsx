// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" forcedTheme="dark">
        <Toaster richColors position="top-right" />
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
