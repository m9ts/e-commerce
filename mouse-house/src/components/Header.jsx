function Header({ cartCount, onOpenCart }) {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          <img
            src="/images/logo-mouse-house.jpeg"
            alt="Logo Mouse House"
          />

          <span>Mouse House</span>
        </a>

        <nav className="nav">
          <a href="#products">Produtos</a>
          <a href="/como-fiz">Como fiz</a>

          <button
            className="header-cart"
            onClick={onOpenCart}
          >
            Carrinho (<span className="cart-count">{cartCount}</span>)
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;