# Deborah Loring – Portfolio

Welcome to the source code for my professional portfolio, hosted at [deborahloring.com](https://www.deborahloring.com). This site demonstrates front-end design, responsive layout techniques, modular architecture, and accessibility best practices. It also highlights my broader skills in quality engineering, software development, and user-centered design.

---

## Features

- **Responsive layout** using Bootstrap 5 and semantic HTML5
- **Dark/light mode toggle** with OS preference detection
- **Modular HTML components** (`navbar.html`, `footer.html`) dynamically loaded
- **Active nav highlighting** for current page
- **Back-to-top button** with smooth scrolling
- **Scroll animations** powered by AOS.js
- **Accessible design** and clean source structure
- **Deployed via GitHub Pages** with a custom Squarespace-managed domain

---

## Technologies Used

| Category         | Stack / Tools                                |
|------------------|----------------------------------------------|
| Structure        | HTML5, Bootstrap 5 (via CDN)                 |
| Styling          | CSS3, Google Fonts, Font Awesome             |
| Interactivity    | Vanilla JavaScript, matchMedia, localStorage |
| Components       | HTML includes via `include.js`               |
| Enhancements     | Animate On Scroll (AOS), transition effects  |
| Hosting          | GitHub Pages + Custom Domain                 |
| Version Control  | Git & GitHub                                 |

---

## 📁 Project Structure

```text
portfolio/
├── index.html                   # Home page
├── about/
│   └── index.html               # About Me
├── projects/
│   └── index.html               # Projects Overview
├── contact/
│   └── index.html               # Contact + Social
├── privacy.html                 # Privacy Policy (optional)
├── terms.html                   # Terms of Use (optional)
├── includes/
│   ├── navbar.html              # Shared Navbar
│   └── footer.html              # Shared Footer
├── assets/
│   ├── css/
│   │   └── styles.css           # Custom styles and theming
│   └── js/
│       ├── include.js           # Load HTML partials
│       └── script.js            # Nav logic, theme toggle, scroll
└── README.md
```

---

## 🔧 Setup Instructions

To preview my portfolio locally:

1. Open terminal in project root
2. Run a simple Pytyhon web server:

```bash
python -m http.server
```
Open your browser to: http://localhost:8000/

---

## Planned Enhancements

* Tag-based filtering system on the Projects page
* Individual case study pages per project
* Contact form integration (Formspree or Netlify Forms)
* Lighthouse accessibility and performance audits
* Resume tracking (privacy-safe PDF views/downloads)

---

## Author

**Deborah Loring**

Software Developer | QA Engineer | Data Analytics Graduate Student

[deborahloring.com](https://www.deborahloring.com)

[GitHub](https://github.com/HoneyBunny3) • [LinkedIn](https://www.linkedin.com/in/deborah-loring-2b60101a6/)

---

### License

This project is open-source and available under the MIT License.