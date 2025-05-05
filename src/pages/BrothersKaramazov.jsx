import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import './BrothersKaramazov.css';

function BrothersKaramazov() {
  const { language } = useLanguage();

  // Citat na engleskom i srpskom jeziku
  const quotes = {
    eng: [
      "What is hell? I maintain that it is the suffering of being unable to love.",
      "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
      "Above all, don't lie to yourself.",
      "People speak sometimes about the ‘bestial’ cruelty of man, but that is terribly unjust and offensive to beasts.",
      "A man who lies to himself, and believes his own lies, becomes unable to recognize truth, either in himself or in anyone else.",
      "Everyone is really responsible to all men for all men and for everything.",
      "Love in action is a harsh and dreadful thing compared with love in dreams.",
      "The more I love humanity in general, the less I love man in particular.",
      "I love mankind, but I find to my amazement that the more I love mankind as a whole, the less I love man in particular.",
      "Much unhappiness has come into the world because of bewilderment and things left unsaid.",
      "We are all responsible for everyone else—but I am more responsible than all the others are.",
      "You must know that there is nothing higher, or stronger, or sounder, or more useful afterwards in life, than some good memory.",
      "It is not possible to eat me without insisting that I sing praises of my devourer?",
      "The more stupid one is, the closer one is to reality.",
      "Man only likes to count his troubles; he doesn't calculate his happiness.",
      "If there is no God, everything is permitted.",
      "The secrets of the human heart are the saddest of all.",
      "Faith did not come from reason, but reason from faith.",
      "To think too much is a disease; a healthy mind knows how to play.",
      "The greatest crimes in the world are not committed by people breaking the rules but by people following their own rules.",
      "It is better to take a new step than to repeat the old ones.",
      "A lie is common—all men lie, but as for the deepest, tenderest emotions, most men lie in them.",
      "Man is happy so long as he chooses to be happy.",
      "The most offensive crime in the world is to show no self-restraint."
    ],
    srb: [
      "Šta je pakao? Smatram da je to patnja nesposobnosti da voliš.",
      "Misterija ljudskog postojanja leži ne samo u opstanku, već u pronalaženju nečega za šta treba živeti.",
      "Pre svega, nemojte lagati sebi.",
      "Ljudi ponekad govore o ‘zverskoj’ okrutnosti čoveka, ali to je strašno nepravedno i uvredljivo za zveri.",
      "Čovek koji laže sebi, i veruje u svoje laži, postaje nesposoban da prepozna istinu, bilo u sebi bilo u drugima.",
      "Svi smo mi zaista odgovorni svim ljudima za sve ljude i za sve.",
      "Ljubav u akciji je oštra i strašna stvar u poređenju s ljubavlju u snovima.",
      "Što više volim čovečanstvo uopšte, manje volim čoveka posebno.",
      "Volim čovečanstvo, ali sa čuđenjem otkrivam da što više volim čovečanstvo kao celinu, manje volim čoveka posebno.",
      "Mnogo nesreće došlo je na svet zbog zbunjenosti i stvari koje su ostale neizrečene.",
      "Svi smo odgovorni za sve druge—ali ja sam odgovoran više od svih drugih.",
      "Morate znati da ne postoji ništa više, jače, zdravije, ni korisnije posle života od dobre uspomene.",
      "Nije moguće jesti mene, a da ne insistiraš da pevam hvalu svom proždrljivcu?",
      "Što je neko gluplji, to je bliže stvarnosti.",
      "Čovek voli da broji svoje brige; on ne računa svoju sreću.",
      "Ako nema Boga, sve je dozvoljeno.",
      "Tajna ljudskog srca je najtužnija od svih.",
      "Vera nije došla iz razuma, već razuman iz vere.",
      "Previše razmišljati je bolest; zdrav um zna kako da se igra.",
      "Najveće zločine na svetu ne čine ljudi koji krše pravila, već ljudi koji slede svoja pravila.",
      "Bolje je napraviti novi korak nego ponoviti stari.",
      "Laž je uobičajena—svi ljudi lažu, ali što se dubljih, nežnijih emocija tiče, većina ljudi laže u njima.",
      "Čovek je srećan dok god odlučuje da bude srećan.",
      "Najveći zločin na svetu je ne pokazati samokontrolu."
    ]
  };

  const t = quotes[language];

  return (
    <div className="karamazov-bg">
      <h1 className="karamazov-title">{language === 'eng' ? 'The Brothers Karamazov' : 'Braća Karamazov'}</h1>
      <div className="manuscript-container">
        {t.map((quote, index) => (
          <div key={index} className="manuscript">
            <p className="manuscript-text">{quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrothersKaramazov;
