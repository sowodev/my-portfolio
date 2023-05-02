import React, { useState } from "react";
import Select from "react-select";

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
      className="w-100 font-[Lexend] font-light ring-slate-300 rounded placeholder:text-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
      styles={{
        control: (provided) => ({
          ...provided,
          color: "#333333ce",
          border: "1px solid #cbd5e1",
          boxShadow: "none",
          height: "2.5rem",
          "&:hover": {
            border: "1px solid #333333ce",
          },
        }),
      }}
      options={options}
      value={selectedTags.map((tag) => ({ label: tag.name, value: tag.id }))}
      onChange={handleChange}
      onInputChange={handleInputChange}
      inputValue={inputValue}
      placeholder="Select tags"
      noOptionsMessage={() => "No tags found"}
      isClearable={true}
    />
  );
};

export default MultiSelectTags;
