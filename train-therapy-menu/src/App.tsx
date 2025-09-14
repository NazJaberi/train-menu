import React, { useMemo, useState } from "react";
import {
  Search,
  ChevronRight,
  Coffee,
  CupSoda,
  Snowflake,
  Leaf,
  FlaskConical,
  Beef,
  Award,
  Cookie,
  Sparkles,
} from "lucide-react";

/*
  Train Therapy — One‑page Menu (Full Single File)
  ------------------------------------------------
  • Tailwind classes for styling
  • Works as a single React component (TSX)
  • Costa‑inspired layout, but with Train Therapy colors (sky blue + black)
  • Smooth in‑page navigation, search, price ranges

  Usage: import and render <TrainTherapyMenu /> anywhere in your app.
  If you want to show a logo image, replace the placeholder box in the
  header with an <img src="/path/to/logo.png" alt="Train Therapy" />
*/

// =============== Types =================

type Price = number | { min: number; max: number };

type Item = {
  name: string;
  price: Price;
  tag?: string; // e.g., "favorite"
  image?: string; // optional image path e.g. "/menu/latte.jpg"
};

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: Item[];
};

// =============== Data =================

const sections: Section[] = [
  {
    id: "hot",
    label: "Hot Drinks (Coffee)",
    icon: <Coffee className="h-5 w-5" />,
    items: [
      { name: "Latte", price: 1.5 },
      { name: "Cappuccino", price: 1.5 },
      { name: "Americano", price: 1.3 },
      { name: "Spanish Latte", price: 1.6 },
      { name: "Hot Chocolate", price: 1.9 },
      { name: "Single Espresso", price: 0.9 },
      { name: "Double Espresso", price: 1.1 },
      { name: "Cortado", price: 1.5 },
      { name: "Affogato", price: 1.5 },
    ],
  },
  {
    id: "cold",
    label: "Cold Drinks (Coffee)",
    icon: <Snowflake className="h-5 w-5" />,
    items: [
      { name: "Iced Latte", price: 1.5 },
      { name: "Iced Americano", price: 1.3 },
      { name: "Iced Spanish", price: 1.7 },
      { name: "Vanilla Milk Shake", price: 2 },
      { name: "Saffron Latte", price: 2.1 },
      { name: "Salted Caramel", price: 1.8 },
    ],
  },
  {
    id: "juices",
    label: "Fresh Juices",
    icon: <CupSoda className="h-5 w-5" />,
    items: [
      { name: "Melon Juice", price: { min: 1.7, max: 2.0 } },
      { name: "Mango", price: { min: 2.1, max: 2.3 } },
      { name: "Mixed Berries", price: { min: 2.0, max: 2.5 } },
      { name: "Vitamin C", price: 2.1 },
      { name: "Go Green", price: 2.1 },
      { name: "Beetroot", price: { min: 1.6, max: 2.2 } },
      { name: "Carrots Juice", price: 2.1 },
    ],
  },
  {
    id: "smoothies",
    label: "Smoothies",
    icon: <Leaf className="h-5 w-5" />,
    items: [
      { name: "Mango Smoothie", price: 2.3 },
      { name: "Avocado Smoothie", price: { min: 2.0, max: 2.5 } },
      { name: "Supper Berries", price: { min: 2.3, max: 2.5 } },
      { name: "Mixed Nuts", price: 2.7 },
      { name: "Banana", price: 2.1 },
      { name: "Cookies Shake", price: { min: 2.2, max: 2.5 } },
    ],
  },
  {
    id: "shots",
    label: "Energy Shots",
    icon: <FlaskConical className="h-5 w-5" />,
    items: [
      { name: "Boost Shots", price: 0.9 },
      { name: "Ginger Shots", price: 0.7 },
    ],
  },
  {
    id: "protein",
    label: "Protein Shakes",
    icon: <Sparkles className="h-5 w-5" />,
    items: [
      { name: "Chocolate", price: 1.5 },
      { name: "Vanilla", price: 1.5 },
      { name: "Choco Coco Nut", price: 1.5 },
      { name: "Brownie", price: 1.5 },
      { name: "Strawberry", price: 1.5 },
      { name: "Mass Gainer", price: 1.5 },
      { name: "Cookies & Cream", price: 1.5 },
      { name: "Salted Caramel", price: 1.5 },
      { name: "Peanut Butter", price: 1.5 },
    ],
  },
  {
    id: "beef-protein",
    label: "Beef Protein",
    icon: <Beef className="h-5 w-5" />,
    items: [
      { name: "Mixed Berries", price: 1.5 },
      { name: "Tropical", price: 1.5 },
      { name: "Cola", price: 1.5 },
      { name: "Cherry", price: 1.5 },
    ],
  },
  {
    id: "signature",
    label: "Signature",
    icon: <Award className="h-5 w-5" />,
    items: [
      { name: "Açaí Protein", price: 2.5, tag: "favorite" },
      { name: "Zack Shake", price: 2.1 },
      { name: "Mixed Hydration", price: 2.1 },
      { name: "Alfredo Cappuccino", price: 2.2 },
      { name: "Ice Cream Mix", price: { min: 2.2, max: 2.3 } },
    ],
  },
  {
    id: "snacks",
    label: "Snacks (Sugar‑Free)",
    icon: <Cookie className="h-5 w-5" />,
    items: [
      { name: "Protein Cookies", price: 1.7 },
      { name: "Protein Cheese Cake", price: { min: 1.8, max: 2.1 } },
      { name: "Chia Pudding", price: 1.8 },
      { name: "Almond Croissants", price: { min: 1.8, max: 2.5 } },
      { name: "Seeds Bar", price: 1.5 },
    ],
  },
];

// =============== Helpers =================

const currency = "BHD"; // change if needed

function formatPrice(price: Price) {
  if (typeof price === "number") return price.toFixed(2);
  return `${price.min.toFixed(2)}–${price.max.toFixed(2)}`;
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function Pill({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm border transition-all ${
        active
          ? "border-sky-500 text-sky-600 bg-sky-50 dark:bg-sky-500/10"
          : "border-zinc-200 text-zinc-700 dark:text-zinc-200 dark:border-zinc-700"
      }`}
    >
      {children}
    </span>
  );
}

function MenuCard({ item }: { item: Item }) {
  return (
    <div className="group flex items-center gap-3 sm:gap-4 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-4 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover flex-shrink-0 border border-zinc-200/60 dark:border-zinc-800/80"
          loading="lazy"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-zinc-900 dark:text-zinc-100 text-base md:text-lg font-semibold tracking-tight truncate">
            {item.name}
          </h4>
          {item.tag === "favorite" && (
            <span className="text-sky-500" aria-label="Chef's pick">
              ★
            </span>
          )}
        </div>
      </div>
      <div className="text-zinc-900 dark:text-zinc-100 font-semibold text-right">
        <span className="tabular-nums tracking-tight">{formatPrice(item.price)}</span>
        <span className="ml-1 text-xs opacity-70">{currency}</span>
      </div>
    </div>
  );
}

function SectionBlock({ s, q }: { s: Section; q: string }) {
  const filtered = useMemo(() => {
    if (!q) return s.items;
    const needle = q.toLowerCase();
    return s.items.filter((i) => i.name.toLowerCase().includes(needle));
  }, [s.items, q]);

  if (!filtered.length) return null;

  return (
    <section id={s.id} className="scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <div className="shrink-0 text-sky-600 dark:text-sky-400">{s.icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          {s.label}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent ml-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {filtered.map((item) => (
          <MenuCard key={`${s.id}-${slugify(item.name)}`} item={item} />
        ))}
      </div>
    </section>
  );
}

// =============== Main =================

export default function TrainTherapyMenu() {
  const [query, setQuery] = useState("");

  // Helper: shorter labels for mobile chips
  const shortLabel = (label: string) => label.replace(/\s*\(.*?\)\s*/g, "");

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_100%_-10%,rgba(0,191,255,0.12),transparent),radial-gradient(1200px_600px_at_0%_120%,rgba(0,191,255,0.10),transparent)] dark:bg-[radial-gradient(1200px_600px_at_100%_-10%,rgba(0,191,255,0.18),transparent),radial-gradient(1200px_600px_at_0%_120%,rgba(0,191,255,0.16),transparent)] bg-zinc-50 dark:bg-zinc-950">
        {/* Nav */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/40 border-b border-zinc-200/60 dark:border-zinc-800/70">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 mr-1">
                <img src="/logo.jpg" alt="Train Therapy" className="h-9 w-9 rounded-xl object-cover border border-sky-500/30" />
                <div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-sky-600 dark:text-sky-400 font-semibold">
                    Menu
                  </div>
                  <div className="-mt-0.5 text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    Train Therapy
                  </div>
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-1 ml-4">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleScroll(s.id)}
                    className="text-sm text-zinc-700 dark:text-zinc-200 hover:text-sky-600 dark:hover:text-sky-400 px-3 py-2 rounded-lg transition-colors"
                  >
                    {s.label}
                  </button>
                ))}
              </nav>

              <div className="ml-auto hidden sm:block relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the menu..."
                  className="w-56 md:w-72 rounded-xl border border-zinc-300/70 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/70 pl-10 pr-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              </div>
            </div>

            {/* Mobile category scroller */}
            <div className="md:hidden mt-3 -mb-2 overflow-x-auto no-scrollbar">
              <div className="flex gap-2 pr-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleScroll(s.id)}
                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-300/70 bg-white/80 px-3 py-2 text-sm text-zinc-700 hover:border-sky-500/60 hover:text-sky-600 active:scale-[0.98] transition"
                  >
                    <span className="text-sky-600">{s.icon}</span>
                    {shortLabel(s.label)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-14 pb-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                Crafted with
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
                  energy
                </span>
              </h1>
              <p className="mt-3 text-zinc-600 dark:text-zinc-300 max-w-prose">
                An elegant, single‑page menu inspired by Costa’s layout but
                matched to Train Therapy’s vibrant sky blue and black branding.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill active>
                  <Sparkles className="h-4 w-4" /> Premium feel
                </Pill>
                <Pill>
                  <Coffee className="h-4 w-4" /> Barista‑made
                </Pill>
                <Pill>
                  <Cookie className="h-4 w-4" /> Sugar‑free snacks
                </Pill>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="#signature"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("signature");
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white px-4 py-2.5 font-semibold shadow hover:shadow-lg transition"
                >
                  Explore Signature <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#hot"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("hot");
                  }}
                  className="inline-flex items-center gap-2 rounded-2xl border border-sky-500/40 text-sky-700 dark:text-sky-400 px-4 py-2.5 font-semibold hover:bg-sky-50/60 dark:hover:bg-sky-500/10 transition"
                >
                  See Coffee
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-sky-500/30 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/60 dark:to-zinc-900/30 p-6 shadow-[0_20px_80px_rgba(0,191,255,0.15)]">
                <div className="text-[11px] uppercase tracking-[0.25em] text-sky-600 dark:text-sky-400 font-semibold mb-2">
                  Today’s Pick
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-50">
                      Açaí Protein
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-300 text-sm">
                      Rich, refreshing & protein‑packed
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold text-sky-600">
                    2.50
                    <span className="text-xs ml-1 font-semibold">{currency}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search (mobile) */}
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:hidden">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu..."
              className="w-full rounded-xl border border-zinc-300/70 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/70 pl-10 pr-3 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          </div>
        </div>

        {/* Sections */}
        <main className="mx-auto max-w-6xl px-4 pb-20 space-y-12 md:space-y-16">
          {sections.map((s) => (
            <SectionBlock key={s.id} s={s} q={query} />
          ))}
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200/60 dark:border-zinc-800/70">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                © {new Date().getFullYear()} Train Therapy. All rights reserved.
              </div>
              <div className="flex justify-start md:justify-end gap-2">
                <Pill>
                  <span className="h-2 w-2 rounded-full bg-sky-500 inline-block" />
                  Open today 8:00–22:00
                </Pill>
                <Pill>
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  Sugar‑free options
                </Pill>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
