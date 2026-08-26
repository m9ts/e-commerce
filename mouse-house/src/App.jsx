import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((error) => {
        console.error('Erro ao carregar os produtos:', error);
      })
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="container hero-content">
            <span className="hero-label">Performance em cada movimento</span>

            <h1>Seu próximo mouse começa aqui</h1>

            <a href="#products" className="hero-button">
              Ver produtos
            </a>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="container">
            <div className="section-heading">
              <span>Catálogo</span>
              <h2>Encontre o mouse ideal para você</h2>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;