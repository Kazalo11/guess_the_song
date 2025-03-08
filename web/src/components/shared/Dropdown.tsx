import { Options } from "react-select";
import AsyncSelect from "react-select/async";

export type DropdownProps = {
  loadOptions: (inputValue: string) => Promise<Options<unknown>>;
};

export default function Dropdown(props: DropdownProps) {
  return (
    <AsyncSelect
      cacheOptions
      loadOptions={props.loadOptions}
      isClearable
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatOptionLabel={(option: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {option.imageUrl && (
            <img
              src={option.imageUrl}
              alt={option.label}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "4px",
                objectFit: "cover",
              }}
            />
          )}
          <span>{option.label}</span>
        </div>
      )}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "#4F46E5" : "#E5E7EB",
          width: "300px",
          boxShadow: state.isFocused ? "0 0 0 1px #4F46E5" : "none",
          "&:hover": {
            borderColor: "#4F46E5",
          },
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: state.isSelected
            ? "#4F46E5"
            : state.isFocused
            ? "#EEF2FF"
            : "white",
          color: state.isSelected ? "white" : "#1F2937",
          "&:hover": {
            backgroundColor: state.isSelected ? "#4F46E5" : "#EEF2FF",
          },
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          width: "300px",
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
        }),
        input: (baseStyles) => ({
          ...baseStyles,
          color: "#1F2937",
        }),
        singleValue: (baseStyles) => ({
          ...baseStyles,
          color: "#1F2937",
        }),
      }}
    />
  );
}
