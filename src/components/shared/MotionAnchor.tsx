export default function MotionAnchor({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium mb-8 transition transform hover:scale-105"
    >
      {children}
    </a>
  );
}