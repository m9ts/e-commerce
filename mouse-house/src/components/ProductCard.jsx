import { useState } from 'react';

function ProductCard({ product, onViewDetails, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAddedToCart = () => {
    onAddToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

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

        <button
          className="details-button"
          onClick={() => onViewDetails(product)}
        >
          Ver detalhes
        </button>

        <button
          className={`cart-button ${added ? 'added' : ''}`}
          onClick={handleAddedToCart}
        >
          {added ? 'Adicionado' : 'Adicionar ao carrinho'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;