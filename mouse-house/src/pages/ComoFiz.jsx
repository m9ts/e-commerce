import { Link } from 'react-router-dom';

function ComoFiz() {
  return (
    <main className="como-fiz-page">
      <div className="container">
        <div className="como-fiz-header">
          <span>Mouse House</span>
          <h1>Como o site foi desenvolvido</h1>

          <p>
            Um resumo das principais decisões técnicas, arquitetura
            e funcionalidades implementadas no projeto.
          </p>
        </div>

        <div className="video-container">
          <video
            className="project-video"
            controls
            preload="metadata"
          >
            <source
              src="https://pub-20a37aaaf276468b8725b960dd048748.r2.dev/mh-como-fiz.mp4"
              type="video/mp4"
            />

            Seu navegador não suporta reprodução de vídeo =/
          </video>
        </div>

        <section className="como-fiz-content">
          <div className="como-fiz-section">
            <h2>O que o vídeo cobre</h2>

            <ol>
              <li>
                <strong>Estrutura do projeto:</strong> organização em
                componentes, páginas, estilos e arquivos públicos,
                incluindo <code>Home.jsx</code>, <code>ComoFiz.jsx</code>,
                <code>components/</code> e <code>products.json</code>.
              </li>

              <li>
                <strong>Catálogo separado do front-end:</strong> os produtos
                ficam em <code>products.json</code> e são carregados com
                <code>fetch()</code>, evitando deixar os produtos hardcoded
                nos componentes.
              </li>

              <li>
                <strong>Headless commerce e arquitetura em nuvem: </strong>
                como a separação entre dados e interface representa um
                headless commerce em miniatura e onde CDN, cache e origem
                entrariam em uma arquitetura AWS.
              </li>

              <li>
                <strong>Lighthouse:</strong> auditoria executada ao vivo
                para analisar performance, acessibilidade, boas práticas
                e SEO da aplicação publicada.
              </li>

              <li>
                <strong>Uso de inteligência artificial:</strong> possibilidades
                de integração de IA na loja e os principais desafios encontrados
                durante o desenvolvimento.
              </li>
            </ol>
          </div>

          <div className="como-fiz-section">
            <h2>Decisões técnicas</h2>

            <ul>
              <li>
                <strong>ReactJS + Vite:</strong> a aplicação foi dividida em
                componentes reutilizáveis, permitindo separar responsabilidades
                como catálogo, carrinho, modal, checkout e avaliações.
              </li>

              <li>
                <strong>Componentização:</strong> elementos como
                <code> ProductCard</code>, <code>Cart</code>,
                <code> Checkout</code>, <code>ProductModal</code> e
                <code> Stars</code> foram separados para evitar concentrar
                toda a lógica e interface em um único arquivo.
              </li>

              <li>
                <strong>Catálogo separado:</strong> o
                <code> products.json</code> funciona como a fonte de dados
                estática do catálogo, enquanto o React é responsável por
                buscar e renderizar essas informações.
              </li>

              <li>
                <strong>Busca e filtros combinados:</strong> busca por nome,
                filtro por categoria, filtro de ofertas e ordenação trabalham
                sobre os produtos já carregados em memória, sem uma nova
                requisição ao servidor a cada interação.
              </li>

              <li>
                <strong>Estado no React:</strong> recursos como carrinho,
                quantidade, modal, checkout e filtros são controlados com
                <code> useState</code>, fazendo a interface reagir às ações
                do usuário.
              </li>

              <li>
                <strong>Checkout demonstrativo:</strong> o pedido é montado
                em memória a partir dos dados do formulário e do carrinho,
                gerando um recibo fictício sem backend ou banco de dados.
              </li>

              <li>
                <strong>Cloudflare Pages + R2:</strong> o site foi publicado
                no Cloudflare Pages e o vídeo desta página foi armazenado
                no Cloudflare R2, sendo reproduzido pelo elemento
                <code> &lt;video&gt;</code> do próprio site.
              </li>
            </ul>
          </div>
        </section>

        <Link to="/" className="back-home-button">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}

export default ComoFiz;