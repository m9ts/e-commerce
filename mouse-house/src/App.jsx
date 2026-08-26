import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.error('Erro ao carregar os produtos:', e);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  const sortedProducts = [...filteredProducts];

  if (sortOrder === 'asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === 'desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const addToCart = (product) => {
    const productInCart = cart.find(
      (item) => item.id === product.id
    );

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart(
      cart.filter((item) => item.id !== productId)
    );
  };

  return (
    <>
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        <section className="products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <span>Catálogo</span>

              <h2>
                Encontre o mouse ideal para você
              </h2>
            </div>

            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar mouse por nome..."
                value={searchItem}
                onChange={(event) =>
                  setSearchItem(event.target.value)
                }
              />

              <select
                value={sortOrder}
                onChange={(event) =>
                  setSortOrder(event.target.value)
                }
              >
                <option value="">
                  Ordenar por
                </option>

                <option value="asc">
                  Preço: menor para o maior
                </option>

                <option value="desc">
                  Preço: maior para o menor
                </option>
              </select>
            </div>

            {filteredProducts.length === 0 && (
              <p>Nenhum produto encontrado =/</p>
            )}

            <div className="products-grid">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={setSelectedProduct}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {isCartOpen && (
        <Cart
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
        />
      )}
    </>
  );
}

export default App;