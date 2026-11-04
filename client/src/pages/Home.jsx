import { useEffect, useState } from 'react';
import { ArrowRight, Droplets, Sprout, FlaskConical, ChevronDown, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { useAsset } from '../context/MediaContext';
import { STATS, PROCESS, VALUES, CERTIFICATIONS, FAQ } from '../config/siteContent';
import { Reveal, useCountUp } from '../lib/motion';
import { Button, SectionTitle } from '../components/ui';
import ProductShowcase from '../components/ProductShowcase';
import FactoryVideoPlayer from '../components/FactoryVideoPlayer';
import { useProducts } from '../lib/useProducts';

const ICONS = [Sprout, Droplets, FlaskConical];

function Stat({ value, label }) {
  const [ref, text] = useCountUp(value);
  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-4xl font-bold bg-gradient-to-br from-leaf-700 to-leaf-900 bg-clip-text text-transparent md:text-5xl group-hover:scale-105 transition-transform duration-300">
        {text}
      </div>
      <div className="mt-1.5 text-xs sm:text-sm font-semibold tracking-wide text-shell-600 uppercase">
        {label}
      </div>
    </div>
  );
}

function HomeFaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`overflow-hidden rounded-2xl border transition-all duration-300 bg-white shadow-sm ${
      open ? 'border-leaf-400 ring-2 ring-leaf-100 shadow-md' : 'border-shell-200/90 hover:border-leaf-300'
    }`}>
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left font-head text-base sm:text-lg font-bold text-shell-900 transition hover:text-leaf-700"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-3">
          <span className={`grid h-6 w-6 place-items-center rounded-full text-xs font-bold transition ${
            open ? 'bg-leaf-600 text-white' : 'bg-shell-100 text-shell-600'
          }`}>
            {open ? '−' : '+'}
          </span>
          {q}
        </span>
        <ChevronDown className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-leaf-600' : 'text-shell-400'}`} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden px-6 text-shell-700 leading-relaxed">
          <p className="pb-5 pt-1 pl-6 text-sm md:text-base border-l-2 border-leaf-300 ml-1 bg-leaf-50/40 p-4 rounded-r-xl">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const hero = useAsset('hero.image');
  const heroVideo = useAsset('hero.video');
  const seedling = useAsset('about.seedling');
  const factory = useAsset('about.factory');
  const tour = useAsset('media.factoryTour');
  const { items: products } = useProducts();

  return (
    <>
      {/* HERO SECTION */}
      <section className="grain relative isolate flex min-h-[94vh] items-center overflow-hidden bg-leaf-950 text-white">
        {heroVideo ? (
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
        ) : (
          <img
            src={hero}
            alt="HarWest coconut coir plantation"
            className="absolute inset-0 -z-20 h-full w-full animate-kenburns object-cover"
          />
        )}
        
        {/* Modern Ambient Radial Glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-leaf-500/15 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-leaf-950/95 via-leaf-950/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-shell-50 to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-6 pt-32 pb-24">
          <h1 className="max-w-3xl animate-rise text-4xl font-bold leading-[1.08] sm:text-6xl md:text-7xl tracking-tight">
            Soil that grows{' '}
            <span className="bg-gradient-to-r from-coconut-200 via-leaf-300 to-emerald-200 bg-clip-text text-transparent italic font-medium">
              greener
            </span>{' '}
            tomorrows.
          </h1>
          
          <p className="mt-6 max-w-xl animate-rise text-base sm:text-lg text-white/85 leading-relaxed" style={{ animationDelay: '.2s' }}>
            HarWest turns sun-dried coconut husks into export-grade cocopeat blocks, precision grow bags and husk chips trusted by commercial greenhouses in 25+ countries.
          </p>
          
          <div className="mt-10 flex animate-rise flex-wrap items-center gap-4" style={{ animationDelay: '.3s' }}>
            <Button to="/products" className="shadow-emerald-950/40 hover:shadow-xl hover:scale-105 transition duration-300">
              Explore Products <ArrowRight size={18} />
            </Button>
            <Button to="/contact" variant="ghost" className="backdrop-blur-md hover:bg-white/15 transition duration-300">
              Request a Sample
            </Button>
          </div>

          {/* Quick feature tags */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-white/70 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> RHP / SA 8000 Certified</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Low EC &lt; 0.5 mS/cm</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Worldwide 40ft HC Shipping</span>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 -mt-12 px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 leaf-radius bg-white/95 backdrop-blur-md p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(30,60,30,.2)] border border-shell-200/90 md:grid-cols-4">
          {STATS.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="rounded-3xl border border-shell-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 font-head text-xs uppercase tracking-widest text-leaf-700 font-bold">
                <ShieldCheck size={16} /> Certified Quality
              </span>
              <h2 className="mt-2 text-3xl font-bold text-shell-900">Our Certifications</h2>
              <p className="mt-2 text-sm text-shell-600">
                Audited and validated under the most stringent international agricultural and social benchmarks.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:w-2/3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.code}
                  className={`flex flex-col items-center justify-center rounded-2xl border-2 px-5 py-4 text-center transition hover:-translate-y-1 hover:shadow-md ${cert.badgeColor}`}
                >
                  <span className="font-head text-lg font-bold tracking-tight">{cert.code}</span>
                  <span className="text-[11px] font-semibold tracking-wide uppercase opacity-90">{cert.title}</span>
                  <span className="mt-0.5 text-[10px] opacity-75">{cert.subtitle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Our products"
          title="Grown by nature, refined for growers"
          text="From hydroponic grow bags to orchid-friendly chips — one husk, endless harvests."
        />
        <ProductShowcase products={products} />
        <div className="mt-12 text-center">
          <Button to="/products">View Full Technical Catalogue <ArrowRight size={16} /></Button>
        </div>
      </section>

      {/* VALUES / WHY HARWEST */}
      <section className="bg-leaf-50/60 border-y border-shell-200/60 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={seedling} alt="Seedling growing in cocopeat" loading="lazy" className="aspect-[4/3] w-full leaf-radius object-cover shadow-2xl" />
            <div className="absolute -bottom-6 -right-4 hidden max-w-[240px] rounded-2xl bg-shell-800 p-5 text-white shadow-xl md:block border border-coconut-700/50">
              <p className="font-display text-4xl font-bold text-coconut-300">8×</p>
              <p className="text-sm text-shell-100">its weight in water, naturally retained with 30% air porosity</p>
            </div>
          </Reveal>
          <div>
            <SectionTitle eyebrow="Why HarWest" title="A peat-free future, rooted in coconut" />
            <div className="mt-10 space-y-6">
              {VALUES.map((v, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal key={v.title} delay={i * 120} className="group flex gap-5 rounded-2xl p-4 transition hover:bg-white hover:shadow-lg border border-transparent hover:border-shell-200">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-leaf-100 text-leaf-800 transition group-hover:rotate-12 group-hover:bg-leaf-600 group-hover:text-white">
                      <Icon />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-shell-900">{v.title}</h3>
                      <p className="text-shell-600 text-sm md:text-base leading-relaxed">{v.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionTitle center eyebrow="From husk to harvest" title="Our natural process" />
        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-leaf-300 md:block" aria-hidden="true" />
          {PROCESS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="relative text-center">
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-full bg-leaf-700 font-head text-xl font-bold text-white shadow-lg ring-8 ring-shell-50">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-shell-900">{p.title}</h3>
              <p className="mt-2 text-shell-600 text-sm leading-relaxed">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FACTORY VIDEO SECTION */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl mb-8 text-center">
          <span className="font-head text-xs uppercase tracking-[.25em] text-leaf-700 font-bold">
            Processing Yard &amp; Facility
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-shell-900 md:text-4xl">
            Pollachi Coir Craftsmanship in Motion
          </h2>
          <p className="mt-3 text-base text-shell-600 max-w-2xl mx-auto">
            Experience our multi-stage freshwater wash, EC desalination, and high-pressure block compression in real-time.
          </p>
        </div>
        <Reveal>
          <FactoryVideoPlayer src={tour} poster={factory} />
        </Reveal>
      </section>

      {/* FAQ SECTION */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionTitle
          center
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          text="Everything you need to know about coco coir characteristics, washing grades, and global container shipping."
        />
        <div className="mt-12 space-y-4">
          {FAQ.slice(0, 5).map((f) => (
            <HomeFaqItem key={f.q} {...f} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/contact" variant="ghost" className="!text-leaf-800 !border-leaf-600 hover:!bg-leaf-50">
            Have More Questions? Contact Our Team <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 pb-28">
        <div className="grain relative mx-auto max-w-6xl overflow-hidden leaf-radius bg-gradient-to-br from-leaf-800 to-leaf-950 px-8 py-16 text-center text-white shadow-2xl border border-leaf-700/40">
          <h2 className="mx-auto max-w-2xl text-4xl font-bold md:text-5xl">Ready to Grow with HarWest?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us your target crop, spec requirements, and volume — our technical team will courier samples and provide full container CIF pricing.
          </p>
          <div className="mt-8">
            <Button to="/contact" variant="shell">Get a Custom Quote <ArrowRight size={18} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
