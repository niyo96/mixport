import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | MIXPORT',
  description: 'Informationen zum Datenschutz auf der MIXPORT Website.',
};

// Helper-Komponente für Abschnitte, um Wiederholungen zu vermeiden
const InfoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-neutral-dark tracking-tight mb-3">{title}</h2>
    <div className="text-neutral-dark/80 space-y-4">
      {children}
    </div>
  </div>
);

const DatenschutzPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-dark mb-8">
        Datenschutzerklärung
      </h1>
      <p className="text-lg text-neutral-dark/70 mb-12">Stand: Oktober 2023</p>

      <div className="space-y-12">
        <InfoSection title="Verantwortliche Stelle">
          <p>
            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
          </p>
          <p>
            Nino Wagner<br />
            Am Schilfpark 25<br />
            21029 Hamburg
          </p>
        </InfoSection>

        <InfoSection title="Ihre Betroffenenrechte">
          <p>
            Unter den im Impressum angegebenen Kontaktdaten können Sie jederzeit folgende Rechte ausüben:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung.</li>
            <li>Berichtigung unrichtiger personenbezogener Daten.</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten.</li>
            <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen.</li>
            <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns.</li>
          </ul>
          <p>
            Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
        </InfoSection>

        <InfoSection title="Erfassung allgemeiner Informationen">
            <h3 className="font-semibold text-neutral-dark mb-2">Art und Zweck der Verarbeitung</h3>
            <p>
              Wenn Sie auf unsere Website zugreifen, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und Ihre IP-Adresse.
            </p>
            <h3 className="font-semibold text-neutral-dark mt-4 mb-2">Rechtsgrundlage</h3>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
            </p>
        </InfoSection>

        <InfoSection title="Verwendung von WhatsApp">
          <p>
            Wir bieten Ihnen die Möglichkeit, über einen Klick auf einen Button auf unserer Webseite direkt eine Anfrage über den Messenger-Dienst WhatsApp zu starten. Wenn Sie diesen Service nutzen, werden Sie auf die WhatsApp-Anwendung auf Ihrem Gerät weitergeleitet. Dabei wird Ihre Telefonnummer, sofern Sie WhatsApp nutzen, an WhatsApp (WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) übermittelt. Wir haben keinen Einfluss auf die Datenverarbeitung durch WhatsApp.
          </p>
        </InfoSection>
      </div>
    </div>
  );
};

export default DatenschutzPage;
