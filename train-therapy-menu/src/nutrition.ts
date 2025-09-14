// Item-level nutrition and benefits with size-specific macros.
// Keys are slugified item names (lowercase, spaces->-).

export type Macro = { label: string; value: string };
export type SizeKey = "regular" | "large";
export type ItemNutrition = {
  benefits: string[];
  macros: Record<SizeKey, Macro[]>;
  source?: string; // optional textual reference
};

export const nutritionByItem: Record<string, ItemNutrition> = {
  // =================================================================
  // Hot Drinks (Coffee Based)
  // =================================================================
  latte: {
    benefits: [
      "Milk provides calcium and protein for bone health",
      "Espresso offers a natural caffeine boost for alertness",
      "Can be customized with low-fat or non-dairy milk alternatives",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "150 kcal" },
        { label: "Protein", value: "9 g" },
        { label: "Carbs", value: "14 g" },
        { label: "Fat", value: "6 g" },
        { label: "Sugar", value: "13 g" },
      ],
      large: [
        { label: "Calories", value: "220 kcal" },
        { label: "Protein", value: "13 g" },
        { label: "Carbs", value: "21 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "19 g" },
      ],
    },
  },
  cappuccino: {
    benefits: [
      "Balanced ratio of espresso, steamed milk, and foam",
      "Lower in calories and milk than a latte",
      "Provides a strong coffee flavor with a creamy texture",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "110 kcal" },
        { label: "Protein", value: "7 g" },
        { label: "Carbs", value: "10 g" },
        { label: "Fat", value: "4 g" },
        { label: "Sugar", value: "9 g" },
      ],
      large: [
        { label: "Calories", value: "160 kcal" },
        { label: "Protein", value: "10 g" },
        { label: "Carbs", value: "14 g" },
        { label: "Fat", value: "6 g" },
        { label: "Sugar", value: "13 g" },
      ],
    },
  },
  americano: {
    benefits: [
      "Extremely low in calories, almost zero",
      "Contains antioxidants from coffee polyphenols",
      "Hydrating when consumed without added sugar or milk",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "5 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "1 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
      large: [
        { label: "Calories", value: "10 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "2 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
    },
  },
  "spanish-latte": {
    benefits: [
      "Sweetened with condensed milk for a unique, creamy flavor",
      "Provides a quick energy boost from sugar and caffeine",
      "A rich and indulgent coffee treat",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "210 kcal" },
        { label: "Protein", value: "7 g" },
        { label: "Carbs", value: "30 g" },
        { label: "Fat", value: "7 g" },
        { label: "Sugar", value: "28 g" },
      ],
      large: [
        { label: "Calories", value: "290 kcal" },
        { label: "Protein", value: "10 g" },
        { label: "Carbs", value: "42 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "40 g" },
      ],
    },
  },
  "hot-chocolate": {
    benefits: [
      "Cocoa is rich in flavonoids, which have antioxidant properties",
      "A comforting beverage that can help improve mood",
      "Milk base provides essential calcium and Vitamin D",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "190 kcal" },
        { label: "Protein", value: "7 g" },
        { label: "Carbs", value: "28 g" },
        { label: "Fat", value: "6 g" },
        { label: "Sugar", value: "26 g" },
      ],
      large: [
        { label: "Calories", value: "280 kcal" },
        { label: "Protein", value: "10 g" },
        { label: "Carbs", value: "40 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "37 g" },
      ],
    },
  },
  "single-espresso": {
    benefits: [
      "Concentrated source of caffeine for maximum alertness",
      "Contains beneficial antioxidants",
      "Virtually calorie-free",
    ],
    macros: {
      regular: [ // There is only one size for single espresso
        { label: "Calories", value: "3 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "0.5 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
      large: [ // N/A, but providing same data to prevent errors
        { label: "Calories", value: "3 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "0.5 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
    },
  },
  "double-espresso": {
    benefits: [
      "Strong, concentrated dose of caffeine for enhanced focus",
      "Rich in antioxidants that may help reduce inflammation",
      "Minimal calories and no sugar",
    ],
    macros: {
      regular: [ // There is only one size for double espresso
        { label: "Calories", value: "5 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "1 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
      large: [ // N/A, but providing same data to prevent errors
        { label: "Calories", value: "5 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "1 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
    },
  },
  cortado: {
    benefits: [
      "Perfect balance with equal parts espresso and steamed milk",
      "Strong coffee flavor with less acidity than straight espresso",
      "Lower in milk and calories than a latte or cappuccino",
    ],
    macros: {
      regular: [ // There is only one size for a cortado
        { label: "Calories", value: "35 kcal" },
        { label: "Protein", value: "2 g" },
        { label: "Carbs", value: "3 g" },
        { label: "Fat", value: "1.5 g" },
        { label: "Sugar", value: "2 g" },
      ],
      large: [ // N/A, but providing same data to prevent errors
        { label: "Calories", value: "35 kcal" },
        { label: "Protein", value: "2 g" },
        { label: "Carbs", value: "3 g" },
        { label: "Fat", value: "1.5 g" },
        { label: "Sugar", value: "2 g" },
      ],
    },
  },
  affogato: {
    benefits: [
      "A delightful combination of hot espresso and cold ice cream",
      "Acts as both a dessert and a coffee",
      "Provides energy from both caffeine and sugar",
    ],
    macros: {
      regular: [ // Typically one size
        { label: "Calories", value: "180 kcal" },
        { label: "Protein", value: "4 g" },
        { label: "Carbs", value: "20 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "18 g" },
      ],
      large: [ // N/A, but providing same data to prevent errors
        { label: "Calories", value: "180 kcal" },
        { label: "Protein", value: "4 g" },
        { label: "Carbs", value: "20 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "18 g" },
      ],
    },
  },

  // =================================================================
  // Cold Drinks (Coffee Based)
  // =================================================================
  "iced-latte": {
    benefits: [
      "A refreshing way to get a caffeine boost",
      "Milk provides calcium and protein",
      "Customizable with sugar-free syrups and various milk options",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "130 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "12 g" },
        { label: "Fat", value: "5 g" },
        { label: "Sugar", value: "11 g" },
      ],
      large: [
        { label: "Calories", value: "190 kcal" },
        { label: "Protein", value: "12 g" },
        { label: "Carbs", value: "18 g" },
        { label: "Fat", value: "7 g" },
        { label: "Sugar", value: "17 g" },
      ],
    },
  },
  "iced-americano": {
    benefits: [
      "Cooling, hydrating, and very low in calories",
      "Provides a clean caffeine kick without dairy or sugar",
      "Rich in coffee's natural antioxidants",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "5 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "1 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
      large: [
        { label: "Calories", value: "10 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "2 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "0 g" },
      ],
    },
  },
  "iced-spanish": {
    benefits: [
      "A chilled, sweet, and creamy coffee indulgence",
      "Condensed milk offers a distinct and rich sweetness",
      "Perfect for a hot day when you need an energy boost",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "200 kcal" },
        { label: "Protein", value: "6 g" },
        { label: "Carbs", value: "29 g" },
        { label: "Fat", value: "6 g" },
        { label: "Sugar", value: "27 g" },
      ],
      large: [
        { label: "Calories", value: "280 kcal" },
        { label: "Protein", value: "9 g" },
        { label: "Carbs", value: "40 g" },
        { label: "Fat", value: "8 g" },
        { label: "Sugar", value: "38 g" },
      ],
    },
  },
  "vanilla-milk-shake": {
    benefits: [
        "A classic creamy and satisfying dessert beverage",
        "Provides calcium and protein from milk and ice cream",
        "Offers a quick source of energy from carbohydrates",
    ],
    macros: {
        regular: [
            { label: "Calories", value: "350 kcal" },
            { label: "Protein", value: "9 g" },
            { label: "Carbs", value: "50 g" },
            { label: "Fat", value: "13 g" },
            { label: "Sugar", value: "48 g" },
        ],
        large: [
            { label: "Calories", value: "510 kcal" },
            { label: "Protein", value: "13 g" },
            { label: "Carbs", value: "75 g" },
            { label: "Fat", value: "19 g" },
            { label: "Sugar", value: "72 g" },
        ],
    },
  },
  "saffron-latte": {
    benefits: [
      "Saffron contains antioxidants like crocin and safranal",
      "Offers a unique, aromatic, and luxurious flavor experience",
      "May have mood-enhancing properties associated with saffron",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "180 kcal" },
        { label: "Protein", value: "9 g" },
        { label: "Carbs", value: "20 g" },
        { label: "Fat", value: "7 g" },
        { label: "Sugar", value: "18 g" },
      ],
      large: [
        { label: "Calories", value: "260 kcal" },
        { label: "Protein", value: "13 g" },
        { label: "Carbs", value: "29 g" },
        { label: "Fat", value: "10 g" },
        { label: "Sugar", value: "27 g" },
      ],
    },
  },
  "salted-caramel": {
    benefits: [
      "An irresistible blend of sweet and salty flavors",
      "Provides a comforting and indulgent treat",
      "Delivers a boost of energy from sugar and caffeine",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "280 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "40 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "38 g" },
      ],
      large: [
        { label: "Calories", value: "390 kcal" },
        { label: "Protein", value: "11 g" },
        { label: "Carbs", value: "58 g" },
        { label: "Fat", value: "13 g" },
        { label: "Sugar", value: "55 g" },
      ],
    },
  },

  // =================================================================
  // Juices
  // =================================================================
  "melon-juice": {
    benefits: [
      "Highly hydrating due to high water content",
      "Good source of Vitamin C and Vitamin A",
      "Naturally sweet and refreshing with no added sugar",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "90 kcal" },
        { label: "Protein", value: "2 g" },
        { label: "Carbs", value: "22 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "20 g" },
      ],
      large: [
        { label: "Calories", value: "130 kcal" },
        { label: "Protein", value: "3 g" },
        { label: "Carbs", value: "32 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "29 g" },
      ],
    },
  },
  mango: {
    benefits: [
      "Rich in Vitamin C, supporting the immune system",
      "Contains Vitamin A for healthy vision",
      "Provides natural energy from fruit sugars",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "150 kcal" },
        { label: "Protein", value: "1 g" },
        { label: "Carbs", value: "38 g" },
        { label: "Fat", value: "0.5 g" },
        { label: "Sugar", value: "35 g" },
      ],
      large: [
        { label: "Calories", value: "220 kcal" },
        { label: "Protein", value: "1.5 g" },
        { label: "Carbs", value: "55 g" },
        { label: "Fat", value: "1 g" },
        { label: "Sugar", value: "51 g" },
      ],
    },
  },
  "mixed-berries": {
    benefits: [
      "Packed with antioxidants from various berries",
      "High in Vitamin C and dietary fiber",
      "May support brain health and reduce inflammation",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "130 kcal" },
        { label: "Protein", value: "1 g" },
        { label: "Carbs", value: "32 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "25 g" },
      ],
      large: [
        { label: "Calories", value: "190 kcal" },
        { label: "Protein", value: "1.5 g" },
        { label: "Carbs", value: "47 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "37 g" },
      ],
    },
  },
  "vitamin-c": {
    benefits: [
      "Extremely high in Vitamin C to boost the immune system",
      "Typically made from oranges, kiwi, and lemon",
      "Provides powerful antioxidant benefits",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "140 kcal" },
        { label: "Protein", value: "2 g" },
        { label: "Carbs", value: "35 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "28 g" },
      ],
      large: [
        { label: "Calories", value: "200 kcal" },
        { label: "Protein", value: "3 g" },
        { label: "Carbs", value: "50 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "40 g" },
      ],
    },
  },
  "go-green": {
    benefits: [
      "Detoxifying blend of leafy greens like spinach and kale",
      "Rich in vitamins K, A, and C",
      "Provides minerals like iron and calcium",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "110 kcal" },
        { label: "Protein", value: "4 g" },
        { label: "Carbs", value: "24 g" },
        { label: "Fat", value: "0.5 g" },
        { label: "Sugar", value: "16 g" },
      ],
      large: [
        { label: "Calories", value: "160 kcal" },
        { label: "Protein", value: "6 g" },
        { label: "Carbs", value: "35 g" },
        { label: "Fat", value: "1 g" },
        { label: "Sugar", value: "24 g" },
      ],
    },
  },
  beetroot: {
    benefits: [
      "Contains nitrates, which may improve blood flow and lower blood pressure",
      "Good source of folate, manganese, and potassium",
      "May enhance exercise performance",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "100 kcal" },
        { label: "Protein", value: "2 g" },
        { label: "Carbs", value: "24 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "20 g" },
      ],
      large: [
        { label: "Calories", value: "150 kcal" },
        { label: "Protein", value: "3 g" },
        { label: "Carbs", value: "36 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "30 g" },
      ],
    },
  },
  "carrots-juice": {
    benefits: [
      "Excellent source of Vitamin A (from beta-carotene) for eye health",
      "Rich in antioxidants that protect cells from damage",
      "Supports a healthy immune system",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "95 kcal" },
        { label: "Protein", value: "2 g" },
        { label: "Carbs", value: "22 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "20 g" },
      ],
      large: [
        { label: "Calories", value: "140 kcal" },
        { label: "Protein", value: "3 g" },
        { label: "Carbs", value: "33 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "30 g" },
      ],
    },
  },
  
  // =================================================================
  // Smoothies
  // =================================================================
  "mango-smoothie": {
    benefits: [
      "Creamy texture and rich in immune-boosting Vitamin C",
      "Provides natural energy and dietary fiber",
      "Often includes yogurt or milk for added protein and calcium",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "250 kcal" },
        { label: "Protein", value: "6 g" },
        { label: "Carbs", value: "55 g" },
        { label: "Fat", value: "2 g" },
        { label: "Sugar", value: "48 g" },
      ],
      large: [
        { label: "Calories", value: "370 kcal" },
        { label: "Protein", value: "9 g" },
        { label: "Carbs", value: "80 g" },
        { label: "Fat", value: "3 g" },
        { label: "Sugar", value: "70 g" },
      ],
    },
  },
  "avocado-smoothie": {
    benefits: [
      "Excellent source of healthy monounsaturated fats",
      "Rich in potassium and fiber, promoting satiety",
      "Creates an incredibly smooth and creamy consistency",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "320 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "35 g" },
        { label: "Fat", value: "18 g" },
        { label: "Sugar", value: "24 g" },
      ],
      large: [
        { label: "Calories", value: "450 kcal" },
        { label: "Protein", value: "11 g" },
        { label: "Carbs", value: "50 g" },
        { label: "Fat", value: "25 g" },
        { label: "Sugar", value: "35 g" },
      ],
    },
  },
  "supper-berries": {
    benefits: [
      "Antioxidant powerhouse from a blend of diverse berries",
      "High in fiber, which aids digestion and promotes fullness",
      "Supports overall health with a wide range of vitamins",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "230 kcal" },
        { label: "Protein", value: "5 g" },
        { label: "Carbs", value: "48 g" },
        { label: "Fat", value: "2 g" },
        { label: "Sugar", value: "35 g" },
      ],
      large: [
        { label: "Calories", value: "340 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "70 g" },
        { label: "Fat", value: "3 g" },
        { label: "Sugar", value: "52 g" },
      ],
    },
  },
  "mixed-nuts": {
    benefits: [
      "Rich in healthy fats, protein, and fiber",
      "Provides sustained energy and keeps you feeling full",
      "Good source of Vitamin E and magnesium",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "420 kcal" },
        { label: "Protein", value: "15 g" },
        { label: "Carbs", value: "30 g" },
        { label: "Fat", value: "28 g" },
        { label: "Sugar", value: "18 g" },
      ],
      large: [
        { label: "Calories", value: "590 kcal" },
        { label: "Protein", value: "21 g" },
        { label: "Carbs", value: "42 g" },
        { label: "Fat", value: "40 g" },
        { label: "Sugar", value: "25 g" },
      ],
    },
  },
  banana: {
    benefits: [
      "Excellent source of potassium, important for heart health",
      "Provides quick and sustained energy from natural carbohydrates",
      "Creates a naturally sweet and creamy smoothie base",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "260 kcal" },
        { label: "Protein", value: "6 g" },
        { label: "Carbs", value: "58 g" },
        { label: "Fat", value: "1.5 g" },
        { label: "Sugar", value: "40 g" },
      ],
      large: [
        { label: "Calories", value: "380 kcal" },
        { label: "Protein", value: "9 g" },
        { label: "Carbs", value: "85 g" },
        { label: "Fat", value: "2.5 g" },
        { label: "Sugar", value: "60 g" },
      ],
    },
  },
  "cookies-shake": {
    benefits: [
      "A delicious, decadent treat for cookie lovers",
      "Satisfies sweet cravings",
      "Provides a quick burst of energy",
    ],
    macros: {
      regular: [
        { label: "Calories", value: "450 kcal" },
        { label: "Protein", value: "10 g" },
        { label: "Carbs", value: "65 g" },
        { label: "Fat", value: "18 g" },
        { label: "Sugar", value: "55 g" },
      ],
      large: [
        { label: "Calories", value: "620 kcal" },
        { label: "Protein", value: "14 g" },
        { label: "Carbs", value: "90 g" },
        { label: "Fat", value: "25 g" },
        { label: "Sugar", value: "75 g" },
      ],
    },
  },

  // =================================================================
  // Energy Shots
  // =================================================================
  "boost-shots": {
    benefits: [
      "Designed for a quick and convenient energy lift",
      "Often contains B-vitamins and caffeine",
      "Zero to low sugar options available",
    ],
    macros: {
      regular: [ // One size
        { label: "Calories", value: "15 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "3 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "1 g" },
      ],
      large: [ // N/A
        { label: "Calories", value: "15 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "3 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "1 g" },
      ],
    },
  },
  "ginger-shots": {
    benefits: [
      "Contains gingerol, which has powerful anti-inflammatory and antioxidant effects",
      "Can help with digestion and nausea",
      "Provides a natural, spicy boost to the immune system",
    ],
    macros: {
      regular: [ // One size
        { label: "Calories", value: "10 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "2 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "1 g" },
      ],
      large: [ // N/A
        { label: "Calories", value: "10 kcal" },
        { label: "Protein", value: "0 g" },
        { label: "Carbs", value: "2 g" },
        { label: "Fat", value: "0 g" },
        { label: "Sugar", value: "1 g" },
      ],
    },
  },

  // =================================================================
  // PROTEIN SHAKES (Whey/Casein Based)
  // =================================================================
  chocolate: {
    benefits: ["High-quality protein for muscle repair and growth", "Helps with satiety, keeping you full longer", "Classic flavor that satisfies cravings"],
    macros: {
      regular: [{ label: "Calories", value: "180 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "9 g" }, { label: "Fat", value: "4 g" }, { label: "Sugar", value: "6 g" }],
      large: [{ label: "Calories", value: "270 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "14 g" }, { label: "Fat", value: "6 g" }, { label: "Sugar", value: "9 g" }]
    }
  },
  vanilla: {
    benefits: ["Excellent source of protein for muscle recovery", "Versatile flavor, great for mixing with other ingredients", "Aids in meeting daily protein requirements"],
    macros: {
      regular: [{ label: "Calories", value: "170 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "8 g" }, { label: "Fat", value: "4 g" }, { label: "Sugar", value: "5 g" }],
      large: [{ label: "Calories", value: "260 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "12 g" }, { label: "Fat", value: "6 g" }, { label: "Sugar", value: "8 g" }]
    }
  },
  "choco-coco-nut": {
    benefits: ["Combines protein with healthy fats from coconut", "Great taste for a satisfying post-workout recovery", "Supports muscle growth and provides lasting energy"],
    macros: {
      regular: [{ label: "Calories", value: "220 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "10 g" }, { label: "Fat", value: "9 g" }, { label: "Sugar", value: "6 g" }],
      large: [{ label: "Calories", value: "330 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "15 g" }, { label: "Fat", value: "14 g" }, { label: "Sugar", value: "9 g" }]
    }
  },
  brownie: {
    benefits: ["Indulgent, dessert-like flavor with high protein content", "Curbs sweet cravings while supporting fitness goals", "Ideal for muscle repair after intense workouts"],
    macros: {
      regular: [{ label: "Calories", value: "190 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "12 g" }, { label: "Fat", value: "4.5 g" }, { label: "Sugar", value: "7 g" }],
      large: [{ label: "Calories", value: "285 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "18 g" }, { label: "Fat", value: "7 g" }, { label: "Sugar", value: "11 g" }]
    }
  },
  strawberry: {
    benefits: ["Refreshing fruity flavor packed with high-quality protein", "Supports lean muscle development and recovery", "Often contains antioxidants from strawberry flavoring"],
    macros: {
      regular: [{ label: "Calories", value: "170 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "9 g" }, { label: "Fat", value: "3 g" }, { label: "Sugar", value: "6 g" }],
      large: [{ label: "Calories", value: "255 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "14 g" }, { label: "Fat", value: "4.5 g" }, { label: "Sugar", value: "9 g" }]
    }
  },
  "mass-gainer": {
    benefits: ["High in calories, protein, and carbs to support weight gain", "Designed for individuals looking to build mass", "Replenishes glycogen stores and promotes muscle growth"],
    macros: {
      regular: [{ label: "Calories", value: "550 kcal" }, { label: "Protein", value: "40 g" }, { label: "Carbs", value: "80 g" }, { label: "Fat", value: "7 g" }, { label: "Sugar", value: "20 g" }],
      large: [{ label: "Calories", value: "825 kcal" }, { label: "Protein", value: "60 g" }, { label: "Carbs", value: "120 g" }, { label: "Fat", value: "10 g" }, { label: "Sugar", value: "30 g" }]
    }
  },
  "cookies-and-cream": {
    benefits: ["Delicious flavor with real cookie pieces and high protein", "A satisfying treat that aids in muscle recovery", "Helps meet protein goals in a tasty way"],
    macros: {
      regular: [{ label: "Calories", value: "200 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "14 g" }, { label: "Fat", value: "5 g" }, { label: "Sugar", value: "8 g" }],
      large: [{ label: "Calories", value: "300 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "21 g" }, { label: "Fat", value: "7.5 g" }, { label: "Sugar", value: "12 g" }]
    }
  },
  "salted-caramel-protein": { // Renamed to avoid key collision
    benefits: ["A perfect blend of sweet and salty to satisfy cravings", "High in protein for post-workout muscle support", "A delicious way to supplement your protein intake"],
    macros: {
      regular: [{ label: "Calories", value: "180 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "10 g" }, { label: "Fat", value: "4 g" }, { label: "Sugar", value: "6 g" }],
      large: [{ label: "Calories", value: "270 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "15 g" }, { label: "Fat", value: "6 g" }, { label: "Sugar", value: "9 g" }]
    }
  },
  "peanut-butter": {
    benefits: ["Rich in protein and healthy fats for sustained energy", "Promotes satiety and helps build lean muscle", "A delicious and filling option for a meal replacement"],
    macros: {
      regular: [{ label: "Calories", value: "250 kcal" }, { label: "Protein", value: "28 g" }, { label: "Carbs", value: "12 g" }, { label: "Fat", value: "10 g" }, { label: "Sugar", value: "7 g" }],
      large: [{ label: "Calories", value: "375 kcal" }, { label: "Protein", value: "42 g" }, { label: "Carbs", value: "18 g" }, { label: "Fat", value: "15 g" }, { label: "Sugar", value: "11 g" }]
    }
  },

  // =================================================================
  // BEEF PROTEIN (Clear Isolate)
  // =================================================================
  "mixed-berries-beef": {
    benefits: ["Dairy-free protein source, ideal for lactose intolerance", "Typically low in fat and carbs", "Refreshing, juice-like consistency"],
    macros: {
      regular: [{ label: "Calories", value: "110 kcal" }, { label: "Protein", value: "24 g" }, { label: "Carbs", value: "2 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "1 g" }],
      large: [{ label: "Calories", value: "165 kcal" }, { label: "Protein", value: "36 g" }, { label: "Carbs", value: "3 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "1.5 g" }]
    }
  },
  "tropical-beef": {
    benefits: ["A light and fruity dairy-free protein option", "Supports muscle growth without the heaviness of whey", "Excellent for post-workout hydration and recovery"],
    macros: {
      regular: [{ label: "Calories", value: "110 kcal" }, { label: "Protein", value: "24 g" }, { label: "Carbs", value: "2 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "1 g" }],
      large: [{ label: "Calories", value: "165 kcal" }, { label: "Protein", value: "36 g" }, { label: "Carbs", value: "3 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "1.5 g" }]
    }
  },
  "cola-beef": {
    benefits: ["Unique, refreshing cola flavor in a high-protein format", "Lactose and dairy-free for easy digestion", "Helps meet protein goals without unwanted fats or sugars"],
    macros: {
      regular: [{ label: "Calories", value: "100 kcal" }, { label: "Protein", value: "24 g" }, { label: "Carbs", value: "1 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "0 g" }],
      large: [{ label: "Calories", value: "150 kcal" }, { label: "Protein", value: "36 g" }, { label: "Carbs", value: "1.5 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "0 g" }]
    }
  },
  "cherry-beef": {
    benefits: ["A crisp and tangy way to get your protein in", "Supports lean muscle mass without dairy", "Very low in calories, carbs, and fat"],
    macros: {
      regular: [{ label: "Calories", value: "110 kcal" }, { label: "Protein", value: "24 g" }, { label: "Carbs", value: "2 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "1 g" }],
      large: [{ label: "Calories", value: "165 kcal" }, { label: "Protein", value: "36 g" }, { label: "Carbs", value: "3 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "1.5 g" }]
    }
  },

  // =================================================================
  // SIGNATURE
  // =================================================================
  "acai-protein": {
    benefits: ["Combines antioxidant-rich açaí with muscle-building protein", "Provides fiber, healthy fats, and vitamins", "A nutritionally complete and delicious smoothie"],
    macros: {
      regular: [{ label: "Calories", value: "320 kcal" }, { label: "Protein", value: "25 g" }, { label: "Carbs", value: "30 g" }, { label: "Fat", value: "11 g" }, { label: "Sugar", value: "15 g" }],
      large: [{ label: "Calories", value: "450 kcal" }, { label: "Protein", value: "38 g" }, { label: "Carbs", value: "45 g" }, { label: "Fat", value: "16 g" }, { label: "Sugar", value: "22 g" }]
    }
  },
  "zack-shake": {
    benefits: ["A balanced meal-replacement shake with protein, carbs, and fats", "Typically contains banana and peanut butter for flavor and nutrients", "Promotes satiety and sustained energy"],
    macros: {
      regular: [{ label: "Calories", value: "400 kcal" }, { label: "Protein", value: "30 g" }, { label: "Carbs", value: "35 g" }, { label: "Fat", value: "15 g" }, { label: "Sugar", value: "20 g" }],
      large: [{ label: "Calories", value: "580 kcal" }, { label: "Protein", value: "45 g" }, { label: "Carbs", value: "50 g" }, { label: "Fat", value: "22 g" }, { label: "Sugar", value: "30 g" }]
    }
  },
  "mixed-hydration": {
    benefits: ["Designed to replenish electrolytes lost during activity", "Low in calories and sugar, focused on hydration", "Contains key minerals like sodium and potassium"],
    macros: {
      regular: [{ label: "Calories", value: "30 kcal" }, { label: "Protein", value: "0 g" }, { label: "Carbs", value: "8 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "6 g" }],
      large: [{ label: "Calories", value: "45 kcal" }, { label: "Protein", value: "0 g" }, { label: "Carbs", value: "12 g" }, { label: "Fat", value: "0 g" }, { label: "Sugar", value: "9 g" }]
    }
  },
  "alfredo-cappuccino": {
    benefits: ["An extra-creamy and rich take on the classic cappuccino", "Indulgent flavor, possibly using white chocolate or cream", "A decadent, comforting coffee treat"],
    macros: {
      regular: [{ label: "Calories", value: "280 kcal" }, { label: "Protein", value: "8 g" }, { label: "Carbs", value: "32 g" }, { label: "Fat", value: "13 g" }, { label: "Sugar", value: "30 g" }],
      large: [{ label: "Calories", value: "390 kcal" }, { label: "Protein", value: "11 g" }, { label: "Carbs", value: "45 g" }, { label: "Fat", value: "18 g" }, { label: "Sugar", value: "42 g" }]
    }
  },
  "ice-cream-mix": {
    benefits: ["The ultimate dessert shake for a sweet indulgence", "Provides quick energy from carbohydrates", "Combines the joy of ice cream with a drinkable format"],
    macros: {
      regular: [{ label: "Calories", value: "480 kcal" }, { label: "Protein", value: "10 g" }, { label: "Carbs", value: "70 g" }, { label: "Fat", value: "18 g" }, { label: "Sugar", value: "65 g" }],
      large: [{ label: "Calories", value: "650 kcal" }, { label: "Protein", value: "14 g" }, { label: "Carbs", value: "95 g" }, { label: "Fat", value: "25 g" }, { label: "Sugar", value: "88 g" }]
    }
  },

  // =================================================================
  // SNACKS (Sugar Free)
  // =================================================================
  "protein-cookies": {
    benefits: ["A healthier cookie option with added protein", "Helps satisfy sweet cravings without excessive sugar", "Supports muscle maintenance and satiety"],
    macros: {
      regular: [ // Per cookie
        { label: "Calories", value: "210 kcal" },
        { label: "Protein", value: "15 g" },
        { label: "Carbs", value: "20 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "1 g" },
      ],
      large: [ // N/A
        { label: "Calories", value: "210 kcal" },
        { label: "Protein", value: "15 g" },
        { label: "Carbs", value: "20 g" },
        { label: "Fat", value: "9 g" },
        { label: "Sugar", value: "1 g" },
      ],
    },
  },
  "protein-cheese-cake": {
    benefits: ["A guilt-free version of a classic dessert", "High in protein, lower in carbs and fat than traditional cheesecake", "Creamy, satisfying, and supports fitness goals"],
    macros: {
      regular: [ // Per slice
        { label: "Calories", value: "250 kcal" },
        { label: "Protein", value: "20 g" },
        { label: "Carbs", value: "15 g" },
        { label: "Fat", value: "12 g" },
        { label: "Sugar", value: "4 g" },
      ],
      large: [ // N/A
        { label: "Calories", value: "250 kcal" },
        { label: "Protein", value: "20 g" },
        { label: "Carbs", value: "15 g" },
        { label: "Fat", value: "12 g" },
        { label: "Sugar", value: "4 g" },
      ],
    },
  },
  "chia-pudding": {
    benefits: ["Extremely high in fiber, promoting digestive health", "Rich in Omega-3 fatty acids", "Provides plant-based protein and keeps you full"],
    macros: {
      regular: [ // Per serving
        { label: "Calories", value: "220 kcal" },
        { label: "Protein", value: "6 g" },
        { label: "Carbs", value: "20 g" },
        { label: "Fat", value: "12 g" },
        { label: "Sugar", value: "1 g" },
      ],
      large: [ // N/A
        { label: "Calories", value: "220 kcal" },
        { label: "Protein", value: "6 g" },
        { label: "Carbs", value: "20 g" },
        { label: "Fat", value: "12 g" },
        { label: "Sugar", value: "1 g" },
      ],
    },
  },
  "almond-croissants": {
    benefits: ["A delicious, flaky pastry with a rich almond filling", "Provides energy from carbohydrates and fats", "A classic, indulgent bakery treat"],
    macros: {
      regular: [ // Per croissant
        { label: "Calories", value: "380 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "40 g" },
        { label: "Fat", value: "20 g" },
        { label: "Sugar", value: "15 g" },
      ],
      large: [ // N/A
        { label: "Calories", value: "380 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "40 g" },
        { label: "Fat", value: "20 g" },
        { label: "Sugar", value: "15 g" },
      ],
    },
  },
  "seeds-bar": {
    benefits: ["Packed with healthy fats, fiber, and micronutrients", "Provides long-lasting energy from seeds like pumpkin, sunflower, and flax", "A convenient and nutritious on-the-go snack"],
    macros: {
      regular: [ // Per bar
        { label: "Calories", value: "240 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "18 g" },
        { label: "Fat", value: "15 g" },
        { label: "Sugar", value: "7 g" },
      ],
      large: [ // N/A
        { label: "Calories", value: "240 kcal" },
        { label: "Protein", value: "8 g" },
        { label: "Carbs", value: "18 g" },
        { label: "Fat", value: "15 g" },
        { label: "Sugar", value: "7 g" },
      ],
    },
  },
};