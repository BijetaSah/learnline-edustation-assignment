function FilterCategory({ selectedCategory, onSelectCategory }) {
  const categories = ["All", "Electronics", "Books", "Clothing"];

  return (
    <div className="flex gap-4 justify-center mb-5">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => onSelectCategory(cat)}
          className={` px-6 py-1 rounded-full font-semibold transition-colors duration-300 ${
            cat === selectedCategory
              ? "bg-indigo-700 text-white "
              : "bg-stone-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterCategory;
