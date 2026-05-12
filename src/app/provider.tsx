"use client";

import { ThemeProvider } from "@ui5/webcomponents-react/ThemeProvider";
import "@ui5/webcomponents-react/dist/Assets.js";
import { ReactNode } from "react";

export function UI5Provider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
