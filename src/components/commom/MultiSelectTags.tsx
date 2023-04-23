import React, { useState } from "react";
import Select from "react-select";

export interface Tag {
  id: string;
  name: string;
}

interface Props {
  tags: Tag[]; // replace with your own tag type
  selectedTags: Tag[]; // replace with your own tag type
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
