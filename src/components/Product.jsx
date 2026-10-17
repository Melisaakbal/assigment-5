import Card from "./Card";

export default function Product({ product, onAddToCart }) {
  const isOutOfStock = product.stock === 0;

  const productStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  };

  const badgeStyle = {
    alignSelf: "flex-start",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: isOutOfStock ? "#ffebee" : "#e8f5e9",
    color: isOutOfStock ? "#c62828" : "#2e7d32"
  };

  const buttonStyle = {
    marginTop: "8px",
    padding: "8px 12px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: isOutOfStock ? "#ccc" : "#007bff",
    color: "#fff",
    cursor: isOutOfStock ? "not-allowed" : "pointer"
  };

  return (
    <Card>
      <div style={productStyle}>
        <h3>{product.name}</h3>
        <p>Kategori: {product.category}</p>
        <p>Fiyat: ₺{product.price}</p>
        
        <span style={badgeStyle}>
          {isOutOfStock ? "Stokta Yok" : `Stok: ${product.stock}`}
        </span>

        <button
          style={buttonStyle}
          disabled={isOutOfStock}
          onClick={() => onAddToCart(product)}
        >
          {isOutOfStock ? "Tükendi" : "Sepete Ekle"}
        </button>
      </div>
    </Card>
  );
}
