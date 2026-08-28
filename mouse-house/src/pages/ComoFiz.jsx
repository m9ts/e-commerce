import { Link } from 'react-router-dom';

function ComoFiz() {
    return (
        <main className='como-fiz-page'>
            <div className='container'>
                <h1>Como o site foi desenvolvido</h1>

                <div className='video-container'>
                    <video className='project-video' controls preload='metadata'>
                        <source src='https://pub-20a37aaaf276468b8725b960dd048748.r2.dev/video.mp4' type='video/mp4' />

                        Seu navegador não suporta reprodução de vídeo =/

                    </video>
                </div>

                <Link to="/" className='back-home-button'>
                    Voltar para a página inicial
                </Link>
            </div>
        </main>
    );
}

export default ComoFiz;