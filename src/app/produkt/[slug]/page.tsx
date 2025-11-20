import {products} from "@/data/products"
import {notFound} from "next/navigation"
import Image from "next/image"
import Button from "@/components/ui/button"
import type {Metadata} from "next"
import {CheckCircleIcon} from "@heroicons/react/24/solid"

// Funktion zum Generieren der Metadaten
export async function generateMetadata({params}: { params: { slug: string } }): Promise<Metadata> {
    const product = products.find((p) => p.slug === params.slug)
    if (!product) return {title: "Produkt nicht gefunden"}

    return {
        title: `${product.name} mieten | MIXPORT`,
        description: `Miete ${product.name} für dein nächstes Event. ${product.longDescription}`,
        openGraph: {
            title: `${product.name} mieten | MIXPORT`,
            description: product.longDescription,
            images: [{url: product.imageUrl, width: 1200, height: 630, alt: `Bild von ${product.name}`}],
        },
    }
}

// Funktion zum Generieren der statischen Pfade
export async function generateStaticParams() {
    return products.map((product) => ({slug: product.slug}))
}

// Helper für Sektionen
const DetailSection = ({title, children}: { title: string; children: React.ReactNode }) => (
    <div className="border-t border-neutral-dark/10 pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-dark mb-4">{title}</h2>
        {children}
    </div>
)

// Die überarbeitete Produktdetailseite
export default function ProductDetailPage({params}: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug)
    if (!product) notFound()

    const whatsappUrl = `https://wa.me/4915511205090?text=Hallo!%20Ich%20habe%20Interesse%20an%20der%20Miete%20von:%20${encodeURIComponent(product.name)}.`

    return (
        <div className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Linke Spalte: Bild */}
                <div className="rounded-3xl p-4 md:p-8 shadow-sm lg:sticky top-24">
                    <Image
                        src={product.imageUrl}
                        alt={`Bild von ${product.name}`}
                        width={800}
                        height={800}
                        className="w-full h-auto object-contain rounded-2xl"
                    />
                </div>

                {/* Rechte Spalte: Details */}
                <div className="space-y-10">
                    {/* Header */}
                    <div>
                        <p className="text-primary font-semibold">{product.category}</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-neutral-dark mt-1">
                            {product.name}
                        </h1>
                        <p className="text-lg text-neutral-dark/80 mt-4">{product.longDescription}</p>
                    </div>

                    {/* Preisstaffelung */}
                    <DetailSection title="Mietpreise">
                        <div className="space-y-3">
                            {product.priceTiers.map((tier) => (
                                <div key={tier.duration} className="flex justify-between items-center bg-neutral-light p-3 rounded-lg">
                                    <span className="text-neutral-dark/80">{tier.duration}</span>
                                    <span className="font-semibold text-neutral-dark">{tier.price}€</span>
                                </div>
                            ))}
                            {/* CTA Button */}
                            <div className="pt-4">
                                <Button href={whatsappUrl} variant="primary" className="w-full text-lg shadow-lg hover:shadow-primary/50">
                                    Jetzt per WhatsApp anfragen
                                </Button>
                            </div>
                            <p className="text-sm text-neutral-dark/60 pt-2">Mehr Tage auf Anfrage.</p>
                            <p className="text-xs text-neutral-dark/50 pt-4">Alle Preise sind Endpreise. Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.</p>
                        </div>
                    </DetailSection>

                    {/* Mietbedingungen */}
                    <DetailSection title="Mietbedingungen">
                        <div className="space-y-4 text-neutral-dark/80">
                            <div className="bg-neutral-light p-4 rounded-lg">
                                <p className="font-semibold text-neutral-dark">Kaution: {product.rentalConditions.deposit}€</p>
                                <p className="text-sm">Wird bei schadenfreier Rückgabe vollständig erstattet.</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-dark mb-2">Akzeptierte Zahlungen:</h3>
                                <p>{product.rentalConditions.paymentMethods.join(", ")}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-neutral-dark mb-2">Voraussetzungen:</h3>
                                <ul className="space-y-2">
                                    {product.rentalConditions.requirements.map((req, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircleIcon className="h-5 w-5 text-accent-2 mr-2 mt-0.5 flex-shrink-0"/>
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </DetailSection>
                </div>
            </div>
        </div>
    )
}
