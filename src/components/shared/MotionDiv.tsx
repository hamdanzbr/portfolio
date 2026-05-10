export default function MotionDiv({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`opacity-0 animate-fade-in ${className || ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}