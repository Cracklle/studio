
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Eye, CircleDollarSign, Users, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages[0];
  const packages = [
    {
      name: 'Basic',
      href: '/basic',
      price: 'MK 580,000',
      description: 'Get started and establish your digital presence.',
      features: [
        'Public Profile Page',
        'Basic NGO Directory Listing',
        'Access to Community Forum',
      ],
      cta: 'Get Started',
      isFeatured: false,
    },
    {
      name: 'Standard',
      href: '/standard',
      price: 'MK 870,000',
      description: 'Unlock more features to grow your reach and funding.',
      features: [
        'Everything in Basic',
        'Enhanced Directory Listing',
        'Direct Messaging with Donors',
        'Basic Analytics',
        'Grant Application Tool',
      ],
      cta: 'Upgrade Now',
      isFeatured: true,
    },
    {
      name: 'Premium',
      href: '/premium',
      price: 'MK 1,305,000',
      description: 'Full access to all tools for maximum impact and visibility.',
      features: [
        'Everything in Standard',
        'Priority Listing in Directory',
        'Advanced Donor Analytics',
        'Dedicated Support',
        'Custom Branding Options',
      ],
      cta: 'Go Premium',
      isFeatured: false,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#e6f5fa]">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-20 md:grid-cols-2 lg:py-28">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Connecting Malawi’s NGOs for Impact and Sustainability.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:mx-0">
              The national digital hub for donor engagement and resource mobilization.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
              <Button asChild size="lg">
                <Link href="#">Get Verified</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 w-full rounded-lg shadow-xl md:h-96">
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="rounded-lg object-cover"
              data-ai-hint={heroImage.imageHint}
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="about" className="bg-muted py-20 sm:py-24 scroll-mt-20">
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
            <Card className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Eye className="h-8 w-8" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Showcase your work to a national and international audience of donors, partners, and the public.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CircleDollarSign className="h-8 w-8" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Funding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Connect directly with funding opportunities and streamline your resource mobilization efforts.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Users className="h-8 w-8" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground">
                  Collaborate with other NGOs, share resources, and build powerful partnerships for greater impact.
                </p>
              </CardContent>
            </Card>
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
          <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`flex flex-col transition-shadow hover:shadow-xl ${pkg.isFeatured ? 'border-primary shadow-lg ring-2 ring-primary' : ''}`}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <p className="text-4xl font-bold tracking-tight">{pkg.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-center text-muted-foreground mb-6">{pkg.description}</p>
                  <ul className="space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild size="lg" className="w-full" variant={pkg.isFeatured ? 'default' : 'outline'}>
                    <Link href={pkg.href}>{pkg.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
