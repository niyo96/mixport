import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | MIXPORT',
  description: 'Informationen zum Datenschutz bei MIXPORT.',
};

const DatenschutzPage = () => {
  return (
    <div className="prose prose-lg max-w-4xl mx-auto py-12">
      <h1>Datenschutzerklärung</h1>
      <p>
        Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
        <br />
        Nino Wagner
        <br />
        Am Schilfpark 25
        <br />
        21029 Hamburg
      </p>

      <h2>Ihre Betroffenenrechte</h2>
      <p>
        Unter den im Impressum angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:
      </p>
      <ul>
        <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
        <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
        <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
        <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
        <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
        <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
      </ul>
      <p>
        Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
      </p>

      <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
      <h3>Art und Zweck der Verarbeitung:</h3>
      <p>
        Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und Ihre IP-Adresse.
      </p>
      <h3>Rechtsgrundlage:</h3>
      <p>
        Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
      </p>

      <h2>Verwendung von WhatsApp</h2>
      <p>
        Wir bieten Ihnen die Möglichkeit, über einen Klick auf einen Button auf unserer Webseite direkt eine Anfrage über den Messenger-Dienst WhatsApp zu starten. Wenn Sie diesen Service nutzen, werden Sie auf die WhatsApp-Anwendung auf Ihrem Gerät weitergeleitet. Dabei wird Ihre Telefonnummer, sofern Sie WhatsApp nutzen, an WhatsApp (WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) übermittelt. Wir haben keinen Einfluss auf die Datenverarbeitung durch WhatsApp.
      </p>

      <h2>Änderung unserer Datenschutzbestimmungen</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
      </p>
    </div>
  );
};

export default DatenschutzPage;
