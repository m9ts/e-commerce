import { useState } from 'react';

function ProductCard({
  product,
  priority,
  onViewDetails,
  onAddToCart,
}) {
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
        {product.promotion && (
          <span className="promotion-badge">
            Promoção
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="product-price-container">
          {product.promotion && (
            <span className="old-price">
              {product.oldPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          )}

          <strong className="product-price">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </div>

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
          {added ? 'Adicionado' : 'Adicionar ao carrinho' }
        </button>
      </div>
    </article>
  );
}

export default ProductCard;