import { Component } from '@angular/core';

interface HostedService {
  name: string;
  summary: string;
  stack: string;
  status: string;
  url: string;
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  template: `
    <section class="head">
      <p class="kicker">Hosted on VPS</p>
      <h2>Services</h2>
      <p class="copy">
        Each card below points to a live service currently running on my VPS setup.
      </p>
    </section>

    <section class="service-grid">
      @for (service of services; track service.url) {
        <article class="service-card">
          <div>
            <p class="status">{{ service.status }}</p>
            <h3>{{ service.name }}</h3>
            <p class="summary">{{ service.summary }}</p>
          </div>

          <div class="meta">
            <span>{{ service.stack }}</span>
            <a [href]="service.url" target="_blank" rel="noreferrer">Visit Service</a>
          </div>
        </article>
      }
    </section>
  `,
  styles: `
    .head {
      margin-bottom: 0.9rem;
    }

    .kicker {
      margin: 0;
      color: var(--color-muted);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.7rem;
    }

    h2 {
      margin: 0.2rem 0;
      font: 700 1.35rem/1.2 var(--font-display);
      color: var(--color-text);
    }

    .copy {
      margin: 0;
      color: var(--color-muted);
      max-width: 64ch;
      line-height: 1.45;
    }

    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 0.85rem;
    }

    .service-card {
      border: 1px solid var(--color-border);
      border-radius: 14px;
      padding: 0.95rem;
      background: #fff;
      display: grid;
      gap: 0.9rem;
    }

    .status {
      margin: 0;
      color: #1d6e55;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h3 {
      margin: 0.35rem 0;
      font-size: 1.1rem;
      color: var(--color-text);
    }

    .summary {
      margin: 0;
      color: var(--color-muted);
      line-height: 1.45;
    }

    .meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.55rem;
      flex-wrap: wrap;
    }

    .meta span {
      font-size: 0.82rem;
      color: var(--color-muted);
      font-weight: 700;
    }

    .meta a {
      text-decoration: none;
      border: 1px solid transparent;
      background: var(--color-accent);
      color: #fff;
      border-radius: 10px;
      padding: 0.46rem 0.72rem;
      font-size: 0.82rem;
      font-weight: 700;
      transition: transform 160ms ease;
    }

    .meta a:hover {
      transform: translateY(-1px);
    }
  `
})
export class ServicesPageComponent {
  readonly services: HostedService[] = [
    {
      name: 'Personal Portfolio',
      summary: 'Main public site with profile details, contact information, and portfolio entry points.',
      stack: 'Angular, SCSS',
      status: 'Live',
      url: 'https://himusharier.site'
    },
    {
      name: 'QuizFusion',
      summary: 'Online quiz platform with interactive gameplay and modern responsive experience.',
      stack: 'Angular, REST API',
      status: 'Live',
      url: 'https://quizfusion.himusharier.me/'
    },
    {
      name: 'Test Project',
      summary: 'Test Project.',
      stack: 'Angular, Docker',
      status: 'Test',
      url: 'https://google.com/'
    }
  ];
}
