import React from "react";

interface InputProps {
    id?: string;
    value: any;
    label?: string;
    type?: string;
    inputClassName?: string;
    labelClassName?: string;
    onChange?: (_: string) => void;
    placeholder?: string;
    errorsList?: Map<string, string>;
    error?: string;
    required?: boolean;
}

export default function Input({
    id,
    value,
    label,
    inputClassName,
    labelClassName,
    onChange,
    placeholder,
    type = "text",
    required = true,
    errorsList,
    error,
}: InputProps) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label
                    className={
                        "text-gray-700 text-sm" + (labelClassName ? labelClassName : " ")
                    }
                    htmlFor={id}
                >
                    {label}
                </label>
            )}

            <div
                className={
                    "flex flex-col items-center gap-2"
                }
            >
                <input
                    placeholder={placeholder}
                    id={id}
                    type={type}
                    value={value}
                    required={required}
                    onChange={(e) => {
                        if (onChange) onChange(e.target.value);
                    }}
                    className={
                        "shadow border rounded py-2 px-3 text-gray-700" + +
                        (inputClassName ? inputClassName : "")
                    }
                />
                {
                    errorsList && error && errorsList.has(error) && (
                        <p className="text-center text-error">{errorsList.get(error)}</p>
                    )
                }
            </div>
        </div>
    )
}