export default function Card({ children }) {
  const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "16px",
    margin: "10px 0",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  };

  return <div style={cardStyle}>{children}</div>;
}
