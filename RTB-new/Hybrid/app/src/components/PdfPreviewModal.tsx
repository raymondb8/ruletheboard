import { useEffect, useState } from 'react';

/**
 * In-page report preview — pages are pre-rendered to images (see
 * scripts/resize-images.mjs), so this is our own styled viewer rather than
 * handing off to the browser's native/Google-flavored PDF plugin.
 */
export default function PdfPreviewModal({
  pages,
  downloadHref,
  title,
  onClose,
}: {
  pages: string[];
  downloadHref: string;
  title: string;
  onClose: () => void;
}) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') setPage((p) => Math.min(p + 1, pages.length - 1));
      if (event.key === 'ArrowLeft') setPage((p) => Math.max(p - 1, 0));
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, pages.length]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="bg-white rounded-2xl soft-card w-full max-w-2xl h-full max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-outline-variant shrink-0">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary truncate">{title}</h2>
            <p className="text-label-sm text-on-surface-variant">
              Page {page + 1} of {pages.length}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={downloadHref}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-button bg-secondary-strong text-on-secondary px-4 py-2 rounded-xl font-label-bold text-label-sm uppercase flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary-soft transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>

        <div className="flex-1 min-h-0 bg-surface-muted flex items-center justify-center relative">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            aria-label="Previous page"
            className="absolute left-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-soft transition-colors z-10"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          <img
            src={pages[page]}
            alt={`${title} — page ${page + 1} of ${pages.length}`}
            className="max-h-full max-w-full object-contain shadow-lg"
            width={1236}
            height={1600}
            decoding="async"
          />

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(p + 1, pages.length - 1))}
            disabled={page === pages.length - 1}
            aria-label="Next page"
            className="absolute right-3 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary-soft transition-colors z-10"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 py-4 border-t border-outline-variant shrink-0">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === page ? 'bg-secondary-strong' : 'bg-outline-variant hover:bg-outline'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
