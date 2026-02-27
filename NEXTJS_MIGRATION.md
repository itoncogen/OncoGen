# OncoGen Next.js Migration - Documentație Completă

## 📋 Structura Proiectului

```
d:\OncoGen/
├── app/
│   ├── layout.js           # Layout global cu header și footer
│   ├── page.js             # Homepage
│   ├── globals.css         # Stiluri globale
│   ├── proiecte/           # Pagina proiecte
│   │   ├── page.js         # Listing proiecte
│   │   └── [slug]/
│   │       └── page.js     # Detalii proiect dinamic
│   ├── stiri/              # Pagina știri
│   │   ├── page.js         # Listing articole (Contentful)
│   │   └── [slug]/
│   │       └── page.js     # Detaliu articol (Contentful)
│   ├── despre/
│   │   └── page.js         # Pagina Despre
│   ├── cercetare/
│   │   └── page.js         # Domenii de cercetare
│   ├── contact/
│   │   └── page.js         # Pagina contact
│   ├── certificari/
│   │   └── page.js         # Certificări și acreditări
│   ├── hub-biotech/
│   │   └── page.js         # Hub Biotehnologii
│   └── asociatia/
│       └── page.js         # Asociația OncoGen
├── lib/
│   ├── contentful.js       # Client și funcții Contentful
│   └── projects.json       # Baza de date proiecte (JSON)
├── public/
│   └── images/             # Imagini și asset-uri statice
├── .env.local              # Variabile de mediu (NU distribui!)
├── next.config.js          # Configurație Next.js
├── package.json            # Dependențe și scripts
├── CONTENTFUL_GUIDE.md     # Ghid pentru administrarea articolelor
└── README.md               # Documentație (acest fișier)
```

## 🚀 Pornire și Développement

### 1. Instalare Dependențe

```bash
npm install
```

### 2. Configurare Variabile de Mediu

Creează fișierul `.env.local` în rădăcina proiectului:

```
CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
CONTENTFUL_ACCESS_TOKEN=YOUR_CONTENT_DELIVERY_TOKEN
```

Vezi [CONTENTFUL_GUIDE.md](./CONTENTFUL_GUIDE.md) pentru instrucțiuni detaliate.

### 3. Pornire Server Développement

```bash
npm run dev
```

Site-ul va fi disponibil la: http://localhost:3000

### 4. Build pentru Production

```bash
npm run build
npm run start
```

## 📊 Cum Funcționează Fiecare Secțiune

### Homepage (`app/page.js`)

- Afișează heroul, galeria video, proiecte featured și articole recente
- Proiectele featured sunt hardcoded, dar linkează la rute dinamice `/proiecte/[slug]`
- Articolele sunt hardcoded (în viitor pot veni din Contentful)
- Layout: responsiv cu grid CSS

### Pagina Proiecte (`app/proiecte/page.js` și `app/proiecte/[slug]/page.js`)

**Listing:**
- Citește din `lib/projects.json`
- Afișează card cu fiecare proiect
- Linc spre detaliu: `/proiecte/[slug]`

**Detaliu:**
- Ruta dinamică cu `generateStaticParams()` pentru SSG (Static Site Generation)
- Informații complet ale proiectului
- Sidebar cu domenii conexe și proiecte corelate

### Pagina Știri (`app/stiri/page.js` și `app/stiri/[slug]/page.js`)

**Listing:**
- Fetches articole din Contentful API
- Afișează carduri cu titlu, excerpt și link
- Server-side rendering cu `async` component

**Detaliu:**
- Dinamic cu Contentful slug
- `generateStaticParams()` pentru cache-ing articolelor existente
- Rich text content cu `dangerouslySetInnerHTML`

### Alte Pagini

- **Despre (`app/despre/page.js`)**: Informații centru, echipă, comitet
- **Cercetare (`app/cercetare/page.js`)**: Domenii de cercetare și laboratoare
- **Contact (`app/contact/page.js`)**: Formular contact și informații
- **Certificari (`app/certificari/page.js`)**: Certificări și acreditări
- **Hub Biotech (`app/hub-biotech/page.js`)**: Servicii și transfer tehnologie
- **Asociatia (`app/asociatia/page.js`)**: Informații asociație și donații

## 🗄️ Date și Sursele

### Proiectele

**Sursă:** `lib/projects.json`

Structură:
```json
{
  "projects": [
    {
      "slug": "mountadapt",
      "title": "MountAdapt...",
      "shortTitle": "MOUNTADAPT",
      "description": "...",
      "category": "Horizon Europa",
      "duration": "36 luni",
      "budget": "5.851.011,88 EUR",
      "coordinator": "...",
      "overview": "...",
      "role": "...",
      "objectives": [...],
      "results": [...],
      "keywords": [...],
      "relatedProjects": [...]
    }
  ]
}
```

### Articolele

**Sursă:** Contentful CMS

Contentful Content Type "article" cu câmpuri:
- `title` (text)
- `slug` (text, URL-friendly)
- `date` (date & time)
- `category` (text)
- `body` (rich text / HTML)

## 📝 Adaugare/Editare Content

### Adaugă Articol Nou

1. Mergi la https://app.contentful.com
2. Loginează-te cu credențialele
3. Selectează spațiul OncoGen
4. Click "Create entry" > "Article"
5. Completează câmpurile
6. Click "Publish"
7. Articolul va apărea pe /stiri în câteva secunde

### Editare Articol

1. Mergi la Contentful > Content
2. Selectează articolul
3. Modifică informațiile
4. Click "Publish"

### Adaugă Proiect Nou

1. Editează `lib/projects.json`
2. Adaugă un nou obiect în array-ul `projects`
3. Completează tot câmpurile
4. Salvează și restartează serverul Next.js

```javascript
{
  "slug": "new-project",
  "title": "Titlul Proiectului Nou",
  "shortTitle": "PROJECT-NAME",
  "description": "Descriere scurtă",
  "category": "Tip Finanțare",
  "duration": "24 luni",
  "budget": "€X.XXX",
  // ... alte câmpuri
}
```

## 🎨 Stiluri și CSS

Toate stilurile sunt în `app/globals.css` (copiate din `styles.css` original).

Clases CSS principale:
- `.container` - container cu lățime maximă
- `.hero-secondary` - hero section pentru pagini interioare
- `.content-section` - secțiuni de conținut cu padding
- `.btn`, `.btn-primary`, `.btn-secondary` - butoane
- `.project-card`, `.news-card`, `.team-card` - tipuri de carduri
- `.grid` - grid layout

Personalizare: Editează `app/globals.css` și variabilele CSS.

## 🔧 Variabile de Mediu

**Fișier:** `.env.local` (local development)

```
CONTENTFUL_SPACE_ID=<Your Contentful Space ID>
CONTENTFUL_ACCESS_TOKEN=<Your Contentful Delivery API Token>
```

**Pe Production (Vercel/altă platformă):**
- Adaugă variabilele în environment settings din panou

**NU distribui `.env.local`** - este deja în `.gitignore`

## 📡 API și Integrări

### Contentful

- **Client:** `lib/contentful.js`
- **Funcții:**
  - `fetchArticles()` - citeşte toate articolele
  - `fetchArticleBySlug(slug)` - citeşte articolul cu slug specific

```javascript
import { fetchArticles, fetchArticleBySlug } from '@/lib/contentful';

// În component async
const articles = await fetchArticles();
const article = await fetchArticleBySlug('slugul-articolului');
```

## ✅ Migrație Completă

### Ce s-a făcut ✅

- ✅ Structura `/app` creată cu routele principale
- ✅ CSS global mutat în `app/globals.css`
- ✅ Layout global cu header/footer în `app/layout.js`
- ✅ Homepage convertit în JSX (`app/page.js`)
- ✅ Proiecte migrate din HTML la JSON + rute dinamice
- ✅ Contentful client setat pentru articole
- ✅ Rute dinamice `/stiri/[slug]` cu Contentful
- ✅ Alte pagini (About, Research, Contact, etc.) convertite în JSX
- ✅ Imagini copiate în `public/images/`
- ✅ Documenație Contentful

### Ce Rămâne (Optional)

- ✅ Fișierele HTML vechi (index.html, stiri.html, etc.) au fost șterse după migrare
- ❓ Implementare search/filter pe pagina /stiri
- ❓ Implementare comentarii pe articole
- ❓ Cache strategy cu Incremental Static Regeneration (ISR)

## 🐛 Troubleshooting

### Articolele nu se încarcă

1. Verifică că variabilele de mediu sunt corecte în `.env.local`
2. Verifică că Access Token este din **Content Delivery API**, nu Preview
3. Check console pentru erori: `npm run dev` și Vezi terminal

### Imagini nu se afișează

1. Asigură-te că imaginile sunt în `public/images/`
2. Path-ul trebuie să fie `/images/filename.jpg`
3. Nu folosi `../images/`

### Proiect nou nu apare după editare JSON

1. Restartează serverul: Ctrl+C și `npm run dev`
2. Verifică sintaxa JSON (nu uita virgulele)
3. Check pentru erori în browser console

## 📖 Referințe

- [Next.js Documentation](https://nextjs.org/docs)
- [Contentful API Docs](https://www.contentful.com/developers/)
- [React Documentation](https://react.dev)

## 👥 Contact

Pentru probleme sau întrebări:
- Email: office@oncogen.ro
- Tel: +40 256 49 50 50

---

**Ultima actualizare:** 26.02.2026
**Status:** Production Ready ✅
