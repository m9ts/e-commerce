function Header() {
    return (
        <header className="header">
            <div className="container header-content">
                <a href="/" className="logo">
                    Mouse House
                </a>

                <nav className="nav">
                    <a href="#products">Produtos</a>
                    <a href="/como-fiz">Como fiz</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;