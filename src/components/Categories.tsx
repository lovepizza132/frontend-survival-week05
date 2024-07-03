import Category from './Category';

type CategoriesProp = {
  categories: string[],
  setFilterCategory: (value: string) => void,

}

export default function Categories({
  categories, setFilterCategory,
}: CategoriesProp) {
  return (
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
      }}
    >
      {['전체', ...categories].map((category: string) => (
        <Category
          key={category}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </ul>
  );
}
