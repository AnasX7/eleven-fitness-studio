# ELEVEN Fitness Studio

A responsive fitness studio website built with semantic HTML5 and plain CSS3. Includes English and Arabic pages with fictional classes, trainers and membership plans.

## Features

- English and Arabic versions, including right-to-left layout.
- Class schedule, trainer bios and membership pricing cards.
- Dark theme and responsive navigation for phones and tablets.
- Keyboard focus styles and reduced-motion support.
- Local images, fonts and SVG icons. No JavaScript, frameworks or build tools.

## Project structure

```text
index.html          English page
ar.html             Arabic page
css/
  styles.css        Shared styles, fonts and colors
  layout.css        Header, hero and footer
  sections.css      Schedule, trainers and memberships
public/assets/
  images/           Studio and trainer photos
  fonts/            Local Thmanyah Sans fonts
  icons/            SVG icons, favicon and icon license
```

## Assets

- Typography: Thmanyah Sans, stored locally.
- Icons: [Hugeicons Stroke Rounded](https://hugeicons.com/icons/stroke-rounded), with the upstream [MIT license](public/assets/icons/LICENSE.txt).
- Images: generated fictional studio photography.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Vite builds both `index.html` (English) and `ar.html` (Arabic). React components and Tailwind styles are being migrated in working increments.
