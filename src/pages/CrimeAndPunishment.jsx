import React from 'react';
import { Card } from 'react-bootstrap';
import { useLanguage } from '../components/LanguageContext';
import './CrimeAndPunishment.css';

function CrimeAndPunishment() {
  const { language } = useLanguage();

  // Citat na engleskom i srpskom jeziku
  const quotes = {
    eng: [
      "“The man who has a conscience suffers whilst acknowledging his sin. That is his punishment.”",
      "“Pain and suffering are always inevitable for a large intelligence and a deep heart.”",
      "“It takes something more than intelligence to act intelligently.”",
      "“Man takes pride in thinking that he knows the truth, while he often doesn’t know the half of it.”",
      "“To go wrong in one's own way is better than to go right in someone else's.”",
      "“The soul is healed by being with children.”",
      "“What do you mean by 'reason'? What are you saying?”",
      "“The best way to keep a prisoner from escaping is to make sure he never knows he's in prison.”",
      "“The greatest happiness is to know the source of unhappiness.”",
      "“Suffering is part and parcel of extensive intelligence and a feeling heart.”",
      "“He who has a why to live can bear almost any how.”",
      "“It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.”",
      "“There is nothing higher than the truth.”",
      "“The idea of a man is a thousand times more beautiful than the reality of a man.”",
      "“We are all in the gutter, but some of us are looking at the stars.”",
      "“Man is what he believes.”",
      "“The greatest achievement is to love the people who hate you.”",
      "“The best way to predict your future is to create it.”",
      "“There are no moral phenomena at all, only a moral interpretation of phenomena.”",
      "“The more I drink, the more I love you.”"
    ],
    srb: [
      "“Čovek koji ima savest pati dok priznaje svoj greh. To je njegova kazna.”",
      "“Bol i patnja su uvek neizbežni za veliku inteligenciju i duboko srce.”",
      "“Za inteligentno delovanje potrebno je nešto više od same inteligencije.”",
      "“Čovek se ponosi misleći da poznaje istinu, dok često ne zna ni polovinu toga.”",
      "“Ići pogrešnim putem je bolje nego ići pravim putem nekog drugog.”",
      "“Duša se izlečuje kroz kontakt sa decom.”",
      "“Šta misliš pod ‘razumom’? Šta kažeš?”",
      "“Najbolji način da se spreči bežanje zatvorenika je da se uveriš da nikada ne sazna da je u zatvoru.”",
      "“Najveće sreće je znati izvor nesreće.”",
      "“Patnja je neizbežan deo velike inteligencije i osećajnog srca.”",
      "“Onaj ko ima razlog za život može podneti skoro svaki način života.”",
      "“Nisu najjači i najinteligentniji oni koji preživljavaju, već oni koji se najbrže prilagođavaju promenama.”",
      "“Nema ničega višeg od istine.”",
      "“Ideja o čoveku je hiljadu puta lepša od stvarnosti čoveka.”",
      "“Svi smo u kanalizaciji, ali neki od nas gledaju u zvezde.”",
      "“Čovek je ono u šta veruje.”",
      "“Najveće postignuće je voleti ljude koji te mrze.”",
      "“Najbolji način da predvidiš svoju budućnost je da je stvoriš.”",
      "“Nema moralnih fenomena, samo moralna interpretacija fenomena.”",
      "“Što više pijem, to te više volim.”"
    ]
  };

  const t = quotes[language];

  return (
    <div className="crime-bg">
      <h1 className="crime-title">{language === 'eng' ? 'Crime and Punishment' : 'Zločin i kazna'}</h1>
      <div className="crime-grid">
        {t.map((quote, idx) => (
          <Card key={idx} className="crime-card">
            <Card.Body>
              <Card.Text className="quote-text">{quote}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CrimeAndPunishment;
