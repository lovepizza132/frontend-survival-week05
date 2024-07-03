import React, { useRef } from 'react';

type TextFieldProps = {
  label: string,
  placeholder: string,
  text: string,
  setText: (value: string) => void,
}
export default function TextField({
  label, placeholder, text, setText,
}: TextFieldProps) {
  const inputId = useRef(`input-${Math.random()}`);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setText(value);
  };

  return (
    <div>
      <label
        htmlFor={inputId.current}
        style={{
          marginRight: '1rem',
        }}
      >
        {label}
      </label>
      <input
        id={inputId.current}
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}
