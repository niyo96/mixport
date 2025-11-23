import type { Metadata } from 'next';
import Button from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Veranstaltungstechnik mieten in Hamburg | MIXPORT',
  description: 'Professionelle Veranstaltungstechnik für dein Event in Hamburg. Miete hochwertiges DJ-Equipment und mehr für eine gelungene Veranstaltung.',
};

const VeranstaltungstechnikPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-dark mb-8">
        Veranstaltungstechnik in Hamburg mieten
      </h1>
      <p className="text-lg text-neutral-dark/70 mb-12">
        Die richtige Veranstaltungstechnik ist entscheidend für den Erfolg deines Events. Ob Party, Hochzeit oder Firmenevent – mit professionellem Equipment sorgst du für den perfekten Sound und eine unvergessliche Atmosphäre.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">Was gehört zur Veranstaltungstechnik?</h2>
          <p className="text-neutral-dark/80">
            Veranstaltungstechnik umfasst alle technischen Geräte, die für ein Event benötigt werden. Dazu gehören Tontechnik (Mischpulte, Mikrofone, Lautsprecher), Lichttechnik (Scheinwerfer, Lichteffekte) und natürlich die DJ-Technik, das Herzstück jeder Party.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">Unser Angebot: DJ-Technik für dein Event</h2>
          <p className="text-neutral-dark/80">
            Wir konzentrieren uns auf hochwertige DJ-Technik, die einfach zu bedienen ist und professionelle Ergebnisse liefert. Aktuell bieten wir den Pioneer DDJ-FLX10 zur Miete an – ein All-in-One-Controller, der sich perfekt für DJs aller Erfahrungsstufen eignet.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button href="/produkt/pioneer-ddj-flx10" variant="primary">
          Zum Pioneer DDJ-FLX10
        </Button>
      </div>
    </div>
  );
};

export default VeranstaltungstechnikPage;
