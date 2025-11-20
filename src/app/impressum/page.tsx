import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | MIXPORT',
  description: 'Rechtliche Hinweise und Impressum von MIXPORT.',
};

const ImpressumPage = () => {
  return (
    <div className="prose prose-lg max-w-4xl mx-auto py-12">
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG</p>
      
      <h2>Anbieter:</h2>
      <p>
        Nino Wagner
        <br />
        Am Schilfpark 25
        <br />
        21029 Hamburg
        <br />
        Deutschland
      </p>

      <h2>Kontakt:</h2>
      <p>
        Telefon: <a href="tel:+4915511205090">+49 155 11205090</a>
        <br />
        E-Mail: <a href="mailto:info@mixport.de">info@mixport.de</a>
      </p>

      <h2>Umsatzsteuer:</h2>
      <p>
        Gemäß § 19 Abs. 1 UStG wird keine Umsatzsteuer ausgewiesen (Kleinunternehmerregelung).
      </p>

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
      <p>
        Nino Wagner
        <br />
        Anschrift wie oben
      </p>

      <h2>Haftungsausschluss (Disclaimer):</h2>
      <p>
        <strong>Haftung für Inhalte</strong>
        <br />
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>
      <p>
        <strong>Haftung für Links</strong>
        <br />
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>
      <p>
        <strong>Urheberrecht</strong>
        <br />
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>
    </div>
  );
};

export default ImpressumPage;
