import BreadCrumb from "../../components/common/Breadcrumb";
import SEOHead from "../../components/common/SEOHead";

function Suporte() {
    const whatsappNumber = "5511998710302"; // Número formatado para WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    
    return (
        <>
            <SEOHead
                title="Suporte - 8links"
                description="Entre em contato com nosso suporte via WhatsApp para tirar suas dúvidas."
            />
            <BreadCrumb title="Suporte" />
            
            <section className="section sofax-section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="sofax-default-content text-center">
                                <h2>Como podemos ajudar você?</h2>
                                <p className="mt-3 mb-5" style={{ fontSize: '18px', color: '#666' }}>
                                    Nossa equipe de suporte está pronta para responder suas dúvidas e 
                                    ajudar você a extrair o máximo valor da plataforma 8links.
                                </p>
                                
                                <div className="sofax-pricing-wrap" style={{ 
                                    maxWidth: '600px', 
                                    margin: '0 auto',
                                    padding: '60px 40px',
                                    background: '#f8f9fa',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}>
                                    <div className="text-center mb-4">
                                        <svg 
                                            width="80" 
                                            height="80" 
                                            viewBox="0 0 24 24" 
                                            fill="#25D366"
                                            style={{ marginBottom: '20px' }}
                                        >
                                            <path d="M12.031 1.172c-5.963 0-10.812 4.848-10.812 10.811 0 1.902.494 3.693 1.358 5.246l-1.405 5.128 5.233-1.374c1.486.81 3.189 1.274 4.995 1.274h.004c5.96 0 10.81-4.848 10.81-10.811s-4.85-10.812-10.811-10.812h-.004c.002 0 .002 0 .004 0zm-6.742 9.497c.184-.458.376-.466.549-.474.15-.007.321-.007.492-.007.172 0 .45.064.684.525.235.461.798 1.947.869 2.089.071.142.116.307.024.496-.092.19-.138.307-.272.473-.135.166-.284.371-.406.498-.134.141-.275.294-.118.578.157.283.699 1.154 1.501 1.869 1.032.921 1.903 1.206 2.174 1.343.271.137.43.115.587-.069.158-.184.672-.785.851-1.056.179-.271.358-.225.6-.134.241.091 1.534.724 1.798.855.263.131.439.198.503.303.063.105.063.605-.142 1.189-.205.584-1.212 1.146-1.668 1.185-.456.04-.885.203-2.975-.618-2.52-1.061-4.109-3.577-4.232-3.743-.123-.166-1.006-1.338-1.006-2.551s.64-1.811.867-2.059z"/>
                                        </svg>
                                        
                                        <h3 className="mb-3">Fale Conosco pelo WhatsApp</h3>
                                        <p style={{ fontSize: '16px', color: '#666', marginBottom: '30px' }}>
                                            Clique no botão abaixo para iniciar uma conversa com nosso time de suporte
                                        </p>
                                        
                                        <a 
                                            href={whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sofax-default-btn"
                                            style={{ 
                                                backgroundColor: '#25D366',
                                                color: 'white',
                                                padding: '18px 40px',
                                                fontSize: '18px',
                                                fontWeight: '700',
                                                borderRadius: '10px',
                                                textDecoration: 'none',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 5px 20px rgba(37, 211, 102, 0.3)'
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.transform = 'translateY(-2px)';
                                                e.target.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.transform = 'translateY(0)';
                                                e.target.style.boxShadow = '0 5px 20px rgba(37, 211, 102, 0.3)';
                                            }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                                <path d="M12.031 1.172c-5.963 0-10.812 4.848-10.812 10.811 0 1.902.494 3.693 1.358 5.246l-1.405 5.128 5.233-1.374c1.486.81 3.189 1.274 4.995 1.274h.004c5.96 0 10.81-4.848 10.81-10.811s-4.85-10.812-10.811-10.812h-.004c.002 0 .002 0 .004 0zm-6.742 9.497c.184-.458.376-.466.549-.474.15-.007.321-.007.492-.007.172 0 .45.064.684.525.235.461.798 1.947.869 2.089.071.142.116.307.024.496-.092.19-.138.307-.272.473-.135.166-.284.371-.406.498-.134.141-.275.294-.118.578.157.283.699 1.154 1.501 1.869 1.032.921 1.903 1.206 2.174 1.343.271.137.43.115.587-.069.158-.184.672-.785.851-1.056.179-.271.358-.225.6-.134.241.091 1.534.724 1.798.855.263.131.439.198.503.303.063.105.063.605-.142 1.189-.205.584-1.212 1.146-1.668 1.185-.456.04-.885.203-2.975-.618-2.52-1.061-4.109-3.577-4.232-3.743-.123-.166-1.006-1.338-1.006-2.551s.64-1.811.867-2.059z"/>
                                            </svg>
                                            Iniciar Conversa no WhatsApp
                                        </a>
                                        
                                        <p style={{ 
                                            fontSize: '14px', 
                                            color: '#999', 
                                            marginTop: '20px',
                                            marginBottom: '0'
                                        }}>
                                            +55 11 99871-0302
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="row mt-5">
                                    <div className="col-md-4 mb-4">
                                        <div className="text-center">
                                            <div style={{ 
                                                width: '60px', 
                                                height: '60px', 
                                                background: '#ff6600',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 20px'
                                            }}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                                                </svg>
                                            </div>
                                            <h5>Suporte Rápido</h5>
                                            <p style={{ fontSize: '14px', color: '#666' }}>
                                                Resposta em até 2 horas durante horário comercial
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 mb-4">
                                        <div className="text-center">
                                            <div style={{ 
                                                width: '60px', 
                                                height: '60px', 
                                                background: '#ff6600',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 20px'
                                            }}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                                                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                                                </svg>
                                            </div>
                                            <h5>Horário de Atendimento</h5>
                                            <p style={{ fontSize: '14px', color: '#666' }}>
                                                Segunda a Sexta: 9h às 18h<br/>
                                                Sábado: 9h às 13h
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4 mb-4">
                                        <div className="text-center">
                                            <div style={{ 
                                                width: '60px', 
                                                height: '60px', 
                                                background: '#ff6600',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 20px'
                                            }}>
                                                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                            <h5>Suporte Premium</h5>
                                            <p style={{ fontSize: '14px', color: '#666' }}>
                                                Atendimento prioritário para planos Pro e Agência
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Suporte;