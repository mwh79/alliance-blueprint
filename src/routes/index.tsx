import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-construction.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alliance General Contractors Inc | Queens NY General Contractor" },
      {
        name: "description",
        content:
          "Alliance General Contractors Inc — licensed & insured general contractor in Bellerose, Queens NY. Home additions, kitchen & bath remodels, roofing, siding, masonry. Free estimates. Call (646) 207-5898.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "(646) 207-5898";
const PHONE_HREF = "tel:+16462075898";
const ADDRESS = "84-57 249th Street, Bellerose, NY 11426";

const services = [
  { t: "Home Additions & Extensions", d: "Dormers, second-story additions, rear extensions and full home expansions built to NYC code." },
  { t: "Kitchen Remodeling", d: "Custom cabinetry, granite & quartz countertops, tile backsplashes, plumbing & electrical." },
  { t: "Bathroom Remodeling", d: "Full gut renovations, walk-in showers, tubs, vanities, tile work and waterproofing." },
  { t: "Basement Finishing", d: "Framing, drywall, flooring, egress windows and legal-conforming basement build-outs." },
  { t: "Roofing", d: "Asphalt shingle, flat roof, rubber/EPDM, gutters & leaders. Tear-offs and re-roofs." },
  { t: "Siding & Windows", d: "Vinyl, fiber cement, stucco siding, energy-efficient windows and entry doors." },
  { t: "Masonry & Concrete", d: "Brick pointing, stoops, sidewalks, retaining walls, pavers, driveways and patios." },
  { t: "Interior Renovations", d: "Drywall, painting, hardwood floors, trim & moldings, doors and built-ins." },
  { t: "Commercial Build-Outs", d: "Storefronts, offices and restaurant build-outs across Queens, Brooklyn, Bronx & L.I." },
  { t: "Violation Removal", d: "DOB & ECB violation removal, permit expediting and Certificate of Occupancy work." },
];

const stats = [
  { n: "15+", l: "Years Experience" },
  { n: "500+", l: "Projects Completed" },
  { n: "4.9★", l: "Customer Rating" },
  { n: "100%", l: "Licensed & Insured" },
];

const testimonials = [
  { n: "Victor H., Bellerose", t: "Alliance did an excellent job renovating our 1980's kitchen and bathroom from start to finish. The quality and workmanship was outstanding and the crew was very respectful." },
  { n: "Maria S., Bayside", t: "We hired them for a full second-story addition. They handled every permit, every inspector, and finished on time. Couldn't be happier." },
  { n: "Jonathan P., Floral Park", t: "Reliable, fairly priced and they actually pick up the phone. Hard to find that combination in NYC contractors." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Top utility bar */}
      <div className="bg-[var(--brand-dark)] text-primary-foreground text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span>📍 {ADDRESS}</span>
            <span>🕒 Mon–Sat 7:00 AM – 7:00 PM · Sun by appointment</span>
          </div>
          <div className="flex gap-x-5">
            <span>NYC HIC Lic. · Fully Insured · Bonded</span>
            <a href={PHONE_HREF} className="font-bold text-[var(--brand-yellow)] hover:underline">📞 {PHONE}</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b-4 border-accent bg-card">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground font-black text-2xl">A</div>
            <div>
              <div className="text-xl font-black uppercase tracking-tight text-primary leading-tight">Alliance General<br/>Contractors Inc.</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Building Trust With Quality Work · Est. 2019</div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-1 text-sm font-semibold uppercase">
            {["Home","Services","About","Coverage","Reviews","Contact"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s/g,"-")}`} className="px-3 py-2 hover:bg-secondary">{l}</a>
            ))}
            <a href={PHONE_HREF} className="ml-2 bg-accent px-4 py-2 font-black text-accent-foreground hover:brightness-95">FREE ESTIMATE</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="relative h-[calc(100vh-104px)] min-h-[520px] w-full overflow-hidden">
          <img src={heroImg} alt="Alliance General Contractors crew on a Queens NY job site" width={1600} height={900} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[var(--brand-dark)]/65" />
          <div className="absolute inset-0 mx-auto grid max-w-7xl items-center gap-6 px-4 py-6 text-primary-foreground lg:grid-cols-5">
            <div className="lg:col-span-3">
              <span className="mb-2 inline-block w-fit border-l-4 border-accent bg-black/40 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--brand-yellow)]">Serving All 5 Boroughs · Queens · Brooklyn · Bronx · Manhattan · Staten Island · Long Island</span>
              <h1 className="text-3xl font-black uppercase leading-tight md:text-5xl">
                Queens' Trusted General Contractor for Residential & Commercial Construction
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-white/90 md:text-base">
                Family-operated since 2019 and serving all five boroughs of NYC plus Long Island from our Bellerose office. From kitchen remodels and home additions to roofing, siding and full commercial build-outs — we deliver on-time, on-budget projects with no surprises.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={PHONE_HREF} className="bg-accent px-5 py-3 font-black uppercase text-accent-foreground shadow-md hover:brightness-95">📞 Call {PHONE}</a>
                <a href="#services" className="border-2 border-white px-5 py-3 font-black uppercase text-white hover:bg-white hover:text-[var(--brand-dark)]">View Services</a>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1 text-sm md:grid-cols-4">
                <li>✔ Licensed & Insured</li>
                <li>✔ Free On-Site Estimates</li>
                <li>✔ Workers' Comp Coverage</li>
                <li>✔ Permit & DOB Filings</li>
              </ul>
            </div>
            <aside className="border-2 border-primary bg-card p-4 text-foreground shadow-2xl lg:col-span-2">
              <div className="border-b-2 border-accent pb-2 text-lg font-black uppercase text-primary">Get a Free Estimate</div>
              <p className="mt-1 text-xs text-muted-foreground">No obligation · Fast response · Family-operated</p>
              <form className="mt-3 grid gap-2 text-sm">
                <input className="border border-input bg-background px-3 py-2" placeholder="Full Name" />
                <input className="border border-input bg-background px-3 py-2" placeholder="Phone Number" />
                <input className="border border-input bg-background px-3 py-2" placeholder="Email Address" />
                <select className="border border-input bg-background px-3 py-2">
                  <option>Service Needed…</option>
                  {services.map(s => <option key={s.t}>{s.t}</option>)}
                </select>
                <textarea className="border border-input bg-background px-3 py-2" rows={2} placeholder="Briefly describe your project" />
                <button type="button" className="bg-accent py-3 font-black uppercase text-accent-foreground hover:brightness-95">Request Estimate</button>
                <div className="text-center text-xs text-muted-foreground">Or call <a href={PHONE_HREF} className="font-bold text-primary">{PHONE}</a></div>
              </form>
            </aside>
          </div>
        </div>
        {/* Stats strip */}
        <div className="bg-accent">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-accent-foreground/20 md:grid-cols-4">
            {stats.map(s => (
              <div key={s.l} className="px-4 py-5 text-center text-accent-foreground">
                <div className="text-3xl font-black">{s.n}</div>
                <div className="text-xs font-semibold uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Why Us, dense two-column */}
      <section id="about" className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="text-xs font-bold uppercase tracking-widest text-accent">About The Company</div>
            <h2 className="mt-1 text-3xl font-black uppercase text-primary">Welcome to Alliance General Contractors</h2>
            <p className="mt-4 text-sm leading-relaxed text-foreground">
              Alliance General Contractors Inc. is a fully licensed and insured construction company headquartered at <strong>84-57 249th Street in Bellerose, Queens, New York 11426</strong>. Since 2019 we have been serving homeowners, landlords, property managers and business owners across the five boroughs and Nassau County. We are a hands-on, owner-operated firm — when you hire Alliance, you work directly with the people doing the building.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              Our crews handle every phase of construction in-house: framing, plumbing, electrical, HVAC, masonry, roofing, drywall, tile, flooring and finish carpentry. We pull permits, deal with the Department of Buildings, schedule inspections and clean up after ourselves every single day. We pride ourselves on showing up when we say we will, sticking to written estimates, and finishing the job — three things that should be standard but rarely are.
            </p>
            <h3 className="mt-6 text-lg font-black uppercase text-primary">Why Homeowners Choose Alliance</h3>
            <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 text-sm md:grid-cols-2">
              {[
                "Free, no-obligation written estimates",
                "Transparent pricing — no hidden change orders",
                "All trades performed in-house",
                "Full DOB permit & expediting service",
                "Workers' Comp & General Liability insured",
                "Lead-Safe Renovator certified",
                "10-year workmanship warranty available",
                "References from your own neighborhood",
              ].map(x => <li key={x} className="border-l-4 border-accent pl-2">{x}</li>)}
            </ul>
          </div>
          <aside className="border-2 border-primary bg-card p-5">
            <div className="border-b-2 border-accent pb-2 text-lg font-black uppercase text-primary">Get a Free Estimate</div>
            <form className="mt-3 grid gap-2 text-sm">
              <input className="border border-input bg-background px-3 py-2" placeholder="Full Name" />
              <input className="border border-input bg-background px-3 py-2" placeholder="Phone Number" />
              <input className="border border-input bg-background px-3 py-2" placeholder="Email Address" />
              <select className="border border-input bg-background px-3 py-2">
                <option>Service Needed…</option>
                {services.map(s => <option key={s.t}>{s.t}</option>)}
              </select>
              <textarea className="border border-input bg-background px-3 py-2" rows={3} placeholder="Briefly describe your project" />
              <button type="button" className="bg-accent py-3 font-black uppercase text-accent-foreground hover:brightness-95">Request Estimate</button>
              <div className="text-center text-xs text-muted-foreground">Or call <a href={PHONE_HREF} className="font-bold text-primary">{PHONE}</a></div>
            </form>
          </aside>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-end justify-between border-b-2 border-primary pb-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-accent">What We Do</div>
              <h2 className="text-3xl font-black uppercase text-primary">Our Construction Services</h2>
            </div>
            <a href={PHONE_HREF} className="hidden text-sm font-bold uppercase text-primary underline md:inline">Call for Pricing →</a>
          </div>
          <div className="mt-6 grid gap-px bg-border md:grid-cols-3 lg:grid-cols-5">
            {services.map((s,i) => (
              <div key={s.t} className="bg-card p-5 hover:bg-secondary">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center bg-primary text-xs font-black text-primary-foreground">{String(i+1).padStart(2,"0")}</div>
                <h3 className="text-sm font-black uppercase text-primary">{s.t}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours / Map */}
      <section id="service-area" className="border-b border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-accent">Coverage & Hours</div>
            <h2 className="text-3xl font-black uppercase text-primary">Serving All 5 Boroughs of NYC</h2>
            <p className="mt-2 text-sm text-foreground">
              Headquartered in Bellerose, Queens — Alliance General Contractors proudly operates across all five boroughs of New York City: <strong>Queens, Brooklyn, the Bronx, Manhattan and Staten Island</strong> — plus Nassau County and western Long Island. Free on-site estimates anywhere in our service area.
            </p>
            <div className="mt-6 border-2 border-primary bg-card p-4 text-sm">
              <div className="font-black uppercase text-primary">Office Hours</div>
              <table className="mt-2 w-full">
                <tbody>
                  {[
                    ["Monday – Friday","7:00 AM – 7:00 PM"],
                    ["Saturday","8:00 AM – 5:00 PM"],
                    ["Sunday","By Appointment"],
                    ["Emergency Service","24 / 7"],
                  ].map(([d,h]) => (
                    <tr key={d} className="border-b border-border last:border-0">
                      <td className="py-1 font-semibold">{d}</td>
                      <td className="py-1 text-right text-muted-foreground">{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-2 border-primary bg-card">
            <iframe
              title="Alliance General Contractors location map"
              src="https://www.google.com/maps?q=84-57+249th+Street,+Bellerose,+NY+11426&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-xs font-bold uppercase tracking-widest text-accent">Customer Feedback</div>
          <h2 className="text-3xl font-black uppercase text-primary">What Our Clients Say <span className="text-accent">★★★★★</span></h2>
          <p className="mt-1 text-sm text-muted-foreground">Rated 4.9 / 5 across 70+ verified reviews on Google, Houzz and Angi.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map(r => (
              <article key={r.n} className="border-l-4 border-accent bg-card p-5 shadow-sm">
                <div className="text-accent">★★★★★</div>
                <p className="mt-2 text-sm italic text-foreground">"{r.t}"</p>
                <div className="mt-3 text-xs font-bold uppercase text-primary">— {r.n}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6">
          <div>
            <div className="text-xl font-black uppercase">Ready to start your project?</div>
            <div className="text-sm">Free on-site estimates throughout Queens, Brooklyn, Bronx, Manhattan & Long Island.</div>
          </div>
          <a href={PHONE_HREF} className="bg-[var(--brand-dark)] px-6 py-3 font-black uppercase text-primary-foreground hover:brightness-110">📞 Call {PHONE}</a>
        </div>
      </section>

      {/* Contact + Footer */}
      <section id="contact" className="bg-[var(--brand-dark)] text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-black uppercase text-[var(--brand-yellow)]">Alliance General Contractors Inc.</div>
            <p className="mt-2 text-sm text-white/80">Licensed & insured general contractor proudly serving the New York City metropolitan area since 2019. Residential & commercial construction, renovations and remodeling.</p>
            <div className="mt-4 space-y-1 text-sm">
              <div>📍 {ADDRESS}</div>
              <div>📞 <a href={PHONE_HREF} className="font-bold text-[var(--brand-yellow)]">{PHONE}</a></div>
              <div>✉ info@alliancegcinc.com</div>
              <div>🕒 Mon–Sat 7AM–7PM</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-black uppercase text-[var(--brand-yellow)]">Services</div>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              {services.slice(0,6).map(s => <li key={s.t}>› {s.t}</li>)}
            </ul>
          </div>
          <div>
            <div className="text-sm font-black uppercase text-[var(--brand-yellow)]">Credentials</div>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>› NYC DCWP Home Improvement License</li>
              <li>› NYS DOS #5506634</li>
              <li>› USDOT #3649214</li>
              <li>› General Liability Insured</li>
              <li>› Workers' Compensation</li>
              <li>› Lead-Safe EPA Certified</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-4 py-4 text-xs text-white/60">
            <div>© {new Date().getFullYear()} Alliance General Contractors Inc. All rights reserved.</div>
            <div>Bellerose · Queens · NY 11426</div>
          </div>
        </div>
      </section>
    </div>
  );
}
