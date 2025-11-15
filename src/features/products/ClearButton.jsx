function ClearButton({ onClearFilter }) {
  return (
    <div className="flex justify-center my-5">
      <button
        onClick={onClearFilter}
        className="bg-indigo-700 text-white py-2 px-6 rounded-lg font-semibold hover:scale-95 hover:bg-indigo-600"
      >
        Clear All Filters
      </button>
    </div>
  );
}

export default ClearButton;
