import { useState } from "react";
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  Train,
  Users,
  ChevronDown,
  Menu,
  X,
  Gauge,
  Trophy,
  Heart,
  ArrowRight,
  Ruler,
  User,
  Wrench,
  CircleCheck,
  CircleMinus,
  CircleX,
  ExternalLink,
  Send,
} from "lucide-react";
import layoutsData from "./layouts-data";
import type { Layout } from "./layouts-data";
import linksData from "./links-data";

const NAV_LINKS = [
  ["About", "#about"],
  ["Layouts", "#layouts"],
  ["Our Show", "#exhibitions"],
  ["Diary", "#diary"],
  ["Links", "#links"],
  ["Join Us", "#join"],
  ["Contact", "#contact"],
] as const;

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bmrc-green shadow-lg" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img src={`${import.meta.env.BASE_URL}bmrc-logo-transparent.png`} alt="BMRC Logo" className="w-9 h-9" />
          <div className="flex flex-col">
            <span className="font-display font-bold text-base text-bmrc-cream tracking-wide leading-tight">
              Basildon MRC
            </span>
            <span className="text-[10px] text-bmrc-cream/60 tracking-widest uppercase leading-tight">
              Est. 1979
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-bmrc-cream/80 hover:text-bmrc-gold transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-bmrc-cream/80 hover:text-bmrc-gold transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-bmrc-green-light/30 bg-bmrc-green-dark/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-bmrc-cream/80 hover:text-bmrc-gold transition-colors font-medium py-1.5"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-bmrc-green-dark pt-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-bmrc-green-dark/70" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <img src={`${import.meta.env.BASE_URL}bmrc-logo-transparent.png`} alt="Basildon Model Railway Club" className="w-28 h-28 mx-auto mb-4" />
        </div>

        <h1 className="font-display font-bold text-4xl md:text-6xl text-bmrc-cream tracking-tight mb-3">
          Basildon Model
          <br />
          <span className="text-bmrc-gold">Railway Club</span>
        </h1>

        <p className="text-bmrc-cream/60 font-display text-sm tracking-[0.3em] uppercase mb-8">
          Established 1979 · Basildon, Essex
        </p>

        <p className="text-lg md:text-xl text-bmrc-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          A friendly club for model railway enthusiasts of all ages and
          abilities. Whether you're laying your first track or you've been
          modelling for decades — you're welcome here.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#join"
            className="inline-flex items-center gap-2 bg-bmrc-gold text-bmrc-dark font-bold px-8 py-3.5 rounded-lg hover:bg-bmrc-gold-light transition-all text-base"
          >
            <Users className="w-5 h-5" />
            Visit Us
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 border border-bmrc-cream/30 text-bmrc-cream font-semibold px-8 py-3.5 rounded-lg hover:border-bmrc-gold/50 hover:text-bmrc-gold transition-all text-base"
          >
            Learn More
          </a>
        </div>

        <a
          href="#about"
          className="inline-block mt-14 text-bmrc-cream/40 hover:text-bmrc-gold transition-colors"
        >
          <ChevronDown className="w-7 h-7 mx-auto animate-bounce" />
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-bmrc-cream track-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
              About the Club
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-6">
              Over 45 years of{" "}
              <span className="text-bmrc-green">modelling excellence</span>
            </h2>
            <p className="text-bmrc-text-light text-lg leading-relaxed mb-5">
              Founded in 1979, Basildon Model Railway Club has been a home for
              railway modelling enthusiasts in Essex for over four decades. We're
              proud members of the Chiltern Model Railway Association.
            </p>
            <p className="text-bmrc-text-light leading-relaxed mb-5">
              In 1999 we were fortunate to obtain our own clubhouse, now
              suitably renovated and centrally located in Basildon. We meet
              every Wednesday evening for a friendly session of modelling,
              chat, and the occasional cup of tea.
            </p>
            <p className="text-bmrc-text-light leading-relaxed">
              The club caters for every modeller — from the young to the old,
              beginner to expert. We also have a twinning association with the
              Rail Club de Meaux in France.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Calendar className="w-6 h-6" />,
                label: "Every Wednesday",
                desc: "Weekly club night",
              },
              {
                icon: <Gauge className="w-6 h-6" />,
                label: "6+ Gauges",
                desc: "Z to O gauge",
              },
              {
                icon: <Trophy className="w-6 h-6" />,
                label: "30+ Layouts",
                desc: "Member exhibitions",
              },
              {
                icon: <Heart className="w-6 h-6" />,
                label: "Since 1979",
                desc: "45+ years strong",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-bmrc-card border border-bmrc-card-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-bmrc-green mb-3">{item.icon}</div>
                <h3 className="font-semibold text-bmrc-text text-sm mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-bmrc-text-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gauges() {
  const gauges = [
    { name: "Z", scale: "1:220", desc: "The smallest commercial gauge" },
    { name: "N", scale: "1:148", desc: "Popular for compact layouts" },
    { name: "OO9", scale: "1:76", desc: "Narrow gauge on N track" },
    { name: "HO", scale: "1:87", desc: "International standard" },
    { name: "OO", scale: "1:76", desc: "The British favourite" },
    { name: "O", scale: "1:43", desc: "The larger scale classic" },
    { name: "O-16.5", scale: "1:43", desc: "Narrow gauge on OO track" },
  ];

  return (
    <section className="py-16 bg-bmrc-green">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-bmrc-gold font-display text-sm tracking-widest uppercase mb-3 font-semibold">
            What We Model
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-bmrc-cream">
            Gauges represented at the club
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
          {gauges.map((g) => (
            <div
              key={g.name}
              className="bg-bmrc-green-dark/50 border border-bmrc-green-light/20 rounded-xl p-4 text-center hover:border-bmrc-gold/30 transition-colors"
            >
              <p className="font-display font-bold text-2xl text-bmrc-gold mb-1">
                {g.name}
              </p>
              <p className="text-xs text-bmrc-cream/60 mb-1">{g.scale}</p>
              <p className="text-xs text-bmrc-cream/40">{g.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-bmrc-cream/50 text-sm mt-6">
          We're happy to hear from enthusiasts with interests in other gauges
          and non-British origins too.
        </p>
      </div>
    </section>
  );
}

function AvailabilityBadge({ status }: { status: Layout["availability"] }) {
  const config = {
    available: {
      icon: <CircleCheck className="w-3.5 h-3.5" />,
      label: "Available for exhibition",
      className: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    restricted: {
      icon: <CircleMinus className="w-3.5 h-3.5" />,
      label: "Selected exhibitions only",
      className: "text-amber-700 bg-amber-50 border-amber-200",
    },
    retired: {
      icon: <CircleX className="w-3.5 h-3.5" />,
      label: "Retired from exhibition",
      className: "text-gray-500 bg-gray-50 border-gray-200",
    },
  };
  const c = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${c.className}`}
    >
      {c.icon}
      {c.label}
    </span>
  );
}

function LayoutCard({ layout }: { layout: Layout }) {
  const basePath = import.meta.env.BASE_URL;
  return (
    <div className="bg-bmrc-card border border-bmrc-card-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
      {layout.image && (
        <div className="h-48 overflow-hidden">
          <img
            src={`${basePath}${layout.image}`}
            alt={layout.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      <div className="bg-bmrc-green/5 border-b border-bmrc-card-border px-6 py-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display font-bold text-lg text-bmrc-text group-hover:text-bmrc-green transition-colors">
            {layout.name}
          </h3>
          <p className="text-xs text-bmrc-text-light mt-0.5">{layout.theme}</p>
        </div>
        <span className="shrink-0 text-xs font-bold text-white bg-bmrc-green px-3 py-1 rounded-full tracking-wide">
          {layout.gauge}
        </span>
      </div>

      <div className="px-6 py-5">
        <p className="text-sm text-bmrc-text-light leading-relaxed mb-4">
          {layout.description}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-bmrc-text-light mb-4">
          {layout.owner && (
            <span className="inline-flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-bmrc-green" />
              {layout.owner}
            </span>
          )}
          {layout.size && (
            <span className="inline-flex items-center gap-1.5">
              <Ruler className="w-3.5 h-3.5 text-bmrc-green" />
              {layout.size}
            </span>
          )}
          {layout.scale && (
            <span className="inline-flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-bmrc-green" />
              {layout.scale}
            </span>
          )}
          {layout.operators && (
            <span className="inline-flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-bmrc-green" />
              {layout.operators} operators
            </span>
          )}
        </div>

        <AvailabilityBadge status={layout.availability} />
      </div>
    </div>
  );
}

function Layouts() {
  const available = layoutsData.filter((l) => l.availability === "available");
  const restricted = layoutsData.filter(
    (l) => l.availability === "restricted"
  );
  const retired = layoutsData.filter((l) => l.availability === "retired");
  const sorted = [...available, ...restricted, ...retired];

  return (
    <section id="layouts" className="py-20 bg-bmrc-cream track-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
            Our Layouts
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-4">
            Club & member layouts
          </h2>
          <p className="text-bmrc-text-light max-w-2xl mx-auto">
            Our members build and exhibit layouts across the country in a wide
            range of gauges and settings. Exhibition managers are welcome to
            enquire about availability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {sorted.map((layout) => (
            <LayoutCard key={layout.name} layout={layout} />
          ))}
        </div>

        <div className="text-center mt-10 bg-bmrc-card border border-bmrc-card-border rounded-xl p-6 shadow-sm">
          <p className="text-bmrc-text font-semibold mb-2">
            Exhibition managers
          </p>
          <p className="text-sm text-bmrc-text-light mb-4">
            Want to book one of our layouts for your show? Get in touch — we'd
            love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-bmrc-green font-semibold hover:text-bmrc-green-light transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            Contact us
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Exhibition() {
  return (
    <section id="exhibitions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
              Annual Exhibition
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-6">
              The BMRC Show
            </h2>
            <p className="text-bmrc-text-light text-lg leading-relaxed mb-5">
              Every year we host our own model railway exhibition — a highlight
              of the club calendar and a great day out for the whole family.
              15+ layouts across two halls, trade stands, and refreshments.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bmrc-green mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-bmrc-text text-sm">Venue</p>
                  <p className="text-bmrc-text-light text-sm">
                    The Wick Community Centre, Siva Island Way, Wickford, Essex
                    SS12 9NR
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-bmrc-green mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-bmrc-text text-sm">Hours</p>
                  <p className="text-bmrc-text-light text-sm">
                    10:00am – 5:00pm
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Train className="w-5 h-5 text-bmrc-green mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-bmrc-text text-sm">
                    Admission
                  </p>
                  <p className="text-bmrc-text-light text-sm">
                    Adults £8 · Seniors £5 · Children £5 · Family (2+2) £20
                  </p>
                </div>
              </div>
            </div>
            <p className="text-bmrc-text-light text-sm mt-5">
              Large car park available. Check back here or get in touch for
              the date of our next show.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-bmrc-card-border aspect-video">
              <iframe
                src="https://www.youtube.com/embed/1tn890DGyO0"
                title="Basildon MRC Exhibition 2024"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <div className="bg-bmrc-cream border border-bmrc-card-border rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-bmrc-text mb-4">
                Exhibition Diary
              </h3>
              <p className="text-bmrc-text-light leading-relaxed mb-6">
                Our members exhibit their layouts at shows across the country
                throughout the year. If you'd like to see one of our layouts at
                an upcoming event, or you're an exhibition manager looking to
                book, get in touch.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-bmrc-green font-semibold hover:text-bmrc-green-light transition-colors text-sm"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <a
              href="https://goo.gl/maps/98CKUwJurCEzfdgf9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-bmrc-card border border-bmrc-card-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <MapPin className="w-6 h-6 text-bmrc-green shrink-0" />
              <div>
                <p className="font-semibold text-bmrc-text text-sm group-hover:text-bmrc-green transition-colors">
                  View venue on Google Maps
                </p>
                <p className="text-xs text-bmrc-text-light">
                  The Wick Community Centre, Wickford
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-bmrc-text-light ml-auto shrink-0 group-hover:text-bmrc-green transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const BMRC_CALENDAR_ID = "YOUR_CALENDAR_ID_HERE";

function ExhibitionDiary() {
  const calendarConfigured = !BMRC_CALENDAR_ID.includes("YOUR_CALENDAR");
  const calendarSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(BMRC_CALENDAR_ID)}&ctz=Europe/London&showTitle=0&showNav=1&showPrint=0&showCalendars=0&mode=AGENDA&bgcolor=%23ffffff`;
  const subscribeSrc = `https://calendar.google.com/calendar/ical/${encodeURIComponent(BMRC_CALENDAR_ID)}/public/basic.ics`;

  return (
    <section id="diary" className="py-20 bg-bmrc-cream track-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
            Exhibition Diary
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-4">
            Upcoming exhibitions
          </h2>
          <p className="text-bmrc-text-light max-w-2xl mx-auto">
            Model railway exhibitions around the region. Shows where BMRC
            members are exhibiting are highlighted. Subscribe to stay up to
            date.
          </p>
        </div>

        {calendarConfigured ? (
          <div className="bg-white border border-bmrc-card-border rounded-2xl overflow-hidden shadow-sm">
            <iframe
              src={calendarSrc}
              style={{ borderWidth: 0 }}
              width="100%"
              height="500"
              title="BMRC Exhibition Diary"
              className="w-full"
            />
          </div>
        ) : (
          <div className="bg-white border border-bmrc-card-border border-dashed rounded-2xl p-12 text-center">
            <Calendar className="w-12 h-12 text-bmrc-green/30 mx-auto mb-4" />
            <p className="text-bmrc-text font-semibold mb-2">
              Exhibition diary coming soon
            </p>
            <p className="text-sm text-bmrc-text-light max-w-md mx-auto">
              We're setting up our exhibition calendar. In the meantime,
              contact us for details of upcoming shows.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          {calendarConfigured && (
            <a
              href={subscribeSrc}
              className="inline-flex items-center gap-2 bg-bmrc-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-bmrc-green-light transition-all text-sm"
            >
              <Calendar className="w-4 h-4" />
              Subscribe to Calendar
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-bmrc-card-border text-bmrc-text font-semibold px-6 py-3 rounded-lg hover:border-bmrc-green hover:text-bmrc-green transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            Submit an exhibition
          </a>
        </div>
      </div>
    </section>
  );
}

function Links() {
  return (
    <section id="links" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
            Useful Links
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-4">
            Links & resources
          </h2>
          <p className="text-bmrc-text-light max-w-2xl mx-auto">
            A curated collection of links to clubs, heritage railways,
            associations, traders, and other useful resources for railway
            modellers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linksData.map((category) => (
            <div
              key={category.name}
              className="bg-bmrc-card border border-bmrc-card-border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="bg-bmrc-green/5 border-b border-bmrc-card-border px-5 py-3">
                <h3 className="font-display font-semibold text-bmrc-text">
                  {category.name}
                </h3>
              </div>
              <ul className="px-5 py-4 space-y-2">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-bmrc-text-light hover:text-bmrc-green transition-colors group"
                    >
                      <ExternalLink className="w-3 h-3 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-bmrc-text-light">
            Want to suggest a link?{" "}
            <a
              href="#contact"
              className="text-bmrc-green font-medium hover:underline"
            >
              Let us know
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="py-20 bg-bmrc-green">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <img src={`${import.meta.env.BASE_URL}bmrc-logo-transparent.png`} alt="BMRC Logo" className="w-20 h-20 mx-auto mb-6" />
        <p className="text-bmrc-gold font-display text-sm tracking-widest uppercase mb-3 font-semibold">
          New Members Welcome
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-cream mb-6">
          Come along and say hello
        </h2>
        <p className="text-bmrc-cream/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          We welcome all prospective new members to pay us a visit and sample
          a friendly evening with fellow enthusiasts. No commitment needed —
          just turn up on a Wednesday and introduce yourself.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              icon: <Clock className="w-6 h-6" />,
              label: "Wednesday Evenings",
              desc: "Every week at our clubhouse",
            },
            {
              icon: <Users className="w-6 h-6" />,
              label: "All Ages & Abilities",
              desc: "From beginners to experts",
            },
            {
              icon: <Gauge className="w-6 h-6" />,
              label: "Any Gauge Welcome",
              desc: "Model what you love",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-bmrc-green-dark/50 border border-bmrc-green-light/20 rounded-xl p-5"
            >
              <div className="text-bmrc-gold mb-3">{item.icon}</div>
              <h3 className="font-semibold text-bmrc-cream text-sm mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-bmrc-cream/60">{item.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-bmrc-gold text-bmrc-dark font-bold px-8 py-3.5 rounded-lg hover:bg-bmrc-gold-light transition-all text-base"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
        </a>
      </div>
    </section>
  );
}


const CONTACT_CATEGORIES = [
  "General Enquiries",
  "Membership",
  "Exhibition Booking",
  "Secretary",
  "Treasury",
];

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz98M7A0F_zGweWSj9RzTnEkMn99T4YKqXax51sBizPZE4TPrVcoNS1GTLm3TNMgxtkFQ/exec";

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [category, setCategory] = useState(CONTACT_CATEGORIES[0]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          category,
          message: data.get("message"),
        }),
      });
      setStatus("sent");
      form.reset();
      setCategory(CONTACT_CATEGORIES[0]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 bg-bmrc-cream">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-4">
            Contact the Club
          </h2>
          <p className="text-bmrc-text-light">
            Whether it's about membership, exhibitions, or just saying hello —
            fill in the form below and we'll get back to you.
          </p>
        </div>

        {status === "sent" ? (
          <div className="bg-bmrc-card border border-bmrc-green/30 rounded-2xl p-8 shadow-sm text-center">
            <CircleCheck className="w-12 h-12 text-bmrc-green mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-bmrc-text mb-2">
              Message Sent
            </h3>
            <p className="text-bmrc-text-light text-sm mb-6">
              Thanks for getting in touch — we'll get back to you as soon as we can.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-sm text-bmrc-green font-semibold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-bmrc-card border border-bmrc-card-border rounded-2xl p-8 shadow-sm space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-bmrc-text mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-bmrc-card-border bg-white text-bmrc-text text-sm focus:outline-none focus:ring-2 focus:ring-bmrc-green/30 focus:border-bmrc-green transition-all"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-bmrc-text mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-bmrc-card-border bg-white text-bmrc-text text-sm focus:outline-none focus:ring-2 focus:ring-bmrc-green/30 focus:border-bmrc-green transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-bmrc-text mb-1.5">
                What's this about? *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-bmrc-card-border bg-white text-bmrc-text text-sm focus:outline-none focus:ring-2 focus:ring-bmrc-green/30 focus:border-bmrc-green transition-all"
              >
                {CONTACT_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-bmrc-text mb-1.5">
                Message *
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg border border-bmrc-card-border bg-white text-bmrc-text text-sm focus:outline-none focus:ring-2 focus:ring-bmrc-green/30 focus:border-bmrc-green transition-all resize-none"
                placeholder="How can we help?"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600 font-medium">
                Something went wrong — please try again or email us directly at basildonmrc@gmail.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 bg-bmrc-green text-white font-bold px-8 py-3 rounded-lg hover:bg-bmrc-green-light transition-all text-sm w-full sm:w-auto justify-center disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bmrc-dark py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={`${import.meta.env.BASE_URL}bmrc-logo-transparent.png`} alt="BMRC Logo" className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-bmrc-cream/70 leading-tight">
                Basildon Model Railway Club
              </span>
              <span className="text-[10px] text-bmrc-cream/30 tracking-wider">
                Basildon, Essex · Est. 1979
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-bmrc-cream/40">
            <a
              href="mailto:basildonmrc@gmail.com"
              className="hover:text-bmrc-gold transition-colors"
            >
              basildonmrc@gmail.com
            </a>
            <span className="hidden sm:inline">·</span>
            <a
              href="https://www.cmra.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bmrc-gold transition-colors"
            >
              Chiltern Model Railway Association
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-bmrc-cream/10 text-center">
          <p className="text-sm text-bmrc-cream/30">
            &copy; {new Date().getFullYear()} Basildon Model Railway Club
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-bmrc-gold focus:text-bmrc-dark focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:text-sm">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Gauges />
        <Layouts />
        <Exhibition />
        <ExhibitionDiary />
        <Links />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
