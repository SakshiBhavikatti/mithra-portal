import { cn } from "@/lib/utils";

/** Shared shell for dashboard widgets — calmer than heavy boxed cards. */
export function dashboardPanelClass(extra) {
  return cn(
    "flex flex-col min-h-0 overflow-hidden rounded-xl",
    "border border-border/55 dark:border-border/50",
    "bg-card/90 dark:bg-card/85",
    "shadow-[0_1px_2px_oklch(0_0_0/0.04)] dark:shadow-[0_1px_2px_oklch(0_0_0/0.25)]",
    "transition-[box-shadow,border-color] duration-200",
    "hover:border-border/80 dark:hover:border-border/65 hover:shadow-sm",
    extra
  );
}

export function dashboardPanelTitleClass() {
  return "text-sm font-semibold tracking-tight text-foreground";
}

export function dashboardPanelSubtitleClass() {
  return "text-xs text-muted-foreground mt-0.5 leading-relaxed";
}

export function dashboardIconButtonClass() {
  return cn(
    "inline-flex size-8 shrink-0 items-center justify-center rounded-md",
    "text-muted-foreground hover:text-foreground",
    "bg-muted/40 hover:bg-muted/70 dark:bg-muted/25 dark:hover:bg-muted/40",
    "transition-colors"
  );
}
