import React from "react";
import { Card } from "react-bootstrap";
import { useLanguage } from '../components/LanguageContext';
import "./WhiteNights.css";

function WhiteNights() {
  const { language } = useLanguage();

  // Citat na engleskom i srpskom jeziku
  const quotes = {
    eng: [
      "“The world is a prison, and there is no escape from it.”",
      "“I am a stranger to myself, and I will remain so until the end of my life.”",
      "“In that brief moment, all the world fell silent, and I saw it with clarity.”",
      "“There is nothing more difficult than choosing between two evils.”",
      "“We are all alone in this world, even when we are surrounded by others.”",
      "“The night is a mirror of our souls, and we are forever at the mercy of our darkness.”",
      "“A person can lie to themselves, but they cannot lie to their soul.”",
      "“We are our own prison, and the key to freedom is buried deep within.”",
      "“Life is a struggle between who we are and who we wish to become.”",
      "“A man is not free until he has faced his own demons.”",
      "“In the end, the only thing that matters is what we believe in.”",
      "“We are all looking for something, but most of us don’t even know what that something is.”",
      "“The heart is a strange thing, it can be cruel and kind, all at once.”",
      "“Suffering is the price we pay for existence.”",
      "“There is no greater tragedy than a life wasted in fear.”",
      "“We all live in the shadows, but some of us choose to walk in the light.”",
      "“The pain of loss is more profound than any joy we could ever experience.”",
      "“True strength is found in the ability to forgive.”",
      "“The most dangerous lies are the ones we tell ourselves.”",
      "“What is man but a creature of his own making?”"
    ],
    srb: [
      "“Svetski je zatvor i nema izlaza iz njega.”",
      "“Stranac sam za sebe i tako ću ostati do kraja svog života.”",
      "“U tom kratkom trenutku, ceo svet je utihnuo i video sam ga sa jasnoćom.”",
      "“Nema ništa težeg od izbora između dva zla.”",
      "“Svi smo mi sami u ovom svetu, čak i kada smo okruženi drugim ljudima.”",
      "“Noć je ogledalo naših duša, i zauvek smo na milost i nemilost našem tami.”",
      "“Čovek može da laže samog sebe, ali ne može da laže svoju dušu.”",
      "“Mi smo vlastiti zatvor, a ključ slobode je duboko zakopan u nama.”",
      "“Život je borba između onoga što jesmo i onoga što želimo da postanemo.”",
      "“Čovek nije slobodan dok se ne suoči sa sopstvenim demonima.”",
      "“Na kraju, jedina stvar koja se računa je u šta verujemo.”",
      "“Svi mi nešto tražimo, ali većina nas ni ne zna šta je to nešto.”",
      "“Srce je čudna stvar, može biti i surovo i ljubazno, u isto vreme.”",
      "“Patnja je cena koju plaćamo za postojanje.”",
      "“Nema veće tragedije od života protraćenog u strahu.”",
      "“Svi mi živimo u senkama, ali neki od nas biraju da hodaju u svetlu.”",
      "“Bol od gubitka je dublji nego bilo koja radost koju bismo mogli da doživimo.”",
      "“Prava snaga se nalazi u sposobnosti da oprostimo.”",
      "“Najopasnije laži su one koje sebi pričamo.”",
      "“Šta je čovek, nego stvorenje svog vlastitog stvaranja?”"
    ]
  };

  const t = quotes[language];

  return (
    <div className="white-nights-bg">
      <h1 className="white-nights-title">{language === 'eng' ? 'White Nights' : 'Bela noć'}</h1>
      <div className="white-nights-grid">
        {t.map((quote, idx) => (
          <Card key={idx} className="white-nights-card">
            <Card.Body>
              <Card.Text className="quote-text">{quote}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WhiteNights;

