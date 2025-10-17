import { getProfileData } from '@/lib/content';
import Link from 'next/link';

export default async function Home() {
  const profile = await getProfileData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary py-24 md:py-32 text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="heading-1 mb-6">Research. Skills. Impact.</h1>
            <div className="mx-auto max-w-4xl mb-10">
              <p className="text-lg md:text-xl leading-relaxed text-slate-100 mb-6">
                CRID International (Centre for Research, Innovations, and Development) is a multidisciplinary research, training, and capacity-building organization advancing sustainable development, institutional excellence, and human capital growth across Africa.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-slate-100 mb-6">
                We translate evidence into practical interventions, strengthen systems in health, education, gender, and socio-economic development, and operate with the philosophy of <span className="font-semibold text-brand-accent">"Skilling for the Future."</span>
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-slate-100">
                With work across East, Central, and West Africa, CRID delivers programs in RMNCAH, SRHR, gender analytics, organizational development, youth/women empowerment, leadership, mentorship, and education skilling — in partnership with governments, universities, development partners, and civil society.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/focus-areas" className="btn-primary">
                Explore Our Work
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-semibold text-white transition-all hover:bg-white hover:text-brand-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 mb-12 text-center text-brand-primary">Explore CRID International</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/about" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">About Us</h3>
              <p className="text-sm text-slate-600 mt-2">Our vision, mission, and values</p>
            </Link>
            <Link href="/focus-areas" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">Focus Areas</h3>
              <p className="text-sm text-slate-600 mt-2">7 key areas of impact</p>
            </Link>
            <Link href="/programs" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">Programs</h3>
              <p className="text-sm text-slate-600 mt-2">5 flagship initiatives</p>
            </Link>
            <Link href="/contact" className="card text-center hover:shadow-lg">
              <h3 className="heading-4 text-brand-primary">Contact</h3>
              <p className="text-sm text-slate-600 mt-2">Get in touch with us</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4 text-brand-primary">Ready to Partner With Us?</h2>
          <p className="body-large mx-auto mb-8 max-w-2xl">
            Join us in advancing sustainable development and building capacity across Africa.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
