# ELEVEN Fitness Studio

Week 2 continues the original studio website with Vite, React (JavaScript) and Tailwind CSS. The existing English and Arabic copy, five weekly classes, three trainers, membership prices, local photography and dark/lime design are preserved. All content stays local; there is no backend.

## Run locally

Use Node.js 20.19+ (20.x), 22.13+ (22.x), or 24+ for Vite and ESLint.

```sh
npm install
npm run dev
npm run lint
npm run check:data
npm run build
npm run preview
```

Open `/index.html` for English or `/ar.html` for Arabic. Vite builds both HTML entries, which mount the same React app. Each entry sets its language, direction, title and description. The JavaScript entry reads the document language once and provides it through `LocaleContext`. Components read the locale with `useContext`, without passing it through intermediate components. Language links reload the other page; temporary filters and saved selections reset.

## Structure

```text
index.html, ar.html        Language-specific HTML entry shells
vite.config.js            React, Tailwind and both build inputs
eslint.config.js          JavaScript, React Hooks and Fast Refresh lint rules
src/
  main.jsx                React mount and initial locale
  App.jsx                 Header, Main and Footer composition
  index.css               Tailwind import, theme, local fonts and base rules
  context/LocaleContext.js App-wide locale context
  data/studio.js            Classes, trainers, memberships, navigation and categories
  messages/en.json          English interface messages, grouped by namespace
  messages/ar.json          Arabic interface messages, grouped by namespace
  messages/index.js         Exports the message dictionaries by locale
  i18n/useTranslations.js   Local hook for namespaced static-string lookup
  components/
    layout/                 Header, Main and Footer
    sections/               Hero, ScheduleSection, TrainersSection, MembershipSection
    cards/                  ClassCard, TrainerCard, MembershipCard
    ui/                     Brand, Icon, ArrowIcon and controlled SaveToggle
scripts/check-data.js      Node assertions; no testing libraries
public/assets/             Original local images, fonts, icons and license
```

`Main` composes `Hero`, `ScheduleSection`, `TrainersSection` and `MembershipSection` inside one semantic main element. Each section owns its markup and reads its own message namespace. Repeated content comes from arrays of objects and is rendered with `map` and stable IDs. Monday and Thursday's Strength classes have separate session IDs.

## Interactions and assessment concepts

- `ScheduleSection` owns `category` with `useState`. Selecting a filter updates that state. `filter` derives the visible classes without changing the source array or storing a second list in state.
- `ScheduleSection` also owns `savedById`, an object keyed by session ID. A functional state update copies the previous object and changes one session's value.
- `ClassCard` receives its saved value and change callback. It passes them to `SaveToggle` as `value` and `onChange`, following the controlled QuantityStepper pattern. The toggle has no internal state; it calls `onChange(!value)`.
- Saved values remain in `ScheduleSection` when filtering unmounts a class card, so returning to All restores its selection. Another class's selection stays independent.
- Both languages use the same session IDs and category values. UI messages live in English and Arabic JSON dictionaries, grouped by component namespace with shared labels in `Common`. `LocaleContext` provides the current locale. Components call the local `useTranslations(namespace)` hook to obtain `t`, then render a string with `t(key)`. RTL utilities and logical spacing preserve the Arabic layout.
- Unprefixed Tailwind classes describe the phone layout. `md:` and `lg:` adapt the existing tablet and desktop layout. Motion is enabled only with `motion-safe:`.

The local translation hook follows next-intl’s namespace and `useTranslations`/`t` naming. It supports static strings only; it does not implement interpolation, pluralization or formatting, and next-intl is not installed. Studio content arrays stay together in one JavaScript data file.

This implementation uses the instructor example to understand React patterns, while retaining this repository's own design, assets and content.

## Validation

`npm run lint` checks JavaScript and JSX, React Hooks usage and Fast Refresh exports, failing on any warnings. Browser code uses browser globals; configuration files and scripts use Node globals. Generated build output is ignored. ESLint is development tooling; no runtime or testing library was added.

`npm run check:data` checks unique IDs, trainer references, supported filter categories, image paths, original prices and complete English/Arabic content plus matching message namespaces and keys. `npm run build` produces both language entries; check them through `npm run preview` as well as the dev server.

Check both languages at **375px, 768px and 1440px**:

1. All shows five classes. Strength shows two; Conditioning, Mobility and Mixed training each show one. All restores the original order. Filter buttons expose their selected state with `aria-pressed`.
2. Save Monday's Strength class: Thursday remains unsaved. Save a second class, switch filters and return to All: both selections remain. Unsave one: the other remains saved. Reload or change language: temporary selections reset.
3. Use Tab, Enter and Space to operate links, filters, save toggles and the native mobile menu. Focus must remain visible. Trainer and membership links must reach their target anchors.
4. Check the header, hero crop/overlay, schedule, trainer cards, featured membership and footer against the original design. Images and local font weights must load. Confirm Arabic text, numerals, RTL spacing and arrow direction.
5. Confirm no horizontal scrolling, including with the menu open and enlarged text. In the browser console, run:

   ```js
   console.assert(document.documentElement.scrollWidth <= document.documentElement.clientWidth);
   ```

6. With reduced motion enabled, smooth scrolling and optional transitions should stop. Check the console for errors and missing assets.

During migration, the production build, browser assertions and screenshots were checked at each meaningful stage. Browser automation uses externally available tooling rather than adding a library to this project.

## Branches and assets

- `codex/week-1-html-css` preserves the original implementation.
- `codex/week-2-react-tailwind` contains the Week 2 migration.
- `main` is unchanged until an explicitly authorized merge.

Typography: local Thmanyah Sans. Icons: [Hugeicons Stroke Rounded](https://hugeicons.com/icons/stroke-rounded), with the upstream [MIT license](public/assets/icons/LICENSE.txt). Images: generated fictional studio photography.
