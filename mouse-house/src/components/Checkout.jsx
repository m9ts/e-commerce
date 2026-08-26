import { useState } from 'react';

function Checkout({ cart, onClose, onFinish }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    number: '',
  });

  const [order, setOrder] = useState(null);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newOrder = {
      id: Date.now(),
      customer: formData,
      items: cart,
      total: total,
    };

    setOrder(newOrder);
  };

  // simulação de recibbo
  if (order) {
    return (
      <div className="checkout-overlay">
        <div className="checkout-container receipt">
          <div className="checkout-header">
            <div>
              <span>Mouse House</span>
              <h2>Pedido realizado!</h2>
            </div>

            <button
              className="checkout-close"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div className="receipt-content">
            <div className="receipt-number">
              <span>Número do pedido</span>
              <strong>#{order.id}</strong>
            </div>

            <div className="receipt-section">
              <h3>Cliente</h3>

              <p>{order.customer.name}</p>
              <p>{order.customer.email}</p>
            </div>

            <div className="receipt-section">
              <h3>Entrega</h3>

              <p>
                {order.customer.address}, {order.customer.number}
              </p>
            </div>

            <div className="receipt-section">
              <h3>Produtos</h3>

              <div className="receipt-products">
                {order.items.map((item) => (
                  <div
                    className="receipt-product"
                    key={item.id}
                  >
                    <div>
                      <strong>{item.name}</strong>

                      <span>
                        Quantidade: {item.quantity}
                      </span>
                    </div>

                    <strong>
                      {(item.price * item.quantity).toLocaleString(
                        'pt-BR',
                        {
                          style: 'currency',
                          currency: 'BRL',
                        }
                      )}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="receipt-total">
              <span>Total</span>

              <strong>
                {order.total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
            </div>

            <button
              className="finish-order-button"
              onClick={onFinish}
            >
              Voltar para a loja
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Checkout
  return (
    <div className="checkout-overlay">
      <div className="checkout-container">
        <div className="checkout-header">
          <div>
            <span>Mouse House</span>
            <h2>Finalizar pedido</h2>
          </div>

          <button
            className="checkout-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form
          className="checkout-content"
          onSubmit={handleSubmit}
        >
          <div className="checkout-form">
            <h3>Dados para entrega</h3>

            <label>
              Nome completo
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              E-mail
              <input
                type="email"
                name="email"
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Endereço
              <input
                type="text"
                name="address"
                placeholder="Rua, avenida..."
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Número
              <input
                type="text"
                name="number"
                placeholder="123"
                value={formData.number}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="checkout-summary">
            <h3>Resumo do pedido</h3>

            <div className="checkout-products">
              {cart.map((item) => (
                <div
                  className="checkout-product"
                  key={item.id}
                >
                  <div>
                    <span>{item.name}</span>

                    <small>
                      Quantidade: {item.quantity}
                    </small>
                  </div>

                  <strong>
                    {(item.price * item.quantity).toLocaleString(
                      'pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL',
                      }
                    )}
                  </strong>
                </div>
              ))}
            </div>

            <div className="checkout-total">
              <span>Total</span>

              <strong>
                {total.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
            </div>

            <button
              type="submit"
              className="finish-order-button"
            >
              Finalizar pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;