import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div>
        <p class="kicker">Welcome</p>
        <h2>Hosted services and production-ready projects by Sharier Himu.</h2>
        <p class="copy">
          This portfolio highlights the services I host on my VPS, the projects I am actively building,
          and the engineering stack I use for reliable backend and frontend delivery.
        </p>
        <div class="cta-row">
          <a routerLink="/services">Explore Services</a>
        </div>
      </div>

      <aside class="profile-card" aria-label="GitHub profile snapshot">
        <img
          src="https://avatars.githubusercontent.com/u/94462595?v=4"
          alt="Sharier Himu GitHub profile picture"
          loading="lazy"
        />
        <h3>&#64;himusharier</h3>
      </aside>
    </section>
  `,
  styles: `
    .hero {
      display: grid;
      grid-template-columns: 1fr 220px;
      gap: 1rem;
      align-items: center;
      padding: 1rem;
      border: 1px solid var(--color-border);
      border-radius: 16px;
      background: linear-gradient(130deg, #ffffff, #fff5ec);
    }

    .kicker {
      margin: 0;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.7rem;
    }

    h2 {
      margin: 0.5rem 0;
      font: 700 clamp(1.45rem, 4vw, 2rem)/1.2 var(--font-display);
      color: var(--color-text);
    }

    .copy {
      margin: 0;
      max-width: 62ch;
      color: var(--color-muted);
      line-height: 1.5;
    }

    .cta-row {
      margin-top: 1rem;
      display: flex;
      gap: 0.65rem;
      flex-wrap: wrap;
    }

    .cta-row a {
      text-decoration: none;
      color: #fff;
      background: var(--color-accent);
      border: 1px solid transparent;
      border-radius: 10px;
      padding: 0.55rem 0.85rem;
      font-weight: 700;
      transition: transform 160ms ease;
    }

    .cta-row a:hover {
      transform: translateY(-1px);
    }

    .cta-row a.ghost {
      color: var(--color-text);
      background: #fff;
      border: 1px solid var(--color-border);
    }

    .profile-card {
      border: 1px solid var(--color-border);
      border-radius: 14px;
      padding: 0.75rem;
      background: #fff;
      text-align: center;
    }

    .profile-card img {
      width: 100%;
      border-radius: 10px;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }

    .profile-card h3 {
      margin: 0.6rem 0 0.2rem;
      color: var(--color-text);
      font-size: 1rem;
    }

    .profile-card p {
      margin: 0;
      font-size: 0.8rem;
      color: var(--color-muted);
      line-height: 1.4;
    }

    .highlights-grid {
      margin-top: 0.9rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0.8rem;
    }

    .card {
      border: 1px solid var(--color-border);
      border-radius: 12px;
      padding: 0.95rem;
      background: #fff;
    }

    .card p {
      margin: 0;
      color: var(--color-muted);
      font-size: 0.85rem;
    }

    .card h3 {
      margin: 0.4rem 0;
      font-size: 1.2rem;
      color: var(--color-text);
    }

    .card small,
    .skills h3 {
      color: var(--color-accent);
      font-weight: 600;
    }

    .skills {
      margin-top: 1rem;
      border: 1px solid var(--color-border);
      border-radius: 14px;
      padding: 0.9rem;
      background: #fff;
    }

    .skills h3 {
      margin: 0;
      font-size: 1rem;
    }

    .pill-wrap {
      margin-top: 0.75rem;
      display: flex;
      gap: 0.45rem;
      flex-wrap: wrap;
    }

    .pill-wrap span {
      border: 1px solid var(--color-border);
      background: #fef2e9;
      border-radius: 999px;
      padding: 0.35rem 0.65rem;
      font-size: 0.82rem;
      font-weight: 700;
      color: var(--color-text);
    }

    @media (max-width: 760px) {
      .hero {
        grid-template-columns: 1fr;
      }
    }
  `
})

export class DashboardPageComponent {}
