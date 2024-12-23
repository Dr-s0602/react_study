import { AppProps } from 'next/app';
import Link from 'next/link';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* 공통 헤더 */}
            <header
                style={{
                    backgroundColor: '#4caf50',
                    color: 'white',
                    padding: '10px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <h1 style={{ margin: 0, fontSize: '24px' }}>React Hooks 예제</h1>
                {/* 홈으로 이동 버튼 */}
                <Link href="/">
                    <button
                        style={{
                            backgroundColor: 'white',
                            color: '#4caf50',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        홈으로
                    </button>
                </Link>
            </header>

            {/* 페이지 콘텐츠 */}
            <main style={{ padding: '20px', flex: '1' }}>
                <Component {...pageProps} />
            </main>

            {/* 공통 푸터 */}
            <footer
                style={{
                    backgroundColor: '#f1f1f1',
                    textAlign: 'center',
                    padding: '10px 0',
                    borderTop: '1px solid #ddd',
                }}
            >
                <p style={{ margin: 0 }}>© 2024 Dr_sil. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MyApp;
