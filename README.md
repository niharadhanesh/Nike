# Stride — scroll-scrubbed hero project

A React + Vite starter for a sport/athletic brand site with two scroll effects:

1. **Scroll-scrubbed hero slides** (`src/components/Hero`) — the hero pins in
   place and crosses through four product slides (different shoes + text) as
   you scroll, via `src/hooks/useScrollSlides.js` (GSAP ScrollTrigger). Scroll
   position drives which slide is showing and how far into the crossfade to
   the next one — the same idea as scrubbing a video, but frame = slide
   instead of frame = video timestamp. Falls back to a single static slide
   under `prefers-reduced-motion`, no pin or scrub at all.
2. **Scroll-reveal sections** (`src/components/Sections`) — stats, product
   grid, and CTA fade/slide in via `src/hooks/useReveal.js`
   (IntersectionObserver, no library needed).

## Product/brand content

Copy, product names, colors, and the shoe silhouette graphic are original
placeholders (brand: `STRIDE`) — not real Nike branding, logos, or product
photography. Swap in your own:
- Slide content: `src/components/Hero/Hero.jsx` (`SLIDES` array)
- Shoe graphic: `src/components/Hero/ShoeMark.jsx` — swap for real product
  photos/renders (an `<img>` per slide works fine in place of the SVG)
- Other product listing: `src/components/Sections/ProductGrid.jsx`
- Colors/type: `src/styles/tokens.css`

## Run it

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/
    Hero/
      Hero.jsx        four scroll-scrubbed slides (shoe + name + price)
      Hero.css
      ShoeMark.jsx     original abstract shoe silhouette placeholder
    Sections/          Reveal.jsx (wrapper), Stats, ProductGrid, CTA
  hooks/
    useScrollSlides.js  pins hero + crossfades slides from scroll progress
    useReveal.js        IntersectionObserver-based fade/slide-in
  styles/
    tokens.css          color, type, spacing design tokens
```

## Adjusting the effect

- `pinDistancePerSlide` in `Hero.jsx` (passed to `useScrollSlides`) controls
  how much scroll each slide gets — raise it to slow the transitions down,
  lower it to speed them up.
- Add or remove slides by editing the `SLIDES` array — the hook adapts to
  however many slide refs it receives.
