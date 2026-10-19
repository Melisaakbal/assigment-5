import Product from "./Product";

export default function ProductList({ products, onAddToCart }) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "16px",
    marginTop: "16px"
  };

  if (products.length === 0) {
    return <p style={{ marginTop: "20px", color: "#666" }}>Aradığınız kriterlere uygun ürün bulunamadı.</p>;
  }

  return (
    <div style={gridStyle}>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
