import React, { useContext, useState } from "react";
import Select from "react-select";
import { GlobalContext } from "../context/GlobalContext";

interface Props {
  tags: string[];
  selectedTags: string[];
  onChange: (tags: string[]) => void;
}

const MultiSelectTags: React.FC<Props> = ({ tags, selectedTags, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const { set_dark } = useContext(GlobalContext);
  const dark: boolean = set_dark.is_dark === "dark";

  const options = tags.map((tag) => ({
    label: tag,
    value: tag,
  }));

  const handleChange = (selectedOptions: any) => {
    const newSelectedTags = selectedOptions.map(
      (option: any) => option.value as string
    );
    onChange(newSelectedTags);
  };

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  return (
    <Select
      isMulti
      className="w-full rounded font-[Lexend] font-light"
      options={options}
      value={selectedTags.map((tag) => ({ label: tag, value: tag }))}
      onChange={handleChange}
      onInputChange={handleInputChange}
      inputValue={inputValue}
      placeholder="Select tags"
      noOptionsMessage={() => "No tags found"}
      isClearable={true}
      styles={{
        control: (provided) => ({
          ...provided,
          color: dark ? "#cbd5e1" : "#333333ce",
          border: dark ? "1px solid  #64748b" : "1px solid #cbd5e1",
          backgroundColor: dark ? "#1e293b" : "#ffffff",
          "&:hover": {
            backgroundColor: dark ? "#334155" : "#ffffff",
          },
        }),
        menu: (provided) => ({
          ...provided,
          color: dark ? "#cbd5e1" : "#333333ce",
          border: dark ? "1px solid #64748b" : "1px solid #cbd5e1",
          backgroundColor: dark ? "#1e293b" : "#ffffff",
          boxShadow: dark
            ? "0px 5px 8px rgba(100, 116, 139, 0.5)"
            : "0px 4px 8px rgba(0, 0, 0, 0.15)",
          overflow: "hidden",
        }),
        // 30, 41, 59,
        option: (provided, state) => ({
          ...provided,
          color: dark ? "#cbd5e1" : "#333333ce",
          backgroundColor: dark ? "#1e293b" : "#ffffff",
          "&:hover": {
            backgroundColor: dark ? "#334155" : "#f3f4f6",
          },
        }),
        input: (provided) => ({
          ...provided,
          color: dark ? "#cbd5e1" : "#333333ce",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: dark ? "#64748b" : "#cbd5e1",
        }),
        clearIndicator: (provided) => ({
          ...provided,
          color: dark ? "#64748b" : "#cbd5e1",
          "&:hover": {
            color: dark ? "#cbd5e1" : "#64748b",
          },
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: dark ? "#64748b" : "#cbd5e1",
          "&:hover": {
            color: dark ? "#cbd5e1" : "#64748b",
          },
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          backgroundColor: dark ? "#64748b" : "#cbd5e1",
        }),
        noOptionsMessage: (provided) => ({
          ...provided,
          color: dark ? "#cbd5e1" : "#333333ce",
        }),
        multiValue: (provided) => ({
          ...provided,
          color: dark ? "#4b5563" : "#333333ce",
          backgroundColor: dark ? "#cbd5e1" : "#e2e8f0",
        }),
      }}
    />
  );
};

export default MultiSelectTags;
