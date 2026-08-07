type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition duration-200 hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}
