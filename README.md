# KINGS PALACE Estate

A modern real estate website for KINGS PALACE Estate — browse apartments, learn about the estate, and get in touch with the team.

## Tech Stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [React Router](https://reactrouter.com/)
- [Motion](https://motion.dev/) (animations)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/emmanueleminence1/kingspalaceestate.git
cd kingspalaceestate
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
```

The built site will be in the `dist/` folder. Preview it locally with:

```bash
npx vite preview
```

## Project Structure

```
src/
├── app/
│   ├── components/   # Layout, Navbar, Footer, UI components
│   ├── data/         # Apartment listings data
│   ├── pages/        # Home, Apartments, About, Contact
│   ├── App.tsx
│   └── routes.ts
├── assets/
├── styles/
└── main.tsx
```

## Pages

- **Home** — Hero, featured apartments, estate highlights
- **Apartments** — Browse and filter available units
- **Apartment Detail** — Individual unit information
- **About** — Estate story, mission, vision, and team
- **Contact** — Inquiry form and contact details

## License

Private project. All rights reserved.
