# ELEVEN Fitness Studio

Week 2 continues the original studio website with Vite, React (JavaScript) and Tailwind CSS. The existing English and Arabic copy, five weekly classes, three trainers, membership prices, local photography and dark/lime design are preserved. All content stays local; there is no backend.

## Run locally

Use Node.js 20.19+ (20.x), 22.13+ (22.x), or 24+ for Vite and ESLint.

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Open `/` or `/index.html`. One HTML entry mounts the app in either language. `LocaleProvider` initializes `locale` from the `localStorage` key `locale`, accepting `en` or `ar` and defaulting to English. It provides `{ locale, setLocale }` through `LocaleContext`. The language button updates state without reloading or changing the URL, so the current filter and membership quantities remain. The preference is saved for future visits; if browser storage is unavailable, switching still works for the current visit.

## Structure

```text
index.html                Shared HTML entry with English defaults
vite.config.js            React and Tailwind plugins
eslint.config.js          JavaScript, React Hooks and Fast Refresh lint rules
src/
  main.jsx                React mount and locale provider
  App.jsx                 Header, Main and Footer composition
  index.css               Tailwind import, theme, local fonts and base rules
  context/LocaleContext.js App-wide locale context
  context/LocaleProvider.jsx Locale state, persistence and document metadata
  data/
    categories.js           Class filter options
    classes.js              Weekly class sessions
    trainers.js             Trainer profiles
    memberships.js          Membership plans, prices and features
    navigation.js           Header and footer links
  messages/en.json          English interface messages, grouped by namespace
  messages/ar.json          Arabic interface messages, grouped by namespace
  messages/index.js         Exports the message dictionaries by locale
  i18n/useTranslations.js   Local hook for scoped or root static-string lookup
  components/
    layout/                 Header, Main, Footer and MobileMenu
    sections/               Hero, ScheduleSection, TrainersSection, MembershipSection
    cards/                  ClassCard, TrainerCard, MembershipCard
    ui/                     Brand, Icon, ArrowIcon, LanguageSwitcher, ClassFilter, QuantityStepper
public/assets/             Original local images, fonts, icons and license
```

`Header` composes the brand, desktop navigation, `LanguageSwitcher` and `MobileMenu`. The mobile menu retains native `<details>` behaviour.

`Main` composes `Hero`, `ScheduleSection`, `TrainersSection` and `MembershipSection` inside one semantic main element. Each section owns its markup and reads its own message namespace. Repeated content comes from arrays of objects and is rendered with `map` and stable IDs. Monday and Thursday's Strength classes have separate session IDs.

## Interactions and assessment concepts

- `ScheduleSection` owns `category` with `useState`. It passes `value` and the named `handleCategoryChange` callback to the controlled `ClassFilter`. Each filter button passes `option.id` directly to `handleCategoryClick`, which requests a change through `onChange`. The `data-category` attribute remains available for browser checks. `filter` derives the visible classes without changing the source array or storing a second list in state.
- `MembershipSection` owns `quantities` with `useState`, keyed by membership ID. Each plan starts at one person. A functional state update copies the previous object and changes only that plan's quantity.
- `MembershipCard` receives its quantity and change callback, then passes them to the reusable `QuantityStepper` as `value` and `onChange`. The stepper has no internal state; its buttons request `value - 1` or `value + 1`. Decrease is disabled at one person.
- Each card derives its estimated monthly total as `plan.price * quantity`; the total is not stored in state. Original prices remain AED 199, 349 and 499 per person, with no discounts applied. Quantities stay independent and survive filtering and language changes; they reset on reload. This is a local cost estimate, with no booking or checkout.
- `LanguageSwitcher` reads `locale` and `setLocale` from context and calls the setter through `handleLocaleChange`. It does not create its own language state.
- `LocaleProvider` owns the language with `useState`. `useLayoutEffect` synchronizes the document language, direction, title and description before paint. `useEffect` persists the preference to `localStorage`; only the language is persisted.
- Both languages use the same session IDs and category values. UI messages live in English and Arabic JSON dictionaries, grouped by component namespace with shared labels in `Common`. `LocaleContext` provides the current locale and its setter. Consumers read `{ locale }` with `useContext`. Components call the local `useTranslations(namespace)` hook to obtain `t`, then render a string with `t(key)`. Components needing multiple namespaces call `useTranslations()` once and use qualified keys such as `t('Footer.description')` and `t('Common.brand')`. RTL utilities and logical spacing preserve the Arabic layout.
- Unprefixed Tailwind classes describe the phone layout. `md:` and `lg:` adapt the existing tablet and desktop layout. Motion is enabled only with `motion-safe:`.

The local translation hook follows next-intl’s namespace and `useTranslations`/`t` naming. It supports static strings only; it does not implement interpolation, pluralization or formatting, and next-intl is not installed. Studio content is organized into separate JavaScript files in `src/data`, each exporting a named array. Components import the arrays they need directly.

This implementation uses the instructor example to understand React patterns, while retaining this repository's own design, assets and content.

## Validation

`npm run lint` checks JavaScript and JSX, React Hooks usage and Fast Refresh exports, failing on any warnings. Browser code uses browser globals; configuration files use Node globals. Generated build output is ignored. ESLint is development tooling; no runtime or testing library was added.

`npm run build` produces a single `index.html`; check both languages through `npm run preview` as well as the dev server. Use the header language button to switch. The HTML shell has English metadata; JavaScript applies the saved locale and its metadata when the app mounts.

Check both languages at **375px, 768px and 1440px**:

1. All shows five classes. Strength shows two; Conditioning, Mobility and Mixed training each show one. All restores the original order. Filter buttons expose their selected state with `aria-pressed`.
2. Every membership starts at one person with its original price as the estimate and its decrease button disabled. Increase Regular to two: its estimate becomes AED 698; Starter and All In stay at one. Change another plan and decrease Regular: the other quantity remains unchanged. Change a class filter or switch language: quantities remain, with localized labels and numbers. Reload: quantities reset to one while the language preference remains.
3. Use Tab, Enter and Space to operate links, filters, quantity steppers and the native mobile menu. Focus must remain visible. Trainer and membership links must reach their target anchors. The language button must work with Enter and Space, preserve focus, and leave the URL unchanged.
4. Check the header, hero crop/overlay, schedule, trainer cards, featured membership and footer against the original design. Images and local font weights must load. Confirm Arabic text, numerals, RTL spacing and arrow direction.
5. Confirm no horizontal scrolling, including with the menu open and enlarged text. In the browser console, run:

   ```js
   console.assert(document.documentElement.scrollWidth <= document.documentElement.clientWidth);
   ```

6. With reduced motion enabled, smooth scrolling and optional transitions should stop. Check the console for errors and missing assets.
7. With no saved preference or an invalid `locale` value, the app starts in English. Save Arabic and reload or reopen the site: it starts in Arabic with RTL direction and translated metadata. Block storage reads and writes: switching still works without errors.

During migration, the production build, browser assertions and screenshots were checked at each meaningful stage. Browser automation uses externally available tooling rather than adding a library to this project.

## Branches and assets

- `legacy/html-css` preserves the original implementation.
- `feat/react-tailwind` contains the Week 2 migration.
- `main` contains the merged Week 2 implementation.

Typography: local Thmanyah Sans. Icons: [Hugeicons Stroke Rounded](https://hugeicons.com/icons/stroke-rounded), with the upstream [MIT license](public/assets/icons/LICENSE.txt). Images: generated fictional studio photography.
