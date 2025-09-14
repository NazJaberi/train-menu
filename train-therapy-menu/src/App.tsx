import React, { useEffect, useMemo, useRef, useState } from "react";
import { nutritionByItem } from "./nutrition";
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
  X,
  CheckCircle,
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

type Macro = { label: string; value: string };
type SizeKey = "regular" | "large";
type Nutrition = { benefits: string[]; macros: Macro[] };
type ItemNutrition = { benefits: string[]; macros: Record<SizeKey, Macro[]>; source?: string };

// =============== Data =================

const sectionsSeed: Section[] = [
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

// Map item names to static image paths in /public/menu
const imageMap: Record<string, string> = {
  // Hot Drinks
  "latte": "/menu/Latte/Latte.png",
  "cappuccino": "/menu/Cappuccino/Cappuccino.png",
  "americano": "/menu/Americano/Americano.png",
  "spanish latte": "/menu/spanish latte/spanish latte.png",
  "hot chocolate": "/menu/Hot Coco/Hot Chocolate.png",
  "single espresso": "/menu/Espresso/espresso.png",
  "double espresso": "/menu/Espresso/espresso.png",
  "cortado": "/menu/Cortado/Cortado.png",
  "affogato": "/menu/Affogato/Affogato.png",

  // Cold Drinks
  "iced latte": "/menu/iced Late/Iced latte.png",
  "iced americano": "/menu/Iced Americano/Iced_Americano.png",
  "iced spanish": "/menu/iced spanish latte/iced_spanish_latte.png",
  "vanilla milk shake": "/menu/Vanilla milk shake/Vanilla milk shake.png",
  "saffron latte": "/menu/Saffron latte/Saffron latte.png",
  "salted caramel": "/menu/Iced Salted Caramel/Iced Salted Caramel.png",

  // Juices
  "melon juice": "/menu/Melon juice/Melon juice.png",
  "mango": "/menu/Mango Juice/Mango Juice.png",
  "mixed berries": "/menu/mixed berries/mixed berries.png",
  "vitamin c": "/menu/Vitamin C/Vitamin C.png",
  "go green": "/menu/Go Green/Go Green.png",
  "carrots juice": "/menu/Carrot Juice/Carrot Juice.png",

  // Smoothies
  "mango smoothie": "/menu/Mango Smoothie/Mango Smoothie.png",
  "avocado smoothie": "/menu/avocado smoothie/avocado smoothie.png",
  "supper berries": "/menu/mixed berries smoothie/mixed berries smoothie.png",
  "mixed nuts": "/menu/nuts smoothie/nuts smoothie.png",
  "banana": "/menu/Banana Smoothie/Banana Smoothie.png",
  "cookies shake": "/menu/Cookies shake/Cookies shake.png",
};

const nameKey = (s: string) => s.trim().toLowerCase();

const sections: Section[] = sectionsSeed.map((sec) => ({
  ...sec,
  items: sec.items.map((it) => {
    const img = imageMap[nameKey(it.name)];
    return img ? { ...it, image: img } : it;
  }),
}));

// Nutrition & benefits by section
const nutritionBySection: Record<string, Nutrition> = {
  hot: {
    benefits: [
      "Natural caffeine may boost focus & performance",
      "Coffee contains polyphenol antioxidants",
      "Low calories when taken without added sugar",
    ],
    macros: [
      { label: "Calories", value: "5–180 kcal" },
      { label: "Protein", value: "0–9 g" },
      { label: "Carbs", value: "0–20 g" },
      { label: "Fat", value: "0–9 g" },
      { label: "Sugar", value: "0–18 g" },
    ],
  },
  cold: {
    benefits: [
      "Chilled coffee for refreshing energy",
      "Customizable sweetness & milk options",
      "Same antioxidants as hot coffee",
    ],
    macros: [
      { label: "Calories", value: "20–220 kcal" },
      { label: "Protein", value: "0–10 g" },
      { label: "Carbs", value: "2–28 g" },
      { label: "Fat", value: "0–10 g" },
      { label: "Sugar", value: "0–24 g" },
    ],
  },
  juices: {
    benefits: [
      "Hydration with natural fruit micronutrients",
      "Rich source of Vitamin C in many blends",
      "Refreshing, great pre/post‑workout pick‑me‑up",
    ],
    macros: [
      { label: "Calories", value: "120–180 kcal" },
      { label: "Carbs", value: "25–40 g" },
      { label: "Sugar", value: "20–36 g" },
      { label: "Fiber", value: "1–3 g" },
    ],
  },
  smoothies: {
    benefits: [
      "Fruit blends with fiber for steady energy",
      "Add‑ins can support recovery & satiety",
      "Cooling and satisfying",
    ],
    macros: [
      { label: "Calories", value: "180–350 kcal" },
      { label: "Protein", value: "3–15 g" },
      { label: "Carbs", value: "25–55 g" },
      { label: "Fat", value: "2–12 g" },
      { label: "Fiber", value: "2–6 g" },
    ],
  },
  shots: {
    benefits: [
      "Quick ginger/citrus kick",
      "Zesty boost to start the day",
      "Light and low‑calorie",
    ],
    macros: [
      { label: "Calories", value: "10–40 kcal" },
      { label: "Carbs", value: "2–8 g" },
      { label: "Sugar", value: "1–6 g" },
    ],
  },
  protein: {
    benefits: [
      "High‑quality protein supports muscle recovery",
      "Great post‑training option",
      "Custom flavors & add‑ins",
    ],
    macros: [
      { label: "Calories", value: "180–300 kcal" },
      { label: "Protein", value: "20–35 g" },
      { label: "Carbs", value: "3–18 g" },
      { label: "Fat", value: "2–8 g" },
      { label: "Sugar", value: "0–8 g" },
    ],
  },
  "beef-protein": {
    benefits: [
      "Protein with low lactose",
      "Convenient recovery drink",
      "Light & refreshing flavors",
    ],
    macros: [
      { label: "Calories", value: "160–260 kcal" },
      { label: "Protein", value: "20–30 g" },
      { label: "Carbs", value: "2–12 g" },
      { label: "Fat", value: "1–6 g" },
      { label: "Sugar", value: "0–6 g" },
    ],
  },
  signature: {
    benefits: [
      "House favorites with balanced flavors",
      "Crafted for an elevated taste",
      "Great as a treat or post‑workout",
    ],
    macros: [
      { label: "Calories", value: "160–320 kcal" },
      { label: "Protein", value: "6–20 g" },
      { label: "Carbs", value: "15–45 g" },
      { label: "Fat", value: "2–12 g" },
      { label: "Sugar", value: "8–28 g" },
    ],
  },
  snacks: {
    benefits: [
      "Protein‑forward, sugar‑conscious options",
      "Ideal with coffee or as a snack",
      "Satisfying textures",
    ],
    macros: [
      { label: "Calories", value: "150–350 kcal" },
      { label: "Protein", value: "8–20 g" },
      { label: "Carbs", value: "10–30 g" },
      { label: "Fat", value: "6–18 g" },
      { label: "Sugar", value: "1–10 g" },
    ],
  },
};

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

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (el) io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "80px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown]);
  return { ref, shown } as const;
}

function MenuCard({ item, index = 0 }: { item: Item; index?: number }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${Math.min(index * 40, 240)}ms` }}
      className={`group flex items-center gap-4 md:gap-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-4 shadow-sm hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out cursor-pointer active:scale-[0.99] ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          (e.currentTarget as HTMLDivElement).click();
        }
      }}
    >
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 md:h-28 md:w-28 rounded-xl object-cover flex-shrink-0 border border-zinc-200/60 dark:border-zinc-800/80"
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

function SectionBlock({ s, q, onSelect }: { s: Section; q: string; onSelect: (item: Item, sectionId: string) => void }) {
  const { ref: headerRef, shown: headerShown } = useReveal();
  const filtered = useMemo(() => {
    if (!q) return s.items;
    const needle = q.toLowerCase();
    return s.items.filter((i) => i.name.toLowerCase().includes(needle));
  }, [s.items, q]);

  if (!filtered.length) return null;

  return (
    <section id={s.id} className="scroll-mt-28">
      <div
        ref={headerRef}
        className={`flex items-center gap-3 mb-4 transition-all duration-500 ease-out ${
          headerShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="shrink-0 text-sky-600 dark:text-sky-400">{s.icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          {s.label}
        </h3>
        <div className="h-px flex-1 bg-gradient-to-r from-sky-500/50 to-transparent ml-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {filtered.map((item, idx) => (
          <div key={`${s.id}-${slugify(item.name)}`} data-section={s.id} onClick={() => onSelect(item, s.id)}>
            <MenuCard item={item} index={idx} />
          </div>
        ))}
      </div>
    </section>
  );
}

function DetailSheet({ item, sectionId, onClose }: { item: Item; sectionId: string; onClose: () => void }) {
  const info = nutritionBySection[sectionId];
  const isRange = typeof item.price === "object" && item.price !== null;
  const [size, setSize] = useState<"regular" | "large">("regular");

  // Choose price by size if range
  const activePrice = isRange
    ? (size === "regular" ? (item.price as any).min : (item.price as any).max)
    : (item.price as number);

  // For macro values like "180–300 kcal", pick lower for regular, upper for large
  const pickMacroForSize = (val: string) => {
    const parts = val.split(/\s*(?:–|-)\s*/);
    if (parts.length === 2) {
      const suffix = (val.match(/([a-zA-Z%]+)$/) || [""])[0];
      const low = parts[0].trim();
      const high = parts[1].replace(suffix, "").trim();
      const chosen = size === "regular" ? low : high;
      return `${chosen} ${suffix}`.trim();
    }
    return val;
  };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const slug = slugify(item.name);
  const itemNut: ItemNutrition | undefined = (nutritionByItem as any)[slug];

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-100 transition-opacity"
        onClick={onClose}
      />
      <div className="absolute inset-0 flex items-center justify-center p-2 md:p-4" onClick={onClose}>
        <div className="w-full max-w-lg bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/70 dark:border-zinc-800/70 rounded-3xl shadow-xl transition-transform" role="dialog" aria-modal="true">
          <div className="relative p-4 md:p-6" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700 text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 hover:shadow"
            >
              <X className="h-4 w-4" />
            </button>

            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 md:h-56 object-cover rounded-2xl border border-zinc-200/60 dark:border-zinc-800/70 mb-4"
              />
            )}

            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                  {item.name}
                </h3>
                {item.tag === "favorite" && (
                  <div className="mt-1 inline-flex items-center gap-1 text-sky-600 text-sm">
                    <Sparkles className="h-4 w-4" /> Favorite pick
                  </div>
                )}
              </div>
              <div className="text-zinc-900 dark:text-zinc-100 font-extrabold text-lg md:text-xl shrink-0">
                {activePrice.toFixed(2)}
                <span className="ml-1 text-xs opacity-70 font-semibold">{currency}</span>
              </div>
            </div>

            {isRange && (
              <div className="mt-3 inline-flex gap-2">
                <button
                  className={`px-3 py-1.5 rounded-full border text-sm ${
                    size === "regular"
                      ? "border-sky-500 text-sky-700 bg-sky-50"
                      : "border-zinc-300 text-zinc-700 bg-white/80"
                  }`}
                  onClick={() => setSize("regular")}
                >
                  Regular · {(item.price as any).min.toFixed(2)} {currency}
                </button>
                <button
                  className={`px-3 py-1.5 rounded-full border text-sm ${
                    size === "large"
                      ? "border-sky-500 text-sky-700 bg-sky-50"
                      : "border-zinc-300 text-zinc-700 bg-white/80"
                  }`}
                  onClick={() => setSize("large")}
                >
                  Large · {(item.price as any).max.toFixed(2)} {currency}
                </button>
              </div>
            )}

            {(itemNut || info) && (
              <div className="mt-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 font-semibold mb-2">
                  Health Benefits
                </div>
                <ul className="space-y-1.5">
                  {(itemNut?.benefits || info?.benefits || []).map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-zinc-700 dark:text-zinc-200">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-sky-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-[11px] uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400 font-semibold mt-5 mb-2">
                  Typical Macros
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {(itemNut
                    ? (itemNut.macros[size] || [])
                    : (info?.macros || []).map((m) => ({ ...m, value: pickMacroForSize(m.value) }))
                  ).map((m, i) => (
                    <div key={i} className="rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/60 px-3 py-2 text-center shadow-sm">
                      <div className="text-[10px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400">{m.label}</div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{m.value}</div>
                    </div>
                  ))}
                </div>
                {itemNut?.source && (
                  <div className="mt-3 text-[10px] text-zinc-500 dark:text-zinc-400">
                    Source: {itemNut.source}
                  </div>
                )}

                <div className="mt-4 text-[11px] text-zinc-500 dark:text-zinc-400">
                  Values are approximate and vary by flavor, size and customization.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// =============== Main =================

export default function TrainTherapyMenu() {
  const [query, setQuery] = useState("");

  // Helper: shorter labels for mobile chips
  const shortLabel = (label: string) => label.replace(/\s*\(.*?\)\s*/g, "");

  const [selected, setSelected] = useState<null | { item: Item; sectionId: string }>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_100%_-10%,rgba(0,191,255,0.12),transparent),radial-gradient(1200px_600px_at_0%_120%,rgba(0,191,255,0.10),transparent)] dark:bg-[radial-gradient(1200px_600px_at_100%_-10%,rgba(0,191,255,0.18),transparent),radial-gradient(1200px_600px_at_0%_120%,rgba(0,191,255,0.16),transparent)] bg-zinc-50 dark:bg-zinc-950">
        {/* Nav */}
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/40 border-b border-zinc-200/60 dark:border-zinc-800/70 shadow-sm">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
              <div className="flex items-center gap-2 justify-self-start">
                <img src="/logo.jpg" alt="Train Therapy" className="h-12 w-12 md:h-14 md:w-14 rounded-2xl object-cover border border-sky-500/30" />
                <nav className="hidden md:flex items-center gap-1">
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
              </div>

              <div className="justify-self-center text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Menu
              </div>

              <div className="hidden sm:block relative justify-self-end">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search the menu..."
                  className="w-56 md:w-72 rounded-xl border border-zinc-300/70 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/70 pl-10 pr-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-10 md:pt-14 pb-6">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="transition-all duration-700 ease-out opacity-100">
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
              <div className="rounded-[2rem] border border-sky-500/30 bg-gradient-to-br from-white/70 to-white/30 dark:from-zinc-900/60 dark:to-zinc-900/30 p-6 shadow-[0_20px_80px_rgba(0,191,255,0.15)] transition-all duration-700 ease-out opacity-100 translate-y-0">
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

        {/* Mobile/iPad categories above search */}
        <div className="mx-auto max-w-6xl px-4 xl:hidden mt-2">
          <div className="-mx-1 overflow-x-auto no-scrollbar">
            <div className="flex gap-2 px-1 pb-2">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleScroll(s.id)}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-300/70 bg-white/80 px-3 py-2 text-sm text-zinc-700 hover:border-sky-500/60 hover:text-sky-600 active:scale-[0.98] shadow-sm hover:shadow transition duration-300 ease-out hover:-translate-y-0.5"
                >
                  <span className="text-sky-600">{s.icon}</span>
                  {shortLabel(s.label)}
                </button>
              ))}
            </div>
          </div>
        </div>

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
            <SectionBlock key={s.id} s={s} q={query} onSelect={(item) => setSelected({ item, sectionId: s.id })} />
          ))}
        </main>

        {selected && (
          <DetailSheet item={selected.item} sectionId={selected.sectionId} onClose={() => setSelected(null)} />
        )}

        {/* Footer */}
        <footer className="border-t border-zinc-200/60 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-8">
            <div className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Train Therapy. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
