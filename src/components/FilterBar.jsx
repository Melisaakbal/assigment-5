export default function FilterBar({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories
}) {
  const barStyle = {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
    flexWrap: "wrap"
  };

  const inputStyle = {
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    flex: "1",
    minWidth: "180px"
  };

  const selectStyle = {
    padding: "8px 12px",
    borderRadius: "4px",
    border: "1px solid #ccc"
  };

  return (
    <div style={barStyle}>
      <input
        type="text"
        placeholder="Ürün ara..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={inputStyle}
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        style={selectStyle}
      >
        <option value="Hepsi">Tüm Kategoriler</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
