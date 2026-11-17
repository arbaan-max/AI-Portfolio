type BrowserFrameProps = {
  src: string;
  alt: string;
  url: string;
  className?: string;
  eager?: boolean;
};

/** A browser window around a real screenshot. Tall screenshots pan when the parent has `.frame-pan`. */
export function BrowserFrame({ src, alt, url, className = '', eager = false }: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-frame bg-[var(--frame-chrome)] shadow-frame ring-1 ring-white/10 ${className}`}
    >
      <div className="flex items-center gap-3 px-3.5 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-full bg-white/10 px-3 py-1 text-center font-mono text-[0.62rem] tracking-wide text-white/60">
          {url}
        </span>
        <span aria-hidden="true" className="w-9" />
      </div>
      <div className="frame-view relative aspect-[16/10] overflow-hidden bg-black">
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute left-0 top-0 w-full"
        />
      </div>
    </div>
  );
}
