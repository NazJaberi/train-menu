# Train Therapy — Static Menu

Mobile‑first, single‑page menu built with React + Tailwind.

## How to edit the menu

- Sections and items live in `src/App.tsx` inside the `sections` array.
- Each item supports: `name`, `price` (number or `{ min, max }`), optional `tag` and optional `image`.
- Currency is set by the `currency` constant in `src/App.tsx`.

Example item with an image:

```ts
{ name: "Latte", price: 1.5, image: "/menu/latte.jpg" }
```

## Adding images (no CMS)

- Put your images in `public/menu/` (create the folder if it doesn’t exist).
- Reference them by path in items, e.g. `image: "/menu/latte.jpg"`.
- Images are loaded statically from the site itself (no external calls).

## Logo and favicon

- The header uses `public/logo.jpg`.
- The site favicon is also set to `public/logo.jpg` in `index.html`.

## Dev scripts

- `npm run dev` — start locally
- `npm run build` — build for production
- `npm run preview` — preview production build
