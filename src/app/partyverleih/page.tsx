import type { Metadata } from 'next';
import Button from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Partyverleih Hamburg | MIXPORT',
  description: 'Dein Partyverleih in Hamburg für DJ-Equipment und Veranstaltungstechnik. Miete alles, was du für eine gelungene Party brauchst.',
};

const PartyverleihPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-dark mb-8">
        Partyverleih in Hamburg
      </h1>
      <p className="text-lg text-neutral-dark/70 mb-12">
        Du planst eine Party und brauchst das passende Equipment? Unser Partyverleih in Hamburg bietet dir professionelle Technik für dein Event. Einfach mieten, auflegen und feiern!
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">Das richtige Equipment für deine Party</h2>
          <p className="text-neutral-dark/80">
            Eine gute Party steht und fällt mit der Musik. Mit unserem hochwertigen DJ-Equipment sorgst du für den perfekten Sound. Der Pioneer DDJ-FLX10 ist ideal für Einsteiger und Profis und lässt sich einfach an jede Anlage anschließen.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">Warum mieten statt kaufen?</h2>
          <p className="text-neutral-dark/80">
            Professionelles DJ-Equipment ist teuer. Für eine einmalige Party oder um das DJing auszuprobieren, ist Mieten die perfekte Lösung. Du bekommst neuwertige, geprüfte Technik und musst dich nicht um Lagerung oder Wartung kümmern.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button href="/produkt/pioneer-ddj-flx10" variant="primary">
          Jetzt DJ-Controller mieten
        </Button>
      </div>
    </div>
  );
};

export default PartyverleihPage;
