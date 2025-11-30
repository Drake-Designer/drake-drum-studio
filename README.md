# Drake Drum Studio

A modern, video-focused landing page for my drum teaching studio in Ireland. I built this site to showcase my work as a drum instructor and to give potential students a clear, engaging way to learn about my lessons and see me play.

## 🌐 Live Demo

**Visit the website:** [https://drake-designer.github.io/Drake-Drum-Studio](https://drake-designer.github.io/Drake-Drum-Studio)

---

## 🎵 About This Project

I created Drake Drum Studio as both a real-world business site and a portfolio project. The idea was simple: build a clean, professional page that feels personal and energetic, just like drumming itself.

The site lets visitors:
- Watch real drum performance videos hosted on Cloudinary
- Learn about my teaching approach and lesson options
- Book a trial lesson through an integrated contact form
- Browse a gallery of my live performances and studio sessions
- Get quick answers to common questions about pricing and lesson structure

**Design Inspiration:**  
I wanted the site to reflect the energy of live performance. The hero section features a video grid with my actual drum covers—Deftones, Massive Attack, Airbag, Janis Joplin—to immediately show what I can do. The dark background with orange accents mimics stage lighting, and the smooth animations give it a modern, premium feel without being too flashy.

The layout is minimal and focused. No clutter. Just videos, info, and a clear path to booking a lesson.

---

## ✨ Features

### Hero Section
- **6 real performance videos** displayed in a responsive grid
- Cloudinary-hosted video playback for fast loading
- Smooth entrance animations with staggered delays
- Dynamic modal player that shows artist and song title
- Hover effects with subtle 3D transforms and glow
- Glassy content card with backdrop blur for a modern, layered look

### Video Modal Player
- Plays full videos in a centered modal
- Dynamic title pulled from `data-video-label` attributes
- Clean teardown on close (no freezing or stuck backdrops)
- Mobile-friendly with touch controls

### Responsive Design
- Mobile-first layout that adapts to all screen sizes
- Video grid stacks cleanly on smaller devices
- Optimized spacing and typography for readability on any device

### Modern UI & Animations
- Dark gradient backgrounds with radial glow effects
- Orange accent color for CTAs and highlights
- Gentle slide-in animations for video cards (no jarring rotations)
- Parallax effect on the hero gradient for subtle depth
- Reduced-motion support for accessibility (`prefers-reduced-motion: reduce`)

### Accessibility
- High contrast text on dark backgrounds
- Semantic HTML structure
- Keyboard navigation support
- Skip animations for users who prefer reduced motion

### Interactive Elements
- Photo gallery with modal lightbox
- Carousel showcasing key drumming skills
- FAQ accordion with pricing details
- Contact form with Formspree integration
- Social media links (WhatsApp, Instagram, Email)

### Clean Code & Performance
- Optimized scroll handling with `requestAnimationFrame`
- Modal cleanup to prevent UI freezing
- Lazy-loaded images and videos where possible
- Custom CSS variables for easy theming

---

## 🛠️ Technologies Used

**Frontend:**
- **HTML5** – Semantic structure and accessibility
- **CSS3** – Custom properties, gradients, animations, backdrop filters
- **JavaScript (ES6+)** – Dynamic modal handling, form validation, scroll effects

**Frameworks & Libraries:**
- **Bootstrap 5.3.2** – Responsive grid, modals, buttons, utilities
- **Bootstrap Icons** – Icon library for UI elements

**Hosting & Assets:**
- **Cloudinary** – Video hosting and delivery
- **GitHub Pages** – Static site hosting
- **Google Fonts** – Montserrat (headings) and Inter (body text)

**Development Tools:**
- **VS Code** – Code editor
- **GitHub Copilot** – AI-assisted coding and debugging
- **Git & GitHub** – Version control and deployment

---

## 🔧 How the Project Works

### Hero Video Grid
The hero section displays 6 performance videos in a responsive grid. Each card has:
- A muted video preview
- A play icon overlay
- Artist and song info that appears on hover
- A `data-video-src` attribute pointing to the Cloudinary URL
- A `data-video-label` attribute for the modal title

When you click a video card, JavaScript grabs the `data-video-src` and `data-video-label`, opens a Bootstrap modal, and plays the video. The modal title updates dynamically to show the artist and song.

### Dynamic Modal & Cleanup
The modal uses a single `<video>` element that gets its `src` set on click. When the modal closes, the script:
1. Pauses the video
2. Resets the playback position to 0
3. Removes the `src` attribute to free memory
4. Cleans up any stuck backdrops or body scroll locks

This prevents the page from freezing or getting stuck after closing a video.

### Animations & Performance
Video cards fade in with a gentle slide-up animation using `@keyframes gentleSlideIn`. The hero gradient has a parallax effect that moves slightly on scroll, throttled with `requestAnimationFrame` to avoid janky performance.

For users who enable `prefers-reduced-motion`, all animations are disabled.

### Mobile Layout
On mobile, the hero content wrapper (text and buttons) appears first, followed by the video grid. This keeps the most important info above the fold. Video cards resize to fit smaller screens without losing their aspect ratio.

---

## 🎯 Purpose of the Project

I built this site for three main reasons:

1. **Educational Learning**  
   I wanted to practice building a real-world project with clean HTML, CSS, and JavaScript. This project taught me how to handle modals, video playback, responsive design, accessibility, and performance optimization.

2. **Portfolio Piece**  
   This site showcases my web development and UI design skills. It's a complete, polished example of my ability to build something from scratch, deploy it, and make it work across devices.

3. **Real Business Use**  
   Drake Drum Studio is my actual drum teaching business. This site helps me attract students, explain my teaching approach, and provide an easy way to book lessons. It's a functional tool, not just a demo.

---

## 🚀 How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Drake-Designer/Drake-Drum-Studio.git
   cd Drake-Drum-Studio
   ```

2. **Open the project:**
   - Simply open `index.html` in your browser, or
   - Use a local server (recommended for best performance):
     ```bash
     # If you have Python installed:
     python -m http.server 8000
     
     # Or if you have Node.js and npx:
     npx serve
     ```

3. **View in browser:**
   - Navigate to `http://localhost:8000` (or the port shown in your terminal)
   - That's it! The site is fully static and requires no build process.

---

## 🔮 Future Improvements

- **More Videos** – Add more performance videos to showcase different styles and techniques
- **Lesson Booking Page** – Build a dedicated booking page with a calendar and payment integration
- **Blog Section** – Share drumming tips, practice routines, and music theory lessons
- **Student Testimonials** – Add a section with reviews and feedback from students
- **Gallery Expansion** – More photos and videos from live gigs and studio sessions
- **Performance Optimizations** – Lazy load images, optimize Cloudinary video delivery, add service worker for offline support
- **Analytics** – Track visitor behavior to improve the site and understand what content resonates most

---

## 💬 Final Thoughts

This project started as a way to learn modern web development and turned into a real tool for my drum teaching business. I'm proud of how it came together—clean design, smooth interactions, and a genuine reflection of what I do.

If you're a beginner drummer in Ireland looking for lessons, or if you just want to see some drum covers, feel free to check out the site and reach out.

Thanks for reading, and happy coding (or drumming)! 🥁

---

**Contact & Links:**
- 📧 Email: [Contact via website](https://drake-designer.github.io/Drake-Drum-Studio)
- 📷 Instagram: [Link in contact section](https://drake-designer.github.io/Drake-Drum-Studio)
- 💼 GitHub: [Drake-Designer](https://github.com/Drake-Designer)

---

*Built with HTML, CSS, JavaScript, Bootstrap, and a lot of coffee ☕*


