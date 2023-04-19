import { useState } from "react";

type Tag = {
  id: number;
  label: string;
};

type Props = {
  options: Tag[];
};

const tags: Tag[] = [
  { id: 1, label: "tag1" },
  { id: 2, label: "tag2" },
  { id: 3, label: "tag3" },
  { id: 4, label: "tag4" },
  { id: 5, label: "tag5" },
  { id: 6, label: "tag6" },
];

const MultiSelectInputField: React.FC<Props> = ({ options }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectTag = (tag: Tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
    setSearchQuery("");
  };

  const handleRemoveTag = (tag: Tag) => {
    setSelectedTags(selectedTags.filter((t) => t.id !== tag.id));
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-full py-2 pl-4 pr-10 text-gray-800 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search tags..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery !== "" && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectTag(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap mt-2">
        {selectedTags.map((tag) => (
          <span
            key={tag.id}
            className="px-3 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
          >
            {tag.label}
            <button
              className="ml-2 text-gray-500 focus:outline-none"
              onClick={() => handleRemoveTag(tag)}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

const Test2 = function test2() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <MultiSelectInputField options={tags} />
    </div>
  );
};

export default Test2;
