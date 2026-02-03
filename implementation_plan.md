# Migration Plan: Vite/React to Next.js

## 1. Environment Setup
- [ ] Uninstall Vite and React Router dependencies (`vite`, `react-router-dom`, etc.)
- [ ] Install Next.js and Tailwind CSS dependencies (`next`, `tailwindcss`, `postcss`, `autoprefixer`)
- [ ] Initialize configuration files (`next.config.js`, `tailwind.config.ts`, `postcss.config.js`)

## 2. Directory Structure Restructuring
- [ ] Create `app/` directory for App Router
- [ ] Create `app/layout.tsx` (Root Layout with Metadata and Global Styles)
- [ ] Create `app/globals.css` (Migrate `index.css` and add Tailwind directives)
- [ ] Move images/assets to `public/` (already there, just verify)

## 3. Page Migration (Routing)
- [ ] Migrate `App.tsx` routes to `app/` directory structure:
    - [ ] Home: `app/page.tsx`
    - [ ] Leed Guide: `app/leed-guide/page.tsx`
    - [ ] Mostadam: `app/projects/mostadam/page.tsx`
    - [ ] Envision: `app/projects/envision/page.tsx`
    - [ ] WELL: `app/projects/well/page.tsx`
    - [ ] Vision 2050: `app/projects/vision-2050/page.tsx`
    - [ ] Blog List: `app/insights/page.tsx`
    - [ ] Blog Detail: `app/blog/[slug]/page.tsx` and `app/insights/[id]/page.tsx`
    - [ ] Admin: `app/admin/page.tsx`
    - [ ] Contact: `app/contact/page.tsx`
    - [ ] Login: `app/login/page.tsx`
    - [ ] 404: `app/not-found.tsx`

## 4. Component Refactoring
- [ ] Update `Navbar` and `Footer` to use `next/link`
- [ ] Ensure `next/image` is used for image optimization (optional but recommended)
- [ ] Add `"use client"` directive to interactive components
- [ ] Move `SEOHead` logic to Next.js Metadata API in `layout.tsx` or `page.tsx`

## 5. Cleanup
- [ ] Remove `index.html`, `main.tsx`/`index.tsx`, `App.tsx`, `vite.config.ts`
- [ ] Verify build and run
