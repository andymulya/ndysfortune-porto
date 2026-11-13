# NdysFortune — Portfolio (React + Vite)

Personal portfolio of **NdysFortune** — front-end development and digital templates by Andy Eka Mulya.

## Stack

- React 19 + Vite
- Three.js 3D background (particle field + wireframe shapes, mouse parallax)
- Vanilla CSS design system (dark navy blue + gold)

## Structure

```
src/
  main.jsx            # entry
  App.jsx             # layout composition
  index.css           # design system (navy theme, responsive)
  assets/
    images.js         # screenshots + logo as data URIs (repo stays text-only)
  data/
    projects.js       # projects, skills, services
  components/
    Background3D.jsx  # Three.js canvas
    Navbar.jsx        # floating glass pill nav + hamburger + active link
    Hero.jsx
    Marquee.jsx
    Projects.jsx
    ProjectCard.jsx   # 3D tilt on hover + scroll reveal
    About.jsx         # about + skills
    Services.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx        # scroll-reveal wrapper
```

## Projects featured

| Project | Type | Live demo |
|---|---|---|
| NOVA | Crypto Presale Landing ($29) | https://crypto-presale-template.vercel.app |
| AXIOM | AI SaaS Landing ($29) | https://ai-saas-landing-rho.vercel.app |
| LUMEN | Admin Dashboard ($39) | https://admin-dashboard-one-gamma-81.vercel.app |
| VELA | E-Commerce Storefront ($39) | https://ecommerce-storefront-sigma.vercel.app |
| Alex Carter | Personal Portfolio ($19) | https://personal-portfolio-theta-nine-40.vercel.app |
| Agent Vein | Web3 deposit-mining dApp (BNB) | https://agent-miner-vein.vercel.app |

Template source lives in [andymulya/web-templates-vanilla](https://github.com/andymulya/web-templates-vanilla).

## Develop & deploy

```bash
npm install
npm run dev      # local dev
npm run build    # production build -> dist/
vercel --prod    # deploy (project "portfolio")
```

Live: https://ndysfortune-portfolio.vercel.app
