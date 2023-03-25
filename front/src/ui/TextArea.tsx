import React from "react";

interface TextareaProps {
    id?: string;
    value: any;
    label?: string;
    textareaClassName?: string;
    labelClassName?: string;
    onChange?: (_: string) => void;
    placeholder?: string;
    errorsList?: Map<string, string>;
    error?: string;
    required?: boolean;
    rows?: number;
}

export default function TextArea({
    id,
    value,
    label,
    textareaClassName,
    labelClassName,
    onChange,
    placeholder,
    required = true,
    rows = 8,
    errorsList,
    error,
}: TextareaProps) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label
                    className={
                        "text-gray-700 text-sm" +
                        (labelClassName ? labelClassName : " ")
                    }
                    htmlFor={id}
                >
                    {label}
                </label>
            )}

            <div className={"flex flex-col items-center gap-2"}>
                <textarea
                    placeholder={placeholder}
                    id={id}
                    rows={rows}
                    value={value}
                    required={required}
                    onChange={(e) => {
                        if (onChange) onChange(e.target.value);
                    }}
                    className={
                        "shadow border rounded py-2 px-3 text-gray-700 w-[400px]" +
                        (textareaClassName ? textareaClassName : "")
                    }
                />
                {errorsList && error && errorsList.has(error) && (
                    <p className="text-center text-error">{errorsList.get(error)}</p>
                )}
            </div>
        </div>
    );
}
