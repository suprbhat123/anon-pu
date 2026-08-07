type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div
      className={`text-xl font-bold tracking-tight text-white ${className}`}
    >
      Anon-PU
    </div>
  );
}
