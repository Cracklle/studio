import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PremiumPage() {
  return (
    <div className="container mx-auto px-4 py-24 text-center sm:py-32 lg:py-40">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
        Premium Package
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        This is the page for the Premium package. You can add more details here.
      </p>
      <div className="mt-10">
        <Button asChild size="lg">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
