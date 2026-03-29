# 📝 Üzenőfal Alkalmazás (React + Supabase)

Ez egy egyszerű, valós idejű üzenőfal alkalmazás, amely lehetővé teszi üzenetek rögzítését, listázását és törlését. A projekt a modern webes technológiák (React, Vite, Supabase, Vercel) integrációját hivatott bemutatni.

Az AI-val történő beszélgetés linkje: https://gemini.google.com/share/e0d3fefa6b7a

## 🚀 Technológiai Stack

*   **Frontend:** [React.js](https://reactjs.org/) (TypeScript + Vite)
*   **Adatbázis & Backend:** [Supabase](https://supabase.com/) (PostgreSQL)
*   **Hosting:** [Vercel](https://vercel.com/)
*   **Stílus:** Egyedi CSS (Flexbox alapú reszponzív elrendezés)

---

## 🛠️ Telepítés és Futtatás

Kövesd az alábbi lépéseket a projekt helyi futtatásához:

### 1. Klónozás
```bash
git clone <a-te-repo-url-ed>
cd <projekt-mappa-neve>
```

### 2. Függőségek telepítése
Az alkalmazás futtatásához szükséged lesz a [Node.js](https://nodejs.org/) környezetre.
```bash
npm install
```

### 3. Környezeti változók beállítása (.env)
A projekt gyökerében hozz létre egy `.env` fájlt, és add hozzá a Supabase hozzáféréseidet:

```env
VITE_SUPABASE_URL=https://kzucrshshxeigqrbzqpa.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6dWNyc2hzaHhlaWdxcmJ6cXBhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzODQ1NzgsImV4cCI6MjA4OTk2MDU3OH0.UQkImtmTJXuBlBGsgvrslPBpo4CtjILsfZgBrAzTh4I
```

### 4. Fejlesztői szerver indítása
Indítsd el a Vite dev szervert:
```bash
npm run dev
```
Az alkalmazás alapértelmezetten a `http://localhost:5173` címen lesz elérhető.

---

## 📖 Funkciók

*   **Üzenetküldés:** Új üzenetek rögzítése az adatbázisba.
*   **Valós idejű lista:** Az üzenetek fordított időrendi sorrendben jelennek meg.
*   **Törlés:** Bejegyzések végleges eltávolítása az adatbázisból.
*   **Loading State:** Vizuális visszajelzés és védelem a duplikált küldés ellen a hálózati kérések alatt.
*   **Reszponzív dizájn:** Mobilon és asztali gépen is optimalizált megjelenés fix lábléccel.

---

## 🏗️ Build és Deployment

A projekt élesítéséhez a **Vercel** platformot használjuk.

1. A Vercel dashboardon kapcsold össze a GitHub repódat.
2. A **Settings -> Environment Variables** menüpontban add meg a `.env.local`-ban használt változókat.
3. Minden `git push` után a Vercel automatikusan újradeployolja az alkalmazást.