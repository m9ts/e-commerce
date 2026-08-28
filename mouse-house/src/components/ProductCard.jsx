import { useState } from 'react';
import Stars from './Stars';

function ProductCard({
  product,
  priority,
  quantityInCart,
  onViewDetails,
  onAddToCart,
}) {
  const [added, setAdded] = useState(false);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const limiteAlcancado = quantityInCart >= 10;

  const aumentarQuantidade = () => {
    const quantidadeDisponivel = 10 - quantityInCart;

    if (quantityToAdd < quantidadeDisponivel) {
      setQuantityToAdd(quantityToAdd + 1);
    }
  };

  const diminuirQuantidade = () => {
    if (quantityToAdd > 1) {
      setQuantityToAdd(quantityToAdd - 1);
    }
  };

  const handleAddedToCart = () => {
    if (limiteAlcancado) {
      return;
    }

    onAddToCart(product, quantityToAdd);

    setAdded(true);
    setQuantityToAdd(1);

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

        <Stars
          rating={product.rating}
          reviews={product.reviews}
        />

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

        {!limiteAlcancado && (
          <div className="card-quantity-control">
            <button
              type="button"
              onClick={diminuirQuantidade}
              disabled={quantityToAdd <= 1}
            >
              -
            </button>

            <span>{quantityToAdd}</span>

            <button
              type="button"
              onClick={aumentarQuantidade}
              disabled={
                quantityToAdd >= 10 - quantityInCart
              }
            >
              +
            </button>
          </div>
        )}

        <button
          className={`cart-button ${added ? 'added' : ''}`}
          onClick={handleAddedToCart}
          disabled={limiteAlcancado}
        >
          {limiteAlcancado
            ? 'Limite de 10 unidades'
            : added
              ? 'Adicionado'
              : 'Adicionar ao carrinho'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;