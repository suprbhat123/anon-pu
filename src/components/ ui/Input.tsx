type InputProps = {
    type?: "text" | "email" | "password";
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
};

export default function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    disabled = false,
}: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        />
    );
}