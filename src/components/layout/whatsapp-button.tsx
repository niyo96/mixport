import Button from '@/components/ui/button';

const WhatsAppButton = () => {
  const whatsappUrl = 'https://wa.me/4915511205090?text=Hallo!%20Ich%20interessiere%20mich%20für%20die%20Miete%20von%20DJ-Equipment.';

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button href={whatsappUrl} className="shadow-lg">
        Mietanfrage
      </Button>
    </div>
  );
};

export default WhatsAppButton;
