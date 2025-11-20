import Button from '@/components/ui/button';

const WhatsAppButton = () => {
  const whatsappUrl = 'https://wa.me/4915511205090?text=Hallo!%20Ich%20interessiere%20mich%20für%20die%20Miete%20von%20DJ-Equipment.';

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Button 
        href={whatsappUrl} 
        variant="whatsapp" 
        className="shadow-lg flex items-center gap-2 !px-4 !py-3" // Kleinere Paddings für den mobilen Button
      >
        <span className="text-sm font-bold">WhatsApp</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton;
