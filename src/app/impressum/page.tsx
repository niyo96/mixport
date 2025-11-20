import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | MIXPORT',
  description: 'Rechtliche Hinweise und Impressum von MIXPORT.',
};

// Helper-Komponente für Abschnitte, um Wiederholungen zu vermeiden
const InfoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">{title}</h2>
    <div className="text-neutral-dark/80 space-y-2">
      {children}
    </div>
  </div>
);

const ImpressumPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-dark mb-8">
        Impressum
      </h1>
      <p className="text-lg text-neutral-dark/70 mb-12">Angaben gemäß § 5 TMG</p>

      <div className="space-y-12">
        <InfoSection title="Anbieter">
          <p>
            Nino Wagner<br />
            Am Schilfpark 25<br />
            21029 Hamburg<br />
            Deutschland
          </p>
        </InfoSection>

        <InfoSection title="Kontakt">
          <p>
            Telefon: <a href="tel:+4915511205090" className="text-primary hover:underline">+49 155 11205090</a><br />
            E-Mail: <a href="mailto:info@mixport.de" className="text-primary hover:underline">info@mixport.de</a>
          </p>
        </InfoSection>

        <InfoSection title="Umsatzsteuer">
          <p>
            Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer ausgewiesen (Kleinunternehmerregelung).
          </p>
        </InfoSection>

        <InfoSection title="Verantwortlich für den Inhalt">
          <p>
            Nino Wagner<br />
            (Anschrift wie oben)
          </p>
        </InfoSection>

        <InfoSection title="Haftungsausschluss (Disclaimer)">
          <div>
            <h3 className="font-semibold text-neutral-dark mb-2">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-neutral-dark mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-neutral-dark mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default ImpressumPage;
