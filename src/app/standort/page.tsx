import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Standort & Kontakt | MIXPORT',
  description: 'Unser Standort in Hamburg Bergedorf. Hier kannst du dein DJ-Equipment abholen oder eine Lieferung vereinbaren.',
};

const StandortPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-dark mb-8">
        Standort & Kontakt
      </h1>
      <p className="text-lg text-neutral-dark/70 mb-12">
        Unser Equipment kann in Hamburg Bergedorf abgeholt werden. Gegen eine Gebühr liefern wir auch innerhalb von Hamburg.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">Abholadresse</h2>
          <div className="text-neutral-dark/80 space-y-2">
            <p>
              Am Schilfpark 25<br />
              21029 Hamburg (Bergedorf)<br />
              Deutschland
            </p>
            <p>
              Bitte vereinbare einen Abholtermin, da wir kein Ladengeschäft haben.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">Lieferung</h2>
          <div className="text-neutral-dark/80 space-y-2">
            <p>
              Wir liefern das Equipment gegen eine Liefergebühr auch direkt zu deiner Veranstaltung in Hamburg und Umgebung. Kontaktiere uns für ein individuelles Angebot.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">Kontakt</h2>
        <div className="text-neutral-dark/80 space-y-2">
          <p>
            Telefon: <a href="tel:+4915511205090" className="text-primary hover:underline">+49 155 11205090</a><br />
            E-Mail: <a href="mailto:info@mixport.de" className="text-primary hover:underline">info@mixport.de</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandortPage;
