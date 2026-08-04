import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './components/ContactForm';
import EditorialChrome from './components/EditorialChrome';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  getStructuredDataScript
} from '@/lib/seo/structured-data';

/** CSS custom property for stagger delays; typed so React accepts it. */
const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as React.CSSProperties;

const HEART_PATH =
  'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z';

const PROMISES = [
  {
    title: 'Written by a person',
    body: 'Every caption, email, script, and follow-up is written by someone on our team who read your brief and knows your customers. Nothing goes out on autopilot.',
  },
  {
    title: 'Filmed and edited by a person',
    body: 'Real cameras, real edits, real taste. We direct the shoot, cut the footage, and design the graphics ourselves — no generated stock, no template packs.',
  },
  {
    title: 'Strategy from a person who studies your market',
    body: 'We use AI to make sure you get found. We never use it to decide what you have to say. The thinking stays human, because that is the part your customers can feel.',
  },
];

const SERVICES = [
  {
    number: '01',
    name: 'Social Media Content & Strategy',
    desc: 'We plan, script, edit, and post short and long form content that positions you as the local expert — created by people who know how to make you sound like you.',
    items: ['Content ideas & filming guidance', 'Posting strategy & optimization', 'Instagram, Facebook, TikTok, YouTube, LinkedIn'],
  },
  {
    number: '02',
    name: 'CRM & Email Marketing',
    desc: 'We build and manage automated email and follow up campaigns that turn leads into conversations. Automated delivery, human words.',
    items: ['Database segmentation', 'Nurture & post-close campaigns', 'Referral requests & re-engagement'],
  },
  {
    number: '03',
    name: 'AI Optimization (AIO)',
    desc: 'We help your brand show up in AI driven search results like ChatGPT, Google AI, and voice search — so the machines recommend the humans behind your business.',
    items: ['AI-optimized content', 'Authority signals & structured pages', 'Future-proof visibility strategies'],
  },
  {
    number: '04',
    name: 'Brand Systems & Client Portals',
    desc: 'Our client portal gives you complete visibility and control over your marketing, so you always know which person is working on what.',
    items: ['Content approval workflows', 'Video uploads & campaign tracking', 'Centralized access to all assets'],
  },
];

const STEPS = [
  {
    number: '1',
    name: 'Discovery & Strategy',
    desc: 'We analyze your business, target audience, and goals to create a custom marketing strategy. We’ll identify exactly what you need to stand out in your local market.',
  },
  {
    number: '2',
    name: 'Setup & Launch',
    desc: 'We build your marketing engine from the ground up — content calendars, email sequences, ad campaigns, and automated systems. Everything is ready to go within 2 weeks.',
  },
  {
    number: '3',
    name: 'Optimize & Scale',
    desc: 'We continuously monitor performance, optimize campaigns, and scale what works. You get monthly reports and full visibility into every aspect of your marketing through our client portal.',
  },
];

const LOGOS = [
  { src: '/images/Fairway.webp', alt: 'Fairway Independent Mortgage Corporation' },
  { src: '/images/Compass Logo.png', alt: 'Compass' },
  { src: '/images/Keller Williams.png', alt: 'Keller Williams' },
  { src: '/images/William Raveis.png', alt: 'William Raveis' },
];

// Six frames fill the rotated 3x2 gallery; with four source images the two
// repeats sit diagonally so they never land next to each other.
const WORK = [
  { src: '/images/video-production.webp', alt: 'Video production on set for a client campaign' },
  { src: '/images/success-team.jpg', alt: 'Client team celebrating a campaign result' },
  { src: '/images/hero-business.png', alt: 'Brand and content system built for a client' },
  { src: '/images/chatgpt-phone.webp', alt: 'AI search optimization work for a client brand' },
  { src: '/images/video-production.webp', alt: 'Filming client content on location' },
  { src: '/images/success-team.jpg', alt: 'Client team reviewing campaign results' },
];

export default function Home() {
  const organizationSchema = generateOrganizationSchema({
    name: 'Own It Social',
    url: 'https://ownitsocial.com',
    logo: 'https://ownitsocial.com/OWN IT SOCIAL.png',
    sameAs: [
      'https://twitter.com/ownitsocial',
    ],
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Own It Social',
    address: {
      street: '',
      city: 'Miami',
      state: 'FL',
      postalCode: '',
      country: 'US',
    },
    priceRange: '$$',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(localBusinessSchema) }}
      />
      {/* Arms the scroll-reveal only when JS is available, before first paint. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('oi-js')`,
        }}
      />

      <div className="oi-root">
        <EditorialChrome />

        {/* ── Nav (slides in past the hero) ── */}
        <header className="nav" id="oi-nav">
          <div className="nav__inner container">
            <a className="nav__logo" href="#home">
              Own It Social <span className="nav__heart" aria-hidden="true">&hearts;</span>
            </a>
            <nav className="nav__links">
              <a href="#promise">Why Us</a>
              <a href="#services">Services</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#about">About</a>
            </nav>
            <a className="btn btn--primary" href="#contact">Book a Call &rarr;</a>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="hero" id="home" aria-label="Own It Social">
          <h1 className="hero__headline">
            <span className="reveal" style={delay(80)}>Own It</span>
            <span className="reveal" style={delay(180)}>
              Social<span className="accent">.</span>
            </span>
          </h1>

          <div className="hero__body reveal" style={delay(320)}>
            <div className="hero__heart" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d={HEART_PATH} />
              </svg>
            </div>
            <div className="hero__body-bottom">
              <p className="hero__sub">
                We build your brand, your content, and your follow-up the way you&rsquo;d want it
                done if you had more hours in the day. Every idea, every word, every frame &mdash;
                made by humans.
              </p>
              <span className="label hero__stamp">Human made marketing since day one</span>
              <a className="btn btn--primary" href="#contact">Book a Discovery Call &rarr;</a>
            </div>
          </div>
        </section>

        {/* ── Trusted by ── */}
        <section className="trusted" aria-label="Trusted by">
          <div className="trusted__inner">
            <span className="label">Trusted by teams at</span>
            <div className="trusted__logos">
              {LOGOS.map((logo) => (
                <div className="trusted__logo-item" key={logo.src}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="200px"
                    className="trusted__logo-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Made by humans ── */}
        <section className="promise" id="promise" aria-labelledby="promise-title">
          <div className="promise__inner">
            <div className="promise__header reveal">
              <span className="label">Our Promise</span>
              <h2 className="promise__title" id="promise-title">
                Made by humans<span className="accent">.</span> On purpose.
              </h2>
            </div>
            <div className="promise__grid">
              {PROMISES.map((promise, i) => (
                <div
                  key={promise.title}
                  className="promise__item reveal"
                  style={delay(100 + i * 100)}
                >
                  <h3>{promise.title}</h3>
                  <p>{promise.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="services" id="services" aria-labelledby="services-title">
          <div className="services__inner">
            <h2 className="services__title reveal" id="services-title">What we do</h2>
            <p className="services__intro reveal" style={delay(80)}>
              Everything you need to own your market, handled by one team of real people instead
              of five freelancers and a content generator.
            </p>
            {SERVICES.map((service) => (
              <article className="service reveal" key={service.number}>
                <span className="service__number" aria-hidden="true">{service.number}</span>
                <div>
                  <h3 className="service__name">{service.name}</h3>
                  <p className="service__desc">{service.desc}</p>
                  <ul className="service__list">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="process" id="how-it-works" aria-labelledby="process-title">
          <div className="process__inner">
            <div className="process__header reveal">
              <span className="label">How It Works</span>
              <h2 className="process__title" id="process-title">
                Three steps to consistent growth.
              </h2>
            </div>
            <div className="process__grid">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className="step reveal"
                  style={delay(100 + i * 100)}
                >
                  <span className="step__number" aria-hidden="true">{step.number}</span>
                  <h3 className="step__name">{step.name}</h3>
                  <p className="step__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our work ── */}
        <section className="work" aria-labelledby="work-title">
          <div className="work__header reveal">
            <h2 className="work__title" id="work-title">Our work</h2>
            <p className="work__sub">Brands, content, and campaigns made by hand.</p>
          </div>
          <div className="work__gallery" aria-hidden="true">
            {WORK.map((item, i) => (
              <div className="work-card" key={`${item.src}-${i}`}>
                <div className="work-card__img-wrap">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 767px) 40vw, 280px"
                    className="work-card__img"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Founder ── */}
        <section className="team" id="about" aria-labelledby="about-title">
          <div className="team__inner">
            <div className="team__header reveal">
              <span className="label">The Human Behind It</span>
              <h2 className="team__title" id="about-title">Meet Colin Hickmon</h2>
              <p className="team__intro">
                Founder &amp; Marketing Strategist. When you hire Own It Social, you get a person
                who answers the phone.
              </p>
            </div>

            <div className="team__grid">
              <div className="member reveal" style={delay(100)}>
                <div className="member__photo-wrap">
                  <Image
                    src="/images/colin-portrait.webp"
                    alt="Colin Hickmon, founder of Own It Social"
                    fill
                    sizes="(max-width: 900px) 90vw, 420px"
                    className="member__photo"
                  />
                  <span className="member__name">Colin<br />Hickmon</span>
                </div>
                <span className="label member__role">Founder &amp; Marketing Strategist</span>
              </div>

              <div className="member__bio reveal" style={delay(200)}>
                <p>
                  Most business owners do everything right — they build a website, post content,
                  and collect leads — but often lack a strategic direction that delivers real
                  results.
                </p>
                <p>
                  I started Own It Social because I saw how frustrating it was for business owners
                  to waste time and money on marketing that wasn&rsquo;t working. Too many
                  entrepreneurs hustle relentlessly only to feel confused when what used to work
                  suddenly stops delivering.
                </p>
                <p>
                  The marketing landscape has changed dramatically. What worked five years ago
                  doesn&rsquo;t work today. Social media algorithms shift constantly. New platforms
                  emerge. AI is transforming search. Most business owners can&rsquo;t keep up — and
                  they shouldn&rsquo;t have to.
                </p>
                <p>
                  At Own It Social, we stay ahead of every trend and platform change so you
                  don&rsquo;t have to. We provide a complete, modern marketing system that actually
                  generates leads and grows your business — not just likes and vanity metrics.
                </p>
                <p className="member__kicker">
                  I built this company around one mission: helping businesses own their local
                  markets with marketing made by people who actually care whether it works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA + contact, as one red closing block ── */}
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__bg-heart" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d={HEART_PATH} />
            </svg>
          </div>
          <div className="contact__inner">
            <div className="reveal">
              <span className="label">Get In Touch</span>
              <h2 className="contact__title" id="contact-title">
                Let&rsquo;s make something<br />worth paying attention to.
              </h2>
              <p className="contact__copy">
                Tell us about your business and we&rsquo;ll set up a free discovery call. A human
                reads every message &mdash; usually the same day.
              </p>
              <p className="contact__meta">
                Prefer email? <a href="mailto:colin@ownitsocial.com">colin@ownitsocial.com</a>
              </p>
            </div>
            <div className="contact__card reveal" style={delay(150)}>
              <ContactForm variant="editorial" />
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="footer">
          <div className="footer__inner">
            <span className="footer__logo">
              Own It Social <span className="nav__heart" aria-hidden="true">&hearts;</span>
            </span>
            <div className="footer__links">
              <a href="#promise">Why Us</a>
              <a href="#services">Services</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#about">About</a>
              <a href="#contact">Book a Call</a>
            </div>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4>Explore</h4>
              <ul>
                <li><Link href="/articles">Articles</Link></li>
                <li><Link href="/locations">Service Areas</Link></li>
                <li><Link href="/top-marketing-agencies">Top Marketing Agencies</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Specializations</h4>
              <ul>
                <li><Link href="/real-estate-marketing/miami">Real Estate Marketing</Link></li>
                <li><Link href="/loan-officer-marketing/miami">Loan Officer Marketing</Link></li>
                <li><Link href="/social-media-marketing-agency-near-me">Social Media Marketing</Link></li>
                <li><Link href="/ppc-digital-marketing-agency">PPC &amp; Paid Ads</Link></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:colin@ownitsocial.com">colin@ownitsocial.com</a></li>
                <li><a href="#contact">Book a Discovery Call</a></li>
              </ul>
            </div>
          </div>

          <p className="footer__legal">
            &copy; {new Date().getFullYear()} OwnItSocial.com &mdash; All rights reserved. Made by
            humans in Miami, FL.
          </p>
        </footer>
      </div>
    </>
  );
}
