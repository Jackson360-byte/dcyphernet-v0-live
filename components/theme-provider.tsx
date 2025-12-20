"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps, useTheme as useNextTheme } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} {...props}>
      {children}
    </NextThemesProvider>
  )
}

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return {
    theme: resolvedTheme as "white" | "dark" | undefined,
    setTheme,
    toggleTheme,
  }
}
