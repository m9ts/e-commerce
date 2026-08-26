function Cart({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay">
      <aside className="cart-panel">
        <div className="cart-header">
          <h2>Seu carrinho</h2>

          <button onClick={onClose} className="cart-close">
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <p>Seu carrinho está vazio =/</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-info">
                    <h3>{item.name}</h3>

                    <strong>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </strong>

                    <div className="quantity-controls">
                      <button
                        onClick={() => onDecrease(item.id)}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => onIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-button"
                      onClick={() => onRemove(item.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total</span>

              <strong>
                {total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
            </div>

            <button className="checkout-button" onClick={onCheckout}>
              Finalizar compra
            </button>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;