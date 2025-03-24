import { article } from "../interface/article";
import isig from "../assets/isig.jpg";
import mlinzi from "../assets/mlinzi.png";
import okonnect from "../assets/okonnect.png";
import ht from "../assets/HT2.jpg";
import { dataEntreprise } from "../interface/Entreprise";

export const dataArticle: article[] = [
  {
    id: 1,
    title: "Comprendre et utiliser useContext en React.js",
    description:
      "React propose plusieurs solutions pour gérer l’état et partager des données entre composants. Parmi elles, le Contexte React (useContext) permet d’éviter le prop drilling (passer des props à chaque niveau) et de rendre le code plus clair et maintenable.",
    link: "https://tinyurl.com/dhpyattw",
  },
  {
    id: 2,
    title: "Migrer vos fichiers Node.js de require à import facilement!",
    description:
      "Avec l’évolution de #JavaScript, l’utilisation des modules #ECMAScript (ESM) devient de plus en plus courante. Si vous travaillez encore avec #require, voici comment passer à #import sans stress 😊 !",
    link: "https://tinyurl.com/4657tud5",
  },
  {
    id: 3,
    title:
      "Comprendre git checkout -- ., git reset et git reset --hard HEAD~1",
    description:
      "commandes peuvent être un peu intimidantes, surtout lorsqu’elles affectent directement nos fichiers. Aujourd’hui, on va décrypter trois commandes souvent utilisées pour réinitialiser un projet à un état antérieur :",
    link: "https://tinyurl.com/uss7zsax",
  },
];

export const dataEntre: dataEntreprise[] = [
  {
    title: "MLINZI",
    image: mlinzi,
    link: "https://tinyurl.com/yc3z9atw",
  },
  {
    title: "O-Konnect",
    image: okonnect,
    link: "#",
  },
  {
    title: "Hub Technologie",
    image: ht,
    link: "https://hubtechnologie.com/",
  },
  {
    title: "ISIG",
    image: isig,
    link: "https://isig.ac.cd",
  },
];
