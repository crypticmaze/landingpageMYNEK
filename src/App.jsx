import React from "react";
import { motion } from "framer-motion";

const MOCKS = {
  anime: "/mockups/anime.png",
  chaos: "/mockups/chaos.png",
  heritage: "/mockups/heritage.png",
};

export default function App() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="text-2xl tracking-widest font-semibold">MYNEK</div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#drop" className="hover:text-white">Drop 01</a>
            <a href="#story" className="hover:text-white">Story</a>
            <a href="#subscribe" className="hover:text-white">Subscribe</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <HeroGraphic />
        <div className="relative mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-white/60">Drop 01</p>
            <h1 className="mt-2 text-5xl font-bold">TRINITY - The Origin</h1>
            <p className="mt-4 text-white/70 max-w-xl">
              Three philosophies. One reality. Anime power, Tech chaos, and Heritage roots introduce MYNEK's first chapter.
              Minimal front embroidery. Statement back art. Premium 180/240 GSM.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#drop" className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">Shop Drop 01</a>
              <a href="#story" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium hover:border-white/40">Read Story</a>
            </div>
          </div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{ once:true }} className="relative rounded-3xl ring-1 ring-white/10 bg-white/5 p-6">
            <MockupGrid />
          </motion.div>
        </div>
      </section>

      {/* DROP GRID */}
      <main id="drop" className="mx-auto max-w-7xl px-4 py-14 space-y-12">
        <h2 className="text-3xl font-semibold">Drop 01 - Trinity Divisions</h2>

        {/* Animated Division Story Panels */}
        <div className="grid md:grid-cols-3 gap-6">
          <DivisionPanel label="Anime Division" accent="red" blurb="Power through reality. The awakening of MYNEK." effect="aura" />
          <DivisionPanel label="Chaos Division" accent="cyan" blurb="Order is organized chaos. Precision engineered." effect="glitch" />
          <DivisionPanel label="Heritage Division" accent="sand" blurb="Respect the roots. Stitch, craft, story." effect="grain" />
        </div>

        {/* Product Cards with images */}
        <div className="grid md:grid-cols-3 gap-6">
          <ProductCard title="Anime Division" subtitle="Black · 180 GSM" accent="red" base="black" tagline="Wake up to reality." details="Front: embroidery · Back: full color anime-inspired art (DTF)" imgSrc={MOCKS.anime} />
          <ProductCard title="Chaos Division" subtitle="Off-White · 180 GSM" accent="cyan" base="bone" tagline="Order is organized chaos." details="Front: 3D puff logo · Back: HD matte tech grid (screen)" imgSrc={MOCKS.chaos} />
          <ProductCard title="Heritage Division" subtitle="Olive · 240 GSM" accent="sand" base="olive" tagline="Respect the roots." details="Front: embroidery · Back: soft vintage screen or crest" imgSrc={MOCKS.heritage} />
        </div>

        {/* Full mockup row */}
        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <MockupCard label="Anime · Black" base="black" accent="red" quote="Wake up to reality." imgSrc={MOCKS.anime} />
          <MockupCard label="Chaos · Off-White" base="bone" accent="cyan" quote="Order is organized chaos." imgSrc={MOCKS.chaos} />
          <MockupCard label="Heritage · Olive" base="olive" accent="sand" quote="Respect the roots." imgSrc={MOCKS.heritage} />
        </section>
      </main>

      {/* STORY */}
      <section id="story" className="mx-auto max-w-5xl px-4 py-16">
        <div className="rounded-3xl border border-white/10 p-8 md:p-12 bg-white/5">
          <p className="uppercase tracking-[0.3em] text-xs text-white/60">Lore</p>
          <h3 className="mt-2 text-3xl font-semibold">Trinity: The Story</h3>
          <div className="mt-5 grid md:grid-cols-3 gap-6 text-sm text-white/80">
            <div className="rounded-2xl p-5 bg-black/40 ring-1 ring-white/10">
              <h4 className="text-base font-semibold">Anime - Power</h4>
              <p className="mt-2">Born from the clash of shadow and light, the Anime Division is the awakening. It carries the weight of reality and the will to change it. The red accent symbolizes focus and resolve.</p>
            </div>
            <div className="rounded-2xl p-5 bg-black/40 ring-1 ring-white/10">
              <h4 className="text-base font-semibold">Chaos - System</h4>
              <p className="mt-2">In a world ruled by grids and firewalls, the Chaos Division turns disorder into design. Precision lines, matte textures, and engineered motion redefine what street can be.</p>
            </div>
            <div className="rounded-2xl p-5 bg-black/40 ring-1 ring-white/10">
              <h4 className="text-base font-semibold">Heritage - Roots</h4>
              <p className="mt-2">Every step forward begins behind. The Heritage Division honours craft, stitch, and story. Olive hues and tactile embroidery keep the soul of street grounded.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section id="subscribe" className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-3xl bg-white/5 p-8 md:p-12 ring-1 ring-white/10">
          <h4 className="text-2xl font-semibold">Join the First 200</h4>
          <p className="mt-2 text-white/70">Get early access, sizing updates, and limited color alerts.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="you@domain.com" className="w-full rounded-2xl bg-black border border-white/20 px-4 py-3 text-sm outline-none focus:border-white/50" />
            <button type="button" className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90">Notify Me</button>
          </form>
          <p className="mt-3 text-xs text-white/50">By subscribing you agree to receive emails from MYNEK. Unsubscribe anytime.</p>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-xs text-white/60">
          © {currentYear} MYNEK - All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

function DivisionPanel({ label, blurb, accent, effect }) {
  const accentColor = accent === "red" ? "#ef4444" : accent === "cyan" ? "#22d3ee" : "#d4b26b";
  return (
    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{ once:true }} className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 p-6 min-h-[200px]">
      {effect === "aura" && (
        <div className="absolute -inset-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full" style={{background: accentColor, filter:'blur(60px)', opacity:0.18}} />
        </div>
      )}
      {effect === "glitch" && (
        <div className="pointer-events-none absolute inset-0 opacity-20">
          {Array.from({length:12}).map((_,i)=> (
            <div key={i} className="absolute left-0 right-0 h-px bg-white/60" style={{top: `${(i+1)*8}%`}} />
          ))}
        </div>
      )}
      {effect === "grain" && (
        <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage:'radial-gradient(#fff 1px, transparent 1px)', backgroundSize:'3px 3px'}} />
      )}
      <h3 className="text-lg font-semibold relative">{label}</h3>
      <p className="mt-2 text-white/70 relative">{blurb}</p>
    </motion.div>
  );
}

function ProductCard({ title, subtitle, accent, base, tagline, details, imgSrc }) {
  return (
    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{ once:true }} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
      <div className="aspect-[4/5] rounded-2xl bg-black/60 ring-1 ring-white/10 relative overflow-hidden flex items-center justify-center">
        {imgSrc ? (
          <img src={imgSrc} alt={title} className="object-cover w-full h-full"/>
        ) : (
          <TeeSVG base={base} accent={accent} />
        )}
        <div className="absolute bottom-2 right-2 text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10">Oversized</div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xs text-white/60">{subtitle}</p>
        </div>
        <button className="rounded-xl border border-white/20 px-3 py-2 text-xs hover:border-white/40">View</button>
      </div>
      <p className="mt-2 text-sm text-white/80">{details}</p>
      <p className="mt-2 text-xs text-white/60 italic">"{tagline}"</p>
    </motion.div>
  );
}

function MockupCard({ label, base, accent, quote, imgSrc }) {
  return (
    <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{duration:0.6}} viewport={{ once:true }} className="rounded-3xl ring-1 ring-white/10 bg-white/5 p-4 relative overflow-hidden">
      <div className="aspect-[4/5] rounded-2xl bg-black/60 ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
        {imgSrc ? (
          <img src={imgSrc} alt={label} className="object-cover w-full h-full" />
        ) : (
          <TeeSVG base={base} accent={accent} />
        )}
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-white/70">
        <span>{label}</span>
        <span className="italic">{quote}</span>
      </div>
    </motion.div>
  );
}

function TeeSVG({ base = "black", accent = "red" }) {
  const baseFill = base === "black" ? "#0b0b0b" : base === "bone" ? "#e8e6e1" : base === "olive" ? "#4b5a3c" : "#0b0b0b";
  const stroke = base === "bone" ? "#b9b6ad" : "#2a2a2a";
  const accentColor = accent === "red" ? "#ef4444" : accent === "cyan" ? "#22d3ee" : accent === "sand" ? "#d4b26b" : "#ef4444";

  return (
    <svg viewBox="0 0 420 520" className="w-full h-full">
      <defs>
        <linearGradient id="gBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={baseFill} />
          <stop offset="100%" stopColor={baseFill} />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <path d="M80 60 L140 20 L280 20 L340 60 L390 140 L330 170 L330 460 Q210 500 90 460 L90 170 L30 140 Z" fill="url(#gBody)" stroke={stroke} strokeWidth="2" filter="url(#shadow)"/>
      <path d="M160 40 Q210 70 260 40" fill="none" stroke="#3a3a3a" strokeWidth="6" strokeLinecap="round"/>
      <rect x="135" y="180" width="80" height="18" rx="9" fill="#ffffff" opacity={base === "bone" ? 0.9 : 0.85} />
      <text x="175" y="193" textAnchor="middle" fontSize="10" fontWeight="700" fill="#000000">MYNEK</text>
      <circle cx="300" cy="300" r="58" fill={accentColor} opacity="0.16" />
      <path d="M260 260 Q300 300 340 260" fill="none" stroke={accentColor} strokeWidth="5" opacity="0.7"/>
      <path d="M250 320 L350 320" stroke={accentColor} strokeWidth="6" opacity="0.45" />
      <path d="M245 350 L355 350" stroke="#ffffff" strokeWidth="2" opacity="0.35" />
    </svg>
  );
}

function MockupGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 h-full">
      <div className="rounded-2xl ring-1 ring-white/10 bg-black/60 relative overflow-hidden"><TeeSVG base="black" accent="red" /><Chip text="Anime - Black" /></div>
      <div className="rounded-2xl ring-1 ring-white/10 bg-black/60 relative overflow-hidden"><TeeSVG base="bone" accent="cyan" /><Chip text="Chaos - Off-White" /></div>
      <div className="rounded-2xl ring-1 ring-white/10 bg-black/60 relative overflow-hidden"><TeeSVG base="olive" accent="sand" /><Chip text="Heritage - Olive" /></div>
    </div>
  );
}

function Chip({ text }) {
  return <div className="absolute bottom-2 left-2 text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/10">{text}</div>;
}

function HeroGraphic() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-red-500/20 blur-3xl" />
      <div className="absolute top-20 right-0 h-[300px] w-[300px] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-amber-400/20 blur-3xl" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}
