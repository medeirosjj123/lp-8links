// Success.jsx
// -----------------------------------------------------------------------------
// Página de sucesso pós-checkout
// Confirma o pagamento e redireciona para o app
// -----------------------------------------------------------------------------

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { trackPurchase } from '../../components/common/GoogleAnalytics';
import { trackFBPurchase } from '../../components/common/FacebookPixel';
import SEOHead from '../../components/common/SEOHead';

function CheckoutSuccess() {
    const [searchParams] = useSearchParams();
    const [sessionInfo, setSessionInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const sessionId = searchParams.get('session_id');
        
        if (!sessionId) {
            setError('ID da sessão não encontrado');
            setLoading(false);
            return;
        }

        fetchSessionInfo(sessionId);
    }, [searchParams]);

    const fetchSessionInfo = async (sessionId) => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL || 
                (import.meta.env.VITE_ENVIRONMENT === 'production' 
                    ? 'https://app.8links.com.br' 
                    : 'http://localhost:3000');
            
            const response = await fetch(`${backendUrl}/api/checkout/session/${sessionId}`);
            const data = await response.json();

            if (data.success) {
                setSessionInfo(data.session);
                
                // Tracking de conversão
                if (data.session) {
                    const planValues = {
                        'starter': 97, 'pro': 197, 'club': 397
                    };
                    const planValue = planValues[data.session.plan] || 0;
                    
                    trackPurchase(
                        sessionId, 
                        data.session.plan, 
                        planValue, 
                        data.session.customerEmail
                    );
                    trackFBPurchase(planValue);
                }
                
                // Redirecionar para o app após 5 segundos
                setTimeout(() => {
                    const appUrl = import.meta.env.VITE_APP_URL || 
                        (import.meta.env.VITE_ENVIRONMENT === 'production' 
                            ? 'https://app.8links.com.br' 
                            : 'http://localhost:5173');
                    window.location.href = `${appUrl}/login?checkout=success&email=${data.session.customerEmail}`;
                }, 5000);
            } else {
                setError(data.error || 'Erro ao verificar sessão');
            }
        } catch (err) {
            console.error('Erro ao buscar sessão:', err);
            setError('Erro de conexão');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-6 text-center">
                        <div className="spinner-border text-primary mb-3" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </div>
                        <h3>Verificando seu pagamento...</h3>
                        <p className="text-muted">Aguarde um momento</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-6 text-center">
                        <div className="alert alert-danger">
                            <h4>Ops! Algo deu errado</h4>
                            <p>{error}</p>
                            <a href="/" className="btn btn-primary">
                                Voltar ao Início
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEOHead 
                title="Pagamento Confirmado! Bem-vindo ao 8Links"
                description="Seu pagamento foi processado com sucesso. Agora você tem acesso completo à plataforma 8Links para criar backlinks com IA."
                url="/sucesso"
            />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-md-8 text-center">
                        <div className="success-container">
                        {/* Ícone de sucesso */}
                        <div className="mb-4">
                            <svg 
                                width="80" 
                                height="80" 
                                viewBox="0 0 80 80" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-success"
                            >
                                <circle cx="40" cy="40" r="40" fill="#28a745"/>
                                <path 
                                    d="M25 40L35 50L55 30" 
                                    stroke="white" 
                                    strokeWidth="4" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        {/* Título */}
                        <h1 className="display-4 mb-3 text-success">
                            🎉 Pagamento Confirmado!
                        </h1>

                        {/* Informações do plano */}
                        {sessionInfo && (
                            <div className="mb-4">
                                <h3>Bem-vindo ao 8Links!</h3>
                                <p className="lead">
                                    Sua assinatura do plano <strong>{sessionInfo.plan}</strong> foi ativada com sucesso.
                                </p>
                                <p className="text-muted">
                                    Um email de confirmação foi enviado para: <strong>{sessionInfo.customerEmail}</strong>
                                </p>
                            </div>
                        )}

                        {/* Próximos passos */}
                        <div className="card bg-light mb-4">
                            <div className="card-body">
                                <h5 className="card-title">🚀 Próximos Passos:</h5>
                                <div className="row text-start">
                                    <div className="col-md-6">
                                        <ol>
                                            <li>Você será redirecionado automaticamente</li>
                                            <li>Faça login na sua conta</li>
                                            <li>Configure seus primeiros sites</li>
                                        </ol>
                                    </div>
                                    <div className="col-md-6">
                                        <ol start="4">
                                            <li>Inicie sua automação de backlinks</li>
                                            <li>Acompanhe seus resultados</li>
                                            <li>Aproveite o crescimento orgânico!</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redirecionamento */}
                        <div className="mb-4">
                            <p className="text-muted">
                                Redirecionando para o painel em <span id="countdown">5</span> segundos...
                            </p>
                            <div className="progress mb-3">
                                <div 
                                    className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                                    style={{ width: '100%' }}
                                ></div>
                            </div>
                        </div>

                        {/* Botões de ação */}
                        <div className="d-flex gap-3 justify-content-center">
                            <a 
                                href={`${import.meta.env.VITE_APP_URL || 
                                    (import.meta.env.VITE_ENVIRONMENT === 'production' 
                                        ? 'https://app.8links.com.br' 
                                        : 'http://localhost:5173')}/login`}
                                className="btn btn-success btn-lg"
                            >
                                Ir para o Painel Agora
                            </a>
                            <a 
                                href="/"
                                className="btn btn-outline-secondary btn-lg"
                            >
                                Voltar ao Site
                            </a>
                        </div>

                        {/* Suporte */}
                        <div className="mt-5 pt-4 border-top">
                            <p className="text-muted">
                                Precisa de ajuda? Entre em contato com nosso suporte:
                                <br />
                                <a href="mailto:suporte@8links.com.br" className="text-decoration-none">
                                    suporte@8links.com.br
                                </a>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutSuccess;