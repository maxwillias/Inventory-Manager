import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({
    className = '',
    ...props
}: InputProps) {
    return (
        <input
            className={`
                w-full
                p-3
                rounded-lg
                border
                border-gray-200
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-slate-900
                ${className}
            `}
            {...props}
        />
    );
}

export default Input;