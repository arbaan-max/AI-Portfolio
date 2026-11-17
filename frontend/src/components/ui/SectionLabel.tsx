type SectionLabelProps = {
  index: string;
  children: string;
  className?: string;
};

export function SectionLabel({ index, children, className = '' }: SectionLabelProps) {
  return (
    <p className={`label flex items-center gap-3 ${className}`}>
      <span>{index}</span>
      <span aria-hidden="true" className="h-px w-10 bg-current opacity-40" />
      <span>{children}</span>
    </p>
  );
}
