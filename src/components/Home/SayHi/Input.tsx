import React from "react";

const Input: React.FC<{
  name: string;
  label: string;
  placeholder: string;
  value: string;
  isTextArea?: Boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}> = ({ name, label, placeholder, value, isTextArea, onChange }) => {
  return (
    <div>
      <label htmlFor="fullName" className="text-xs">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          className="mb-4 mt-2 w-full rounded-md bg-[#1A2225] py-2 px-4 text-sm"
          rows={5}
          onChange={onChange}
        />
      ) : (
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          type="text"
          className="mt-2 mb-4 w-full rounded-md bg-[#1A2225] py-2 px-4 text-sm"
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default React.memo(Input);
