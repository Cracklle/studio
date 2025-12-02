
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Share2, Server, Globe, BarChart2, Mail, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function BasicPage() {
  const pageImage = PlaceHolderImages.find(p => p.id === 'basic-page-hero');

  const features = [
    {
      title: '5 Core Pages',
      description: 'Establish your online presence with five essential pages: Home, About, What We Do, Team, and Contact.',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: 'Social Media Integration',
      description: 'Connect with your audience across platforms by integrating your social media feeds and links directly into your site.',
      icon: <Share2 className="h-8 w-8" />,
    },
  ];

  const technicalSpecs = [
    {
      title: '10 GB Hosting Space',
      description: 'Secure and reliable storage for all your website files, documents, and images.',
      icon: <Server className="h-8 w-8" />,
    },
    {
      title: 'Custom Domain Name',
      description: 'Build credibility with a professional web address like "www.your-ngo.org".',
      icon: <Globe className="h-8 w-8" />,
    },
    {
      title: 'Google Analytics',
      description: 'Track visitor numbers and understand your audience to measure your online impact.',
      icon: <BarChart2 className="h-8 w-8" />,
    },
    {
      title: '2 Professional Email Accounts',
      description: 'Get two professional email addresses (e.g., info@your-ngo.org) with 1 GB of storage each.',
      icon: <Mail className="h-8 w-8" />,
    },
  ];


  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-[#e6f5fa] py-20 sm:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Basic Package
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-2xl font-bold text-primary">
              MWK 580,000
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
              The perfect starting point for NGOs looking to get online quickly and professionally. This package includes all the essential elements required to establish credibility and begin your digital journey.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="#contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
          {pageImage && (
             <div className="relative h-80 w-full rounded-lg shadow-xl">
                <Image
                src={pageImage.imageUrl}
                alt={pageImage.description}
                fill
                className="rounded-lg object-cover"
                data-ai-hint={pageImage.imageHint}
                />
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              What to Expect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build a foundational online presence.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  {feature.icon}
                </div>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="bg-muted py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Under the Hood
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The technical details that power your professional website.
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {technicalSpecs.map((spec) => (
               <Card key={spec.title} className="flex flex-col items-center p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                 {spec.icon}
               </div>
               <CardHeader className="p-0 mb-2">
                 <CardTitle className="text-lg">{spec.title}</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                 <p className="text-sm text-muted-foreground">{spec.description}</p>
               </CardContent>
             </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Placeholder Section */}
      <section className="bg-[#e6f5fa] py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
              Getting Started Made Easy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Watch our short video guide to see how simple it is to set up your NGO profile, customize your theme, and manage your content through our intuitive dashboard.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-video w-full rounded-lg shadow-xl group cursor-pointer">
              <Image
                src="https://picsum.photos/seed/ngo-video/1280/720"
                alt="Video placeholder showing how to get started with the dashboard"
                fill
                className="rounded-lg object-cover"
                data-ai-hint="dashboard tutorial"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/80 text-primary-foreground transition-transform group-hover:scale-110">
                  <Play className="h-10 w-10 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Ready to Launch Your Digital Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose the Basic Package and take the first step towards a powerful online presence for your NGO.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="#contact">Choose Basic Package</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
