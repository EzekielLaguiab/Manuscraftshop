# 🌿 Manu's Craft Shop

A handcrafted bracelet e-commerce website built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

🔗 **Live Site:** [manuscraftshop.github.io](https://ezekiellaguiab.github.io/Manuscraftshop/)  
📦 **Repo:** [github.com/EzekielLaguiab/Manuscraftshop](https://github.com/EzekielLaguiab/Manuscraftshop)

---

## ✨ Features

- **Product Catalog** — Browse 16+ handcrafted crystal bracelet listings with photos, names, categories, and pricing
- **Filter & Sort** — Filter by category (Single Crystal, Mixed Crystals, Necklace, Minimalist) and sort by popularity, price, or newest
- **Shopping Cart** — Add items, adjust quantities, remove items, and view a running total — all persisted with `localStorage`
- **Responsive Design** — Fully mobile-friendly layout with a hamburger navigation menu
- **Glassmorphism UI** — Modern frosted-glass aesthetic using `backdrop-filter` and layered gradients
- **Scroll Animations** — Smooth fade-in animations via `IntersectionObserver`
- **Contact Form** — Client-side form with submission feedback

---

## 🛍️ Product Categories

| Category | Description |
|---|---|
| Single Crystal | Bracelets made from one type of crystal stone |
| Mixed Crystals | Combinations of two or more crystal types |
| Necklace | Crystal necklace pieces |
| Minimalist | Clean, simple designs with a subtle look |

---

## 🗂️ Project Structure

```
Manuscraftshop/
├── index.html          # Main HTML — structure and markup
├── styles.css          # All styling, design tokens (CSS variables), responsive breakpoints
├── script.js           # Product data, cart logic, filters, animations
└── Bracelets/          # Product images and shop logo
```

---

## 🎨 Design Tokens

Key CSS variables defined in `styles.css`:

| Token | Value | Usage |
|---|---|---|
| `--primary-color` | `#88a46f` | Buttons, accents, active states |
| `--secondary-color` | `#7b5a3d` | Gradient ends, hover states |
| `--accent-color` | `#e3c49f` | Soft highlights |
| `--text-dark` | `#2f2a26` | Headings and body text |
| `--bg-light` | `#f4ecea` | Section backgrounds |

Fonts used: **Cormorant Garamond** (headings) · **Manrope** (body) — loaded via Google Fonts.

---

## 🚀 Getting Started

No build tools or installations needed. Just open the project locally:

```bash
git clone https://github.com/EzekielLaguiab/Manuscraftshop.git
cd Manuscraftshop
# Open index.html in your browser
```

Or use a local development server (e.g. VS Code Live Server extension) for the best experience.

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 968px` | Two-column hero, side-by-side contact form |
| `≤ 968px` | Stacked hero layout, 2-column product grid |
| `≤ 768px` | Mobile nav with hamburger menu |
| `≤ 480px` | Single-column cards, compact spacing |

---

## 🛒 Cart Behavior

- Cart state is saved to `localStorage` so it persists across page refreshes
- Clicking "Add to Cart" automatically opens the cart modal
- Quantity can be increased or decreased; items can be removed individually

---

## 📄 License

This project is open source under the [MIT License](./LICENSE).

---

<p align="center">Handmade Bracelets, Infinite Possibilities 🌸</p>
