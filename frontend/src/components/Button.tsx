import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

function Button({
    children,
    className = '',
    ...props
}: ButtonProps) {
    return (
        <button
            className={`
                px-4
                py-2
                rounded-lg
                bg-slate-900
                text-white
                hover:bg-slate-800
                transition
                disabled:opacity-50
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;