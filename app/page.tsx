import Image from "next/image";
import { Building2, CakeSlice, Heart, MapPin, Palette, Presentation, Sparkles, Store } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const services = [
  [Palette, "Concept & Theme Development", "From mood board to final palette, we shape the look of your event."],
  [Sparkles, "Design Services", "Organic garlands, sculptures and custom installations built by hand."],
  [CakeSlice, "Birthday Parties", "Backdrops and dessert-table décor kids and grown-ups remember."],
  [Heart, "Ceremonies", "Aisles, arches and altars for weddings and milestone moments."],
  [Building2, "Corporate Events", "Branded balloon walls and stage décor that photograph beautifully."],
  [Presentation, "Meetings & Conferences", "Entrance pieces and wayfinding that lift any venue."],
  [Store, "Conventions", "Booth installations that pull people in from across the floor."],
  [MapPin, "Destination Events", "We travel throughout Southern California to bring the party to you."],
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* ── Header ── */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ink/85 via-ink/45 to-transparent" />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#" className="shrink-0">
            <Image src="/logo-white.png" alt="OC Balloon Party" width={280} height={254} className="h-40 w-auto" />
          </a>
          <div className="hidden gap-9 text-[20px] leading-none font-medium text-ink-foreground/90 md:flex">
            <a href="#services" className="transition hover:text-accent">Services</a>
            <a href="#work" className="transition hover:text-accent">Our Work</a>
            <a href="#quote" className="transition hover:text-accent">Contact</a>
          </div>
          <a
            href="#quote"
            className="rounded-full bg-ink-foreground px-7 py-3.5 text-[20px] leading-none font-semibold text-ink transition hover:bg-accent"
          >
            Get a Quote
          </a>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <Image
          src="/assets/hero-bright.jpg"
          alt="Bright multicolored balloon arch over an outdoor garden party dessert table"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20">
          <p className="mb-5 inline-block rounded-full border border-ink-foreground/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink-foreground">
            Orange County · Los Angeles
          </p>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-ink-foreground md:text-8xl">
            Orange County <em className="text-accent">#1</em> Balloon Designers
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-foreground/85">
            Orange County&apos;s favorite balloon designers — handcrafted arches, walls and
            installations for every kind of party.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5"
            >
              Request a Quote
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink-foreground/40 px-8 py-4 font-medium text-ink-foreground transition hover:bg-ink-foreground/10"
            >
              See Our Work
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-4xl md:text-6xl">
            Everything you need to <em className="text-primary">make it pop.</em>
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Eight ways we help — from a single backdrop to a full venue transformation.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([Icon, t, d]) => (
            <div key={t} className="group bg-card p-8 transition hover:bg-secondary">
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-display text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="work" className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-14 font-display text-4xl md:text-6xl">
            Recent <em className="text-accent">moments</em>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {(
              [
                ["/assets/birthday.jpg", "Birthdays"],
                ["/assets/ceremony.jpg", "Ceremonies"],
                ["/assets/corporate.jpg", "Corporate"],
              ] as const
            ).map(([src, label], i) => (
              <figure key={label} className={`group overflow-hidden ${i === 1 ? "md:mt-16" : ""}`}>
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={src}
                    alt={`${label} balloon décor`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="mt-4 font-display text-xl">{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="quote" className="relative overflow-hidden py-28">
        <div className="absolute -right-24 top-10 h-72 w-72 animate-floaty rounded-full bg-sunset opacity-60 blur-2xl" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl md:text-6xl">
              Let&apos;s plan your <em className="text-primary">party.</em>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Tell us about your event and we&apos;ll get back to you with ideas and a quote.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ink px-6 py-12 text-center">
        <Image src="/logo-white.png" alt="OC Balloon Party" width={420} height={380} loading="lazy" className="mx-auto h-28 w-auto" />
        <p className="mt-6 text-sm text-primary-foreground/70">
          © {new Date().getFullYear()} OC Balloon Party · Serving Orange County &amp; Los Angeles
        </p>
      </footer>
    </div>
  );
}
