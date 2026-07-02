# Gopika J — Portfolio Dashboard

A futuristic, node/flowchart-style developer portfolio built with **Next.js**, **Tailwind CSS** and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.js          → root layout, loads global styles
  page.js             → assembles the page (profile card + node grid + modal)
  globals.css         → fonts, background grid animation, card border animation
components/
  BackgroundGrid.jsx  → animated grid + glow orbs behind everything
  ProfileCard.jsx      → left-side sticky profile card
  NodeGrid.jsx         → arranges all section nodes + connectors
  ConnectorRow.jsx     → the animated "circuit trace" lines between rows
  SectionNode.jsx      → one clickable node/card
  DetailModal.jsx      → the modal/drawer that opens with section details
data/
  portfolioData.js     → ALL site content lives here
```

## Customizing your content

Everything you'd want to change — name, contact info, projects, skills,
education, internship, certifications — lives in **`data/portfolioData.js`**.
You don't need to touch any component to update your content.

To add a new section node:

1. Add an entry to the `sections` array in `data/portfolioData.js` with a
   unique `id`, `label`, `teaser`, `accent` color, and `layout`.
2. Add a matching icon to the `ICONS` map in `components/SectionNode.jsx`
   (icons come from [lucide-react](https://lucide.dev)).
3. Add a `case` for your new `id` in `ModalBody` inside
   `components/DetailModal.jsx` with whatever detail content you want shown.
4. Drop a `<SectionNode />` for it into `components/NodeGrid.jsx`, with a
   `<ConnectorRow />` above or below if you want it linked into the circuit.

## Accent colors

Available accent tokens (defined in `tailwind.config.js` and mirrored in the
`ACCENT_HEX` maps inside `ConnectorRow.jsx` / `SectionNode.jsx` / `DetailModal.jsx`):

`cyan`, `purple`, `green`, `pink`, `teal`, `amber`, `blue`

## Responsive behavior

- **≥1024px (lg):** profile card sticky on the left, node grid on the right,
  exactly like the reference layout.
- **641px–1023px:** profile card stacks above the node grid; node rows stay
  two columns.
- **≤640px:** everything stacks into a single column; the modal becomes a
  bottom sheet; connector lines collapse to one centered line per junction.

## Notes

- Replace `profile.resumeUrl` in `data/portfolioData.js` with a link to your
  hosted resume PDF once you have one online.
- `prefers-reduced-motion` is respected — all animations shorten to near-zero
  for users who've requested reduced motion at the OS level.
