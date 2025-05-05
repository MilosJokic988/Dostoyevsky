import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext'; 

function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage(); 
  
  const texts = {
    eng: {
      title: "Dostoyevsky Quotes",
      subtitle: "Dive into the depths of human psychology, morality, and faith through the words of Fyodor Dostoyevsky.",
      registerMessage: "To access the quotes, please register first.",
      buttonText: "Register Now",
      welcomeMessage: (username) => `Welcome back, ${username}!`
    },
    srb: {
      title: "Dostojevski Citati",
      subtitle: "Zaronite u dubine ljudske psihologije, moralnosti i vere kroz reči Fjodora Dostojevskog.",
      registerMessage: "Da biste pristupili citatima, prvo se registrujte.",
      buttonText: "Registrujte se sada",
      welcomeMessage: (username) => `Ponovo dobrodošao, ${username}!`
    }
  };

  const t = texts[language]; // Dinamički odabrani tekstovi prema jeziku

  return (
    <div className="home">
      <h1 className="main-title">{t.title}</h1>
      <p className="subtitle">{t.subtitle}</p>

      {!user ? (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: 'white' }}>
            {t.registerMessage}
          </p>
          <button
            onClick={() => navigate('/register')}
            style={{
              marginTop: '1rem',
              padding: '0.75rem 1.5rem',
              background: '#c9a66b',
              border: 'none',
              borderRadius: '6px',
              color: '#181818',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {t.buttonText}
          </button>
        </div>
      ) : (
        <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
          {t.welcomeMessage(user.username)}
        </p>
      )}
    </div>
  );
}

export default Home;

