/**
 * PageLoader — Suspense fallback shown while a lazy route chunk is downloading.
 *
 * Renders instantly (no JS required) so the browser has a visible LCP element
 * immediately, instead of showing a blank page during chunk download.
 * This directly improves LCP on direct URL visits to lazy-loaded pages.
 */
export function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header skeleton — matches real Header height and color */}
      <div className="bg-[#0a1628] h-16 w-full flex-shrink-0" />

      {/* Content skeleton */}
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-8 h-8 border-2 border-[#e85d04] border-t-transparent rounded-full animate-spin"
            aria-label="Carregando…"
          />
          <span className="text-sm text-gray-500">Carregando…</span>
        </div>
      </div>
    </div>
  );
}
