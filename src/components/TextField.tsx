type TextFieldProps = {
  placeholder: string,
}
export default function TextField({
  placeholder,
}: TextFieldProps) {
  return (
    <div>
      <label
        htmlFor="search"
        style={{
          marginRight: '1rem',
        }}
      >
        검색
      </label>
      <input
        id="search"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
