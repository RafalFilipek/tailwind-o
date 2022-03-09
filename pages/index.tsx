import { MainActions } from "../components/MainActions";
import { Markets } from "../components/Header/Markets";
import { Menu } from "../components/Header/Menu";

const markets = [
  {
    name: "Dla Ciebie",
    id: "dla-ciebie",
  },
  {
    name: "Małe i średnie firmy",
    id: "male-i-srednie-firmy",
  },
  {
    name: "Duże firmy i instytucje",
    id: "duze-firmy-i-instytucje",
  },
];

const menu = [
  {
    name: "Oferta",
    id: "oferta",
    elements: [
      { id: "internet", name: "Internet" },
      { id: "orange-flex", name: "Orange Flex" },
      { id: "pakiety", name: "Pakiety" },
      { id: "telewizja", name: "Telewizja" },
      { id: "oferta-na-karte", name: "Oferta na kartę" },
      { id: "doladowanie", name: "Doładowanie" },
      { id: "uslugi-dodatkowe-i-roaming", name: "Usługi dodatkowe i roaming" },
      { id: "fotowoltaika-od-orange", name: "Fotowoltaika od Orange" },
    ],
  },
  {
    name: "Telefony i urządzenia",
    mobileName: "Telefony",
    id: "telefony-i-urzadzenia",
    elements: [
      { id: "telefony", name: "Telefony" },
      { id: "modemy-i-routery", name: "Modemy i routery" },
      { id: "laptopy-i-konsole", name: "Laptopy i konsole" },
      { id: "smartwatche", name: "Smartwatche" },
      { id: "urzadzenia-smart", name: "Urządzenia smart" },
      { id: "telewizory-i-audio", name: "Telewizory i audio" },
      { id: "polecane", name: "Polecane" },
      { id: "akcesoria", name: "Akcesoria" },
      { id: "porownywarka", name: "Porownywarka    " },
    ],
  },
  {
    name: "Pomoc",
    id: "pomoc",
    elements: [
      { id: "faq-i-porady", name: "FAQ i porady" },
      { id: "nasz-orange", name: "Nasz Orange" },
      { id: "kontakt", name: "Kontakt" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <Markets elements={markets} activeId={markets[0].id} />
      <Menu elements={menu} />
      <MainActions />
    </div>
  );
}
