import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Eye, CircleDollarSign, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4 py-24 text-center sm:py-32 lg:py-40">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
            Connecting Malawi’s NGOs for Impact and Sustainability.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The national digital hub for donor engagement and resource mobilization.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#">Get Verified</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about" className="bg-card py-20 sm:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Our Vision for a Connected NGO Sector
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We empower organizations by providing the tools and platform to thrive.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-5xl">
            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Visibility</h3>
              <p className="mt-2 text-base text-muted-foreground">
                Showcase your work to a national and international audience of donors, partners, and the public.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CircleDollarSign className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Funding</h3>
              <p className="mt-2 text-base text-muted-foreground">
                Connect directly with funding opportunities and streamline your resource mobilization efforts.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg transition-all hover:bg-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">Networking</h3>
              <p className="mt-2 text-base text-muted-foreground">
                Collaborate with other NGOs, share resources, and build powerful partnerships for greater impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section id="packages" className="bg-background py-20 sm:py-24 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Choose Your Package
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flexible plans designed to meet the needs of every NGO, big or small.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-3 lg:max-w-5xl">
            <Card className="flex flex-col hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Basic</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-muted-foreground">Get started and establish your digital presence.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col border-primary shadow-lg ring-2 ring-primary hover:shadow-2xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Standard</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-muted-foreground">Unlock more features to grow your reach.</p>
              </CardContent>
            </Card>
            <Card className="flex flex-col hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Premium</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-muted-foreground">Full access to all tools for maximum impact.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
