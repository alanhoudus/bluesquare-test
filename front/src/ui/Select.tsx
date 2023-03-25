interface SelectProps<T> {
    values: Map<string, T>;
    onChange: (_: T | null) => void;
    selected: T | undefined | null;
    tooltip?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    small?: boolean;
}

export default function Select<T extends string | number>({ label, onChange, selected, placeholder, values, disabled }: SelectProps<T>) {
    const type = typeof Array.from(values.values())[0];
    return (
        <div className="flex flex-col gap-2">
            <label>{label}</label>
            <select
                className={`self-start form-select rounded-md bg-gray-200 shadow-sm focus:border-iceberg focus:ring focus:ring-iceberg focus:ring-opacity-50`}
                onChange={(e) => {
                    const newValue = (
                        type === "number" ? parseInt(e.target.value) : e.target.value
                    ) as T;
                    onChange(newValue);
                }}
                value={selected === null ? undefined : selected}
            >
                {placeholder !== undefined && (
                    <option value={undefined} disabled={disabled}>
                        {placeholder}
                    </option>
                )}
                {Array.from(values.entries()).map(([label, value]) => {
                    const isSelected = value === selected;
                    return (
                        <option
                            className={`${isSelected ? "bg-emeraude text-white" : ""}`}
                            value={value}
                            key={value}
                        >
                            {label}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}