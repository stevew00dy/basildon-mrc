import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  Phone,
  Train,
  Users,
  ChevronDown,
  Gauge,
  Trophy,
  Heart,
  ArrowRight,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bmrc-green shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Train className="w-7 h-7 text-bmrc-gold" />
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
          {[
            ["About", "#about"],
            ["Layouts", "#layouts"],
            ["Exhibitions", "#exhibitions"],
            ["Join Us", "#join"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-bmrc-cream/80 hover:text-bmrc-gold transition-colors font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-bmrc-green-dark pt-16">
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full track-pattern" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <Train className="w-16 h-16 text-bmrc-gold mx-auto mb-4" />
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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

function Layouts() {
  const featured = [
    { name: "St. James Pier", gauge: "N", status: "Available" },
    { name: "Shell Haven", gauge: "OO", status: "Available" },
    { name: "Dinas Mawddwy", gauge: "OO9", status: "Available" },
    { name: "Tal-Y-Bont", gauge: "OO9", status: "Available" },
    { name: "Kadeleigh", gauge: "OO", status: "Available" },
    { name: "Felsham Road", gauge: "OO", status: "Restricted" },
    { name: "Aldwych UG", gauge: "OO", status: "Available" },
    { name: "Llangwynllyn", gauge: "OO9", status: "Restricted" },
    { name: "Somerset Cider", gauge: "OO9", status: "Available" },
  ];

  return (
    <section id="layouts" className="py-20 bg-bmrc-cream track-pattern">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
            Our Layouts
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-4">
            Layouts available for exhibition
          </h2>
          <p className="text-bmrc-text-light max-w-2xl mx-auto">
            Club and member layouts are regularly exhibited across the country.
            Exhibition managers are welcome to enquire about availability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((layout) => (
            <div
              key={layout.name}
              className="bg-bmrc-card border border-bmrc-card-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-display font-semibold text-bmrc-text">
                  {layout.name}
                </h3>
                <span className="text-xs font-semibold text-bmrc-green bg-bmrc-green/10 px-2 py-0.5 rounded-full">
                  {layout.gauge}
                </span>
              </div>
              <p className="text-sm text-bmrc-text-light">
                Status:{" "}
                <span
                  className={
                    layout.status === "Available"
                      ? "text-bmrc-green font-medium"
                      : "text-bmrc-gold font-medium"
                  }
                >
                  {layout.status}
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-bmrc-text-light">
            30+ layouts in total. Contact{" "}
            <a
              href="mailto:info@basildon-mrc.org.uk"
              className="text-bmrc-green font-medium hover:underline"
            >
              info@basildon-mrc.org.uk
            </a>{" "}
            for full availability and exhibition bookings.
          </p>
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
              Every year we host our own model railway exhibition, held on the
              first full weekend of July. It's a highlight of the club calendar
              and a great day out for the whole family.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bmrc-green mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-bmrc-text text-sm">Venue</p>
                  <p className="text-bmrc-text-light text-sm">
                    James Hornsby School, Leinster Road off Nicholas Lane,
                    Basildon, Essex
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-bmrc-green mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-bmrc-text text-sm">When</p>
                  <p className="text-bmrc-text-light text-sm">
                    First full weekend of July, every year
                  </p>
                </div>
              </div>
            </div>
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
              href="mailto:derek@basildon-mrc.org.uk"
              className="inline-flex items-center gap-2 text-bmrc-green font-semibold hover:text-bmrc-green-light transition-colors text-sm"
            >
              Contact our Exhibition Manager
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Join() {
  return (
    <section id="join" className="py-20 bg-bmrc-green">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Train className="w-12 h-12 text-bmrc-gold mx-auto mb-6" />
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
          href="mailto:info@basildon-mrc.org.uk"
          className="inline-flex items-center gap-2 bg-bmrc-gold text-bmrc-dark font-bold px-8 py-3.5 rounded-lg hover:bg-bmrc-gold-light transition-all text-base"
        >
          <Mail className="w-5 h-5" />
          Get in Touch
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-bmrc-cream">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-bmrc-green font-display text-sm tracking-widest uppercase mb-3 font-semibold">
            Get in Touch
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-bmrc-text mb-4">
            Contact the Club
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-bmrc-card border border-bmrc-card-border rounded-xl p-6 shadow-sm">
            <h3 className="font-display font-semibold text-lg text-bmrc-text mb-4">
              General Enquiries
            </h3>
            <p className="text-bmrc-text-light text-sm leading-relaxed mb-4">
              Membership, visits, general questions — all enquiries should be
              addressed to the club secretary.
            </p>
            <a
              href="mailto:info@basildon-mrc.org.uk"
              className="inline-flex items-center gap-2 text-bmrc-green font-medium text-sm hover:underline"
            >
              <Mail className="w-4 h-4" />
              info@basildon-mrc.org.uk
            </a>
          </div>

          <div className="bg-bmrc-card border border-bmrc-card-border rounded-xl p-6 shadow-sm">
            <h3 className="font-display font-semibold text-lg text-bmrc-text mb-4">
              Exhibition Bookings
            </h3>
            <p className="text-bmrc-text-light text-sm leading-relaxed mb-4">
              Exhibition managers wishing to book club layouts should contact
              our exhibition manager.
            </p>
            <a
              href="mailto:derek@basildon-mrc.org.uk"
              className="inline-flex items-center gap-2 text-bmrc-green font-medium text-sm hover:underline mb-2"
            >
              <Mail className="w-4 h-4" />
              derek@basildon-mrc.org.uk
            </a>
            <p className="flex items-center gap-2 text-bmrc-text-light text-sm">
              <Phone className="w-4 h-4 text-bmrc-green" />
              01268 574884
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bmrc-dark py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Train className="w-6 h-6 text-bmrc-gold" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-bmrc-cream/70 leading-tight">
                Basildon Model Railway Club
              </span>
              <span className="text-[10px] text-bmrc-cream/30 tracking-wider">
                Member of the Chiltern Model Railway Association
              </span>
            </div>
          </div>

          <p className="text-sm text-bmrc-cream/30">
            &copy; {new Date().getFullYear()} Basildon Model Railway Club. Est.
            1979.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gauges />
      <Layouts />
      <Exhibition />
      <Join />
      <Contact />
      <Footer />
    </div>
  );
}
