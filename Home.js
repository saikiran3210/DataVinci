import React from "react";

/**
 * Manuka Honey – Single-Page React Component (No Hooks)
 * - Pure class-based React (no useState/useEffect)
 * - Single file, responsive layout
 * - TailwindCSS utility classes for styling
 * - Smooth in-page navigation
 *
 * Notes:
 * - Replace placeholder images/links with your assets.
 * - This is stand-alone; you can drop it into a CRA/Vite project.
 */

const GRADES = [
  { umf: 10, mgo: 263, notes: "Daily wellness, general immune support", price: "₹4,499", jar: "250g" },
  { umf: 15, mgo: 514, notes: "Stronger potency for seasonal support", price: "₹6,999", jar: "250g" },
  { umf: 20, mgo: 829, notes: "High-grade for targeted usage", price: "₹10,999", jar: "250g" },
  { umf: 24, mgo: 1122, notes: "Ultra-potent, limited batches", price: "₹15,999", jar: "250g" }
];

const BADGES = [
  { label: "UMF™ Certified", desc: "Independently tested & verified" },
  { label: "Non‑GMO", desc: "No additives or antibiotics" },
  { label: "Glyphosate‑Free", desc: "Residue tested" },
  { label: "Halal & Kosher", desc: "Meets dietary standards" },
];

const FAQS = [
  {
    q: "What does UMF™ mean?",
    a: "UMF™ (Unique Manuka Factor) is an independent grading that verifies the purity, quality and potency of genuine Manuka honey from New Zealand."
  },
  {
    q: "UMF vs MGO—what's the difference?",
    a: "MGO measures methylglyoxal concentration (mg/kg). UMF™ is a broader certification that includes MGO as well as other markers and authenticity checks."
  },
  {
    q: "How should I use Manuka honey?",
    a: "Enjoy straight from the spoon, in warm (not hot) drinks, or in recipes. Avoid heating above ~40–45°C to preserve beneficial properties."
  },
  {
    q: "How do I verify a jar?",
    a: "Scan the QR on the label to view batch test results and origin details."
  }
];

class ManukaPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
      activeFaq: null,
      showTraceModal: false,
      selectedGrade: GRADES[1],
    };
    this.handleNav = this.handleNav.bind(this);
    this.toggleFaq = this.toggleFaq.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectGrade = this.selectGrade.bind(this);
  }

  handleNav(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      this.setState({ mobileMenuOpen: false });
    }
  }

  toggleMenu() {
    this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
  }

  toggleFaq(idx) {
    this.setState({ activeFaq: this.state.activeFaq === idx ? null : idx });
  }

  selectGrade(grade) {
    this.setState({ selectedGrade: grade });
  }

  renderNav() {
    return (
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" onClick={(e) => this.handleNav(e, 'home')} className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-amber-500 inline-flex items-center justify-center text-white font-bold">M</span>
            <span className="font-semibold tracking-tight">Manuka</span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {[
              { id: 'grades', label: 'Grades' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'trace', label: 'Traceability' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'faq', label: 'FAQ' },
            ].map((l) => (
              <a key={l.id} href={`#${l.id}`} className="text-neutral-700 hover:text-black" onClick={(e) => this.handleNav(e, l.id)}>
                {l.label}
              </a>
            ))}
          </nav>
          <button onClick={this.toggleMenu} className="md:hidden p-2 rounded-xl border border-neutral-300">
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {this.state.mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
              {[
                { id: 'grades', label: 'Grades' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'trace', label: 'Traceability' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'faq', label: 'FAQ' },
              ].map((l) => (
                <a key={l.id} href={`#${l.id}`} className="py-2" onClick={(e) => this.handleNav(e, l.id)}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    );
  }

  renderHero() {
    return (
      <section id="home" className="bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Pure UMF™ Manuka Honey
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Sourced in Aotearoa New Zealand. Independently tested. Authentic, potent, and traceable from hive to home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#grades" onClick={(e) => this.handleNav(e, 'grades')} className="px-5 py-3 rounded-2xl bg-amber-600 text-white font-semibold shadow">
                Shop Grades
              </a>
              <a href="#trace" onClick={(e) => this.handleNav(e, 'trace')} className="px-5 py-3 rounded-2xl border border-neutral-300 font-semibold">
                Verify a Jar
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {BADGES.map((b, i) => (
                <div key={i} className="p-4 rounded-2xl border bg-white shadow-sm">
                  <div className="font-semibold">{b.label}</div>
                  <div className="text-sm text-neutral-600">{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1466027131045-daac1a8b072c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
            <div className="absolute -bottom-4 -left-4 bg-white border rounded-2xl p-4 shadow-md">
              <div className="text-xs text-neutral-500">Featured Grade</div>
              <div className="font-semibold">UMF™ {this.state.selectedGrade.umf}+ · MGO {this.state.selectedGrade.mgo}+</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderGrades() {
    return (
      <section id="grades" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold">Choose Your UMF™ Grade</h2>
              <p className="text-neutral-600 mt-1">From everyday wellness to ultra‑potent batches.</p>
            </div>
            <div className="hidden md:block text-sm text-neutral-600">250g jars · Limited seasonal harvests</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GRADES.map((g) => (
              <div key={g.umf} className={`rounded-3xl border p-6 bg-white shadow-sm hover:shadow-md transition ${this.state.selectedGrade.umf === g.umf ? 'ring-2 ring-amber-500' : ''}`}>
                <div className="text-neutral-500 text-sm">UMF™</div>
                <div className="text-4xl font-extrabold">{g.umf}+</div>
                <div className="mt-1 text-sm text-neutral-600">MGO {g.mgo}+ · {g.jar}</div>
                <p className="mt-4 text-neutral-700">{g.notes}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="font-semibold">{g.price}</div>
                  <button onClick={() => this.selectGrade(g)} className="px-4 py-2 rounded-xl bg-amber-600 text-white font-semibold">
                    Select
                  </button>
                </div>
                <a href="#trace" onClick={(e) => this.handleNav(e, 'trace')} className="block mt-3 text-sm text-amber-700 hover:underline">Verify batch →</a>
              </div>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border p-6 bg-amber-50">
              <div className="font-semibold">Daily Ritual</div>
              <p className="text-sm text-neutral-700">UMF™ 10+ to 15+ for everyday immune and gut support.</p>
            </div>
            <div className="rounded-3xl border p-6">
              <div className="font-semibold">Targeted Support</div>
              <p className="text-sm text-neutral-700">UMF™ 20+ when you want higher potency in short bursts.</p>
            </div>
            <div className="rounded-3xl border p-6">
              <div className="font-semibold">Ultra Potent</div>
              <p className="text-sm text-neutral-700">UMF™ 24+ batches are rare and best for connoisseurs.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderBenefits() {
    return (
      <section id="benefits" className="py-16 bg-amber-50/60">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Why Manuka?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "Naturally Active", d: "Contains MGO and other markers unique to Manuka nectar." },
              { t: "Carefully Harvested", d: "Seasonal, small-batch extractions from remote regions." },
              { t: "Raw & Unblended", d: "No additives. No antibiotics. Just honey." },
            ].map((b, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-amber-200 inline-flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.77 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z"/></svg>
                </div>
                <div className="font-semibold">{b.t}</div>
                <p className="text-neutral-700 mt-1 text-sm">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  renderTrace() {
    return (
      <section id="trace" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Trace your jar</h2>
            <p className="mt-3 text-neutral-700">Every batch is independently tested. Scan the QR on your label to see origin and lab results.</p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => this.setState({ showTraceModal: true })} className="px-5 py-3 rounded-2xl bg-amber-600 text-white font-semibold shadow">
                Simulate Scan
              </button>
              <a href="#faq" onClick={(e) => this.handleNav(e, 'faq')} className="px-5 py-3 rounded-2xl border border-neutral-300 font-semibold">Learn More</a>
            </div>
            <div className="mt-8 text-sm text-neutral-600">Selected Grade: <span className="font-semibold">UMF™ {this.state.selectedGrade.umf}+ · MGO {this.state.selectedGrade.mgo}+ · {this.state.selectedGrade.jar}</span></div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
            <div className="absolute -bottom-5 -right-5 p-4 rounded-2xl bg-white border shadow">
              <div className="text-xs text-neutral-500">Batch</div>
              <div className="font-semibold tracking-wide">NZH‑{this.state.selectedGrade.umf}‑{this.state.selectedGrade.mgo}</div>
            </div>
          </div>
        </div>

        {this.state.showTraceModal && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-4" onClick={() => this.setState({ showTraceModal: false })}>
            <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-neutral-500">Verification</div>
                  <div className="text-xl font-bold">UMF™ {this.state.selectedGrade.umf}+ · MGO {this.state.selectedGrade.mgo}+</div>
                </div>
                <button className="p-2 rounded-xl border" onClick={() => this.setState({ showTraceModal: false })}>
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-neutral-500">Origin</div>
                  <div className="font-semibold">Northland, NZ</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-neutral-500">Harvest</div>
                  <div className="font-semibold">Summer 2025</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-neutral-500">MGO</div>
                  <div className="font-semibold">≥ {this.state.selectedGrade.mgo} mg/kg</div>
                </div>
                <div className="rounded-2xl border p-4">
                  <div className="text-xs text-neutral-500">Status</div>
                  <div className="font-semibold text-green-700">Verified</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-neutral-600">This is a demo modal. Replace with your API response or verification page.</div>
            </div>
          </div>
        )}
      </section>
    );
  }

  renderReviews() {
    return (
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold">What people say</h2>
            <div className="text-sm text-neutral-600">4.8/5 average · 1,200+ ratings</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { n: "Aarav S.", t: "Rich, smooth and authentic.", d: "UMF™ 15+ became my daily ritual." },
              { n: "Meera K.", t: "Potent and reliable.", d: "Loved the transparency with batch testing." },
              { n: "Rahul P.", t: "Noticeably different.", d: "The texture and taste stand out from regular honey." },
            ].map((r, i) => (
              <div key={i} className="rounded-3xl border p-6 bg-white shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-amber-200" />
                  <div>
                    <div className="font-semibold">{r.n}</div>
                    <div className="text-xs text-neutral-500">Verified buyer</div>
                  </div>
                </div>
                <div className="mt-4 font-medium">{r.t}</div>
                <p className="text-sm text-neutral-700 mt-1">{r.d}</p>
                <div className="mt-3 flex">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.77 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  renderFAQ() {
    return (
      <section id="faq" className="py-16 bg-amber-50/60">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-3">
            {FAQS.map((f, i) => (
              <div key={i} className="rounded-2xl border bg-white">
                <button onClick={() => this.toggleFaq(i)} className="w-full text-left px-5 py-4 flex items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 transition ${this.state.activeFaq === i ? 'rotate-45' : ''}`}><path d="M12 5v14M5 12h14"/></svg>
                </button>
                {this.state.activeFaq === i && (
                  <div className="px-5 pb-5 text-neutral-700">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  renderFooter() {
    return (
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-amber-500 inline-flex items-center justify-center text-white font-bold">M</span>
              <span className="font-semibold tracking-tight">Manuka</span>
            </div>
            <p className="text-sm text-neutral-600 mt-3">Genuine Manuka honey, responsibly harvested and independently certified.</p>
          </div>
          <div>
            <div className="font-semibold mb-3">Explore</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li><a href="#grades" onClick={(e) => this.handleNav(e, 'grades')} className="hover:underline">Grades</a></li>
              <li><a href="#benefits" onClick={(e) => this.handleNav(e, 'benefits')} className="hover:underline">Benefits</a></li>
              <li><a href="#trace" onClick={(e) => this.handleNav(e, 'trace')} className="hover:underline">Traceability</a></li>
              <li><a href="#faq" onClick={(e) => this.handleNav(e, 'faq')} className="hover:underline">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Stay Updated</div>
            <form className="flex gap-2">
              <input type="email" placeholder="Email address" className="flex-1 rounded-xl border px-4 py-3" />
              <button type="button" className="px-5 py-3 rounded-xl bg-amber-600 text-white font-semibold">Subscribe</button>
            </form>
            <div className="text-xs text-neutral-500 mt-2">By subscribing you agree to our terms.</div>
          </div>
        </div>
        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-neutral-500 flex flex-wrap gap-4 justify-between">
            <div>© {new Date().getFullYear()} Manuka. All rights reserved.</div>
            <div className="space-x-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  render() {
    return (
      <main className="font-sans text-neutral-900">
        {this.renderNav()}
        {this.renderHero()}
        {this.renderGrades()}
        {this.renderBenefits()}
        {this.renderTrace()}
        {this.renderReviews()}
        {this.renderFAQ()}
        {this.renderFooter()}
      </main>
    );
  }
}

export default ManukaPage;
