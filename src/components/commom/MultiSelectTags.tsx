import React, { useContext, useState } from "react";
import Select from "react-select";
import { GlobalContext } from "./context/GlobalContext";

export interface Tag {
  id: string;
  name: string;
}

interface Props {
  tags: Tag[];
  selectedTags: Tag[];
  onChange: (tags: Tag[]) => void;
}

const MultiSelectTags: React.FC<Props> = ({ tags, selectedTags, onChange }) => {
  const [inputValue, setInputValue] = useState("");
  const { set_dark } = useContext(GlobalContext);
  const dark: boolean = set_dark.is_dark === "dark";

  const options = tags.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  const handleChange = (selectedOptions: any) => {
    const newSelectedTags = selectedOptions.map((option: any) => ({
      id: option.value,
      name: option.label,
    }));
    onChange(newSelectedTags);
  };

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  return (
    <Select
      isMulti
      className="w-full font-[Lexend] font-light rounded"
      options={options}
      value={selectedTags.map((tag) => ({ label: tag.name, value: tag.id }))}
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
          color: "#333333ce",
          border: "1px solid #cbd5e1",
          boxShadow: "none",
          "&:hover": {
            border: "1px solid #333333ce",
          },
        }),
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? "#333333ce" : "#333333ce",
          backgroundColor: state.isSelected ? "#cbd5e1" : "#ffffff",
          "&:hover": {
            backgroundColor: "#cbd5e1",
          },
        }),
        input: (provided) => ({
          ...provided,
          color: "#cbd5e1",
        }),
        placeholder: (provided) => ({
          ...provided,
          color: dark ? "#64748b" : "#cbd5e1",
        }),
        clearIndicator: (provided) => ({
          ...provided,
          color: "#64748b",
          "&:hover": {
            color: "#64748b",
          },
        }),
        dropdownIndicator: (provided) => ({
          ...provided,
          color: "#64748b",
          "&:hover": {
            color: "#64748b",
          },
        }),
        indicatorSeparator: (provided) => ({
          ...provided,
          backgroundColor: "#64748b",
        }),
      }}
    />
  );
};

export default MultiSelectTags;
