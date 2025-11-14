# AI Report — Streaming Dashboard (Next.js 14 + TypeScript + Tailwind)

**Project:** Streaming Dashboard — Netflix-style UI  
**Author:**  Naga Revanth G  
**Repo:** https://github.com/revanth-collab/streaming-dashboard.git 
**Vercel live URL:**https://streaming-dashboard-indol.vercel.app/

---

## 1) AI tools used
- **ChatGPT (GPT-5 Thinking mini)** — used  to generate components, TypeScript interfaces, API helpers, and to debug runtime / build errors.

> Notes: The ChatGPT prompts focused on: component structure, server/client separation for Next.js App Router, Tailwind styling, accessibility considerations, and Vercel deployment steps.

---

## 2) Parts where AI was used most
I relied on AI assistance for the following items (examples of files/features):
- `components/HeroCarousel.tsx` — autoplay, slide/fade animation, preload logic, play/trailer modal integration.
- `components/MovieRow.tsx` & `components/InfiniteMovieRow.tsx` — keyboard accessibility, horizontal scrolling, and infinite load logic.
- `lib/tmdb.ts` — server-side TMDB API wrapper functions (getPopularMovies, getMovieById, searchMovies, getGenres, getMovieVideos).
- `components/TrailerModal.tsx` / `components/TrailerButton.tsx` — modal implementation for YouTube trailers.

I used AI iteratively: generating code snippets, then refining them after testing and error messages.

---

## 3) What I did NOT use AI for
- Styling (Tailwind classes) for every component — layout/spacing/visual polish.
- - `app/page.tsx` — Home composition, genre carousel placement, and infinite rows.
- - `app/movie/[id]/page.tsx` — detail layout and trailer button integration.
- Final testing and debugging with local TMDB API key.
- Committing the repository and running Vercel deploys.
- Manual UI tweaks to align to my preferred look and feel.

---

## 4) How to run locally (short)
  1. `git clone https://github.com/<your-username>/streaming-dashboard.git`  

  2. `cd streaming-dashboard`  

  3. Create `.env.local` with:
    TMDB_API_KEY=<your_api_key>
    TMDB_API_URL=https://api.themoviedb.org/3
    TMDB_IMG_BASE=https://image.tmdb.org/t/p

  4. `npm install`  

  5. `npm run dev` → http://localhost:3000


## 5) Vercel deployment & environment variables
- Deployed to Vercel (linked GitHub repo).
- Production environment variables set on Vercel:
- `TMDB_API_KEY` = <your_api_key>
- `TMDB_API_URL` = https://api.themoviedb.org/3
- `TMDB_IMG_BASE` = https://image.tmdb.org/t/p

---

## 6) Final notes & limitations
- All TMDB requests are made server-side to keep the API key secret.
---

## 7) Links
- GitHub: https://github.com/revanth-collab/streaming-dashboard.git
- Live: https://streaming-dashboard-indol.vercel.app/

