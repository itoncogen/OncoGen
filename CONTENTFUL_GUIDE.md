# Ghid Contentful CMS - Cum să Adaugi și Editezi Articole

## Introducere

OncoGen folosește **Contentful CMS** pentru a gestiona articolele și știrile din secțiunea "Știri și Evenimente". Aceasta înseamnă că puteți adăuga, edita sau șterge articole **fără să modificați niciun cod**, direct din interfața Contentful.

## Configurare Inițială

### 1. Crearea unui Cont Contentful

1. Mergi la https://www.contentful.com/
2. Click pe "Sign up" și creează un cont gratuit
3. După ce te înregistrezi, vei fi redirecționat către dashboard-ul Contentful

### 2. Crearea unui Space (Spațiu)

1. În dashboard, click pe "Create space"
2. Numește spațiul: `OncoGen` (sau alt nume prefer at)
3. Alege template-ul gol (Empty)
4. Click "Create"

### 3. Generarea API Keys

Acum trebuie să conectezi Contentful cu aplicația Next.js:

1. În spațiul Contentful, mergi la **Settings** > **API Keys**
2. Click pe "Add API Key"
3. Numește-o: `OncoGen Development`
4. Sub secțiunea "Content Delivery API", copiază:
   - **Space ID**
   - **Content Delivery API - access token**
5. Ți-o să le folosești în pasul următor

## Configurare in Aplicația Next.js

### 1. Adaugă Variabilele de Mediu

1. Deschide fisierul `.env.local` (sau creează-l dacă nu există) în rădăcina proiectului
2. Adaugă următoarele linii:

```
CONTENTFUL_SPACE_ID=YOUR_SPACE_ID
CONTENTFUL_ACCESS_TOKEN=YOUR_CONTENT_DELIVERY_TOKEN
```

3. Înlocuiește `YOUR_SPACE_ID` și `YOUR_CONTENT_DELIVERY_TOKEN` cu valorile copiate de mai sus
4. **NU** distribui acest fișier în public! (El este deja în .gitignore)

### 2. Testare Conexiune

Restartează serverul Next.js:

```bash
npm run dev
```

## Crearea Content Model pentru Articole

O dată ce ai contul și API keys configurate, trebuie să definiești structura articolelor:

### 1. Crearea Content Type "Article"

1. În Contentful, mergi la **Content model**
2. Click "Create content type"
3. Numește-l: `article` (let case, important pentru API)
4. Click "Create"

### 2. Adaugă Campurile Articolului

Adaugă următoarele câmpuri (cu proprietățile indicate):

| Câmp | Tip | Obligatoriu | Descriere |
|------|-----|-----------|-----------|
| title | Text (short text) | ✅ Yes | Titlul articolului |
| slug | Text (short text) | ✅ Yes | URL-friendly identifier (ex: "car-nk-innovations") |
| date | Date & time | ✅ Yes | Data publicării |
| category | Text (short text) | ✅ Yes | Categoria (ex: "Știri & Evenimente") |
| body | Text (long text, rich text editor) | ✅ Yes | Conținutul articolului (poate include HTML) |
| excerpt | Text (short text) | ❌ No | Scurt rezumat (opțional) |

**Pași detaliat i:**

1. Pentru fiecare câmp:
   - Click "Add field"
   - Alege tipul
   - Completează informațiile
   - Click "Create"

2. După ce adaugi câmpul `slug`, asigură-te că este setat ca **slug** pentru content type (în "Appearance" > "URL Slug Field")

## Adaugarea Primului Articol

### 1. Mergi la Content

1. În Contentful, click pe tab-ul **Content**
2. Click pe "Create entry"
3. Selectează "Article"

### 2. Completează Articolul

Formular exemplu:

```
Title: "COMUNICAT DE PRESĂ: OncoGen și Inovațiile în CAR-NK"

Slug: "comunicat-car-nk-2024"
(Aceasta devine parte din URL: /stiri/comunicat-car-nk-2024)

Date: 26.02.2026

Category: "Știri & Evenimente" (sau "Evenimente Științifice", "Cercetare", etc.)

Body: (Introdu textul articolului aici, poți folosi rich text editor pentru formatare)
```

### 3. Publicare

1. Click pe "Save" pentru a salva ca draft
2. Cand ești gata, click pe "Publish" pentru a face vizibil articolul
3. Asteapta câteva secunde pentru sincronizare

## Cum Să Vezi Articolele pe Site

După ce publici un articol în Contentful:

1. Mergi la [http://localhost:3000/stiri](http://localhost:3000/stiri) (pe local) sau https://oncogen.ro/stiri (pe production)
2. Articolele tale vor apărea imediat în lista
3. Click pe articol pentru a vedea pagina de detaliu

## Editarea Articolelor Existente

1. În Contentful, mergi la **Content**
2. Selectează articolul pe care vrei să-l editezi
3. Schimbă informațiile dorite
4. Click "Save" și apoi "Publish"
5. Schimbările vor fi vizibile pe site în câteva secunde

## Ștergerea Articolelor

1. În Contentful, mergi la **Content**
2. Selectează articolul
3. Click pe butonul "Unpublish" (pentru a-l ascunde de pe site)
4. Opțional: Click pe "Delete" pentru a-l șterge complet din Contentful

## Bune Practici

### 1. Slugs

- Slug-urile trebuie să fie **unice** și **lowercase**
- Folosește cratimă (-) pentru a separa cuvinte: `articol-inovativ-2024`
- Evită caractere speciale și spații

### 2. Categorii

Folosește categorii consistente pentru ușurința filtrării:
- "Știri & Evenimente"
- "Evenimente Științifice"
- "Cercetare"
- "Publicații"

### 3. Dată de Publicare

Setează data corect - aceasta va apărea pe site și va fi folosită pentru sortare

### 4. Conținut Rich Text

Poți folosi:
- **Texte îngroșate** cu `<strong>text</strong>`
- *Texte italice* cu `<em>text</em>`
- Titluri cu `<h2>Titlu</h2>`, `<h3>Subtitlu</h3>`
- Paragrafe normale

Exemplu de body:

```html
<h2>Titlul Principal</h2>
<p>Aceasta este o introducere a articolului cu informații importante.</p>

<h3>Secțiune 1</h3>
<p>Detalii despre secțiunea 1.</p>
<ul>
  <li>Punct 1</li>
  <li>Punct 2</li>
</ul>

<h3>Secțiune 2</h3>
<p>Mai mult conținut...</p>
```

## Troubleshooting

### Articolul nu apare pe site după publicare

1. Asigură-te că ai publicat (nu doar salvat)
2. Refresh pagina în browser (Ctrl+F5)
3. Verifică dacă slugul este unic
4. Dacă problema persistă, contactează suportul Contentful

### Slugul "slug" nu apare ca opțiune

1. Mergi la Content Type "Article"
2. Click pe câmpul slug
3. În secțiunea "Appearance", asigură-te că este marcat ca "URL Slug Field"

### API Keys nu funcționează

1. Verifică că ți-ai copiat corect Space ID și Access Token
2. Verifică fișierul `.env.local` pentru spații sau caractere suplimentare
3. Asigură-te că Access Token este din "Content Delivery API", nu din "Preview API"

## Suport

Pentru ajutor cu Contentful:
- Documentație: https://www.contentful.com/developers/
- Support: https://www.contentful.com/support/

Pentru ajutor cu site-ul OncoGen:
- Contact: office@oncogen.ro
- Echipa de IT: it@oncogen.ro
