import TextField from './TextField';
import Categories from './Categories';

type SearchBarProps = {
  filterText: string,
  categories: string[],
  setFilterText: (value: string) => void,
  setFilterCategory: (value: string) => void,
}

export default function SearchBar({
  filterText, categories, setFilterText, setFilterCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        text={filterText}
        setText={setFilterText}
      />
      <Categories
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
