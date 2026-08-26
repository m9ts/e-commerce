function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <strong className="product-price">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </strong>

        <button className="details-button">
          Ver detalhes
        </button>
      </div>
    </article>
  );
}

export default ProductCard;