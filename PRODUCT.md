# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and hiring managers evaluating Lawand Yousef for a role. They arrive from a job search, a repo link, or a shared URL, give the site about a minute, and must come away believing he is worth an interview. Their job is judgment under time pressure: they are checking whether the evidence in front of them supports a claim, and they drop the page the moment it stops being easy to check.

No secondary audience has been confirmed. Peer traffic, students, and open-source contributors do land here, but nothing in the product is designed for them on purpose.

## Product Purpose

A four-language personal portfolio whose only job is to earn a recruiter's next step: a reply, an interview, or a repo follow. Success is a visitor who was convinced by verifiable evidence of both halves of an engineering profile and then acted, rather than one who merely finished scrolling.

## Positioning

The hardware-software bridge. The site exists to prove a claim most portfolios cannot make truthfully in both directions: he ships real digital systems (a synthesizable five-stage RV32I processor in VHDL, VHDL neighborhood image processing for FPGA, Altium PCB design, an Arduino hexapod robot) *and* production web software (Next.js, React, Laravel). Most portfolios pick one lane and let the other become a list of side interests; the differentiator is the person who is credible in both, so the site must carry both halves with equal weight and let the visitor verify each claim by opening something real.

## Operating Context

- Shipped as a pure static export (`output: "export"`) to GitHub Pages at `https://lawand02.github.io/AI`, with `basePath: "/AI"` and `trailingSlash: true`. A push to `main` builds and deploys through `.github/workflows/deploy.yml`.
- No server, no database, no CMS. Every word and number is committed: `src/config/site.ts` (identity), `projects.ts`, `skills.ts`, `achievements.ts` (work, skills, experience), `public/locales/*.json` (all copy), `posts/*.mdx` (blog).
- Contact leaves through EmailJS from the browser; the three `NEXT_PUBLIC_EMAILJS_*` values are injected from repository secrets at build time, so the form only works on a build that has them.
- Two pieces of proof are fetched live from third parties at view time: the ghchart contribution image and the github-readme-stats top-languages image, both for `github.com/Lawand02`. They can be slow, can fail, and drift from the numbers hardcoded elsewhere in the app.
- Four locales ship as equals: `en` (default), `ku` (Kurdish, Latin script), `ar` (Arabic, RTL), `de` (German). Every locale prefix is always present in the URL.
- Recruiter sessions are short, mobile and desktop, light or dark, and frequently in a language that is not English.

## Capabilities and Constraints

- Static export only. No runtime API routes, no server actions, no auth. Any feature needing a backend is impossible without leaving this architecture.
- `/AI` is hardcoded into internal links (`Navbar`, `Footer`, `BlogList`, the hero resume link), so the site cannot be moved to a domain root without editing routes across components.
- Localized routing is `/[locale]` with four always-prefixed locales; `html[dir="rtl"]` is handled globally for Arabic. The four `public/locales/*.json` files must stay in sync, and a missing key renders the raw key rather than falling back to English.
- The contact form is EmailJS-only. With the env vars absent it degrades to a blocking `alert()` instead of an inline explanation, and the footer `mailto:` is the only alternative path.
- The hero's "Download Resume" points at `/AI/resume.pdf`. A real resume exists (confirmed by the owner) but the file is **not committed to `public/` yet**, so the button 404s today.
- `siteConfig.social.linkedin` is the placeholder `#`. It is not a real link and must not be presented as one.
- Real published claims: 8 project entries with real repository URLs, technologies, and years; star and fork counts in `projects.ts` total 8 stars and 1 fork across four repos; MIT license; real email, GitHub, X, and Instagram.
- Known drift, not to be propagated: the GitHub Activity tiles hardcode `10 repos / 8 stars / 2 forks`, while `projects.ts` sums to 8 stars and 1 fork, and `achievements.ts` claims "10+ public repositories". Nothing is fetched at build time, so these numbers age silently.
- Known gap: heavy `framer-motion` entrance reveals, a looping marquee, and a typewriter caret run with no `prefers-reduced-motion` handling anywhere in the app. No accessibility target standard has been set by the owner.
- Undecided by the owner: target browser matrix, whether the GitHub proof should stay a runtime embed or become a build-time snapshot, and whether the site ever moves off GitHub Pages.

## Brand Commitments

- Identity in use: **Lawand Yousef**, wordmark **LY**. Copy is first person and plain; the About mission line about bridging the gap between hardware and software is his own stated position and must survive edits.
- Contact details are real and load-bearing: `MrRobot02@duck.com`, `github.com/Lawand02`, X `@yousef_lawand`, Instagram `@yousef_lawand02`, employer Acornassociated (`acornassociated.org`), Rojava University study link. Never substitute placeholder contact information.
- Kurdish, Arabic, and German are equal-status translations of English, not afterthoughts. Arabic must keep correct right-to-left reading direction.
- MIT licensed.
- Credentials stay truthful. No invented clients, employers, dates, outcomes, or numbers, ever.

## Evidence on Hand

- The repository itself is the primary asset: 8 project entries with real repo URLs, descriptions, technologies, years, and star/fork counts (`src/config/projects.ts`).
- Real linked repositories: Spider-Robot, RV32I-Pipelined-CPU, face-detection, School-Management-System, NeiborhoodImageProcessing, Altium-Projects, Install-Laravel-Script, and the previous portfolio Lawand-AI.
- Real imagery: `public/images/projects/spider-robot.jpg` and `school-management.png`. The other six project images are generic ~830-byte SVG placeholders, not real screenshots, and must never be presented as project imagery.
- One real blog post exists: `posts/building-riscv-cpu.mdx`. The blog index and its empty state are real code paths, not sample data.
- A real resume PDF exists (owner-confirmed) but is not yet committed to `public/`.
- Live at view time for `github.com/Lawand02`: the ghchart contribution image and the github-readme-stats top-languages image.
- Not available, and never to be fabricated: testimonials (the section renders a visible "coming soon" placeholder), third-party certifications or awards (every entry in `achievements.ts` is a self-authored milestone; the one entry typed `certification` is a self-described study specialization, not an issued credential), client names, performance benchmarks, pricing, salary, and any deployment claim beyond the GitHub Pages fact.

## Product Principles

1. **Both halves, equal weight.** The product exists to prove one claim, and it dies the moment either lane is quietly demoted to a footnote. Hardware work and web work get comparable space, comparable specificity, and comparable proof.
2. **Proof over adjectives.** A recruiter's doubt is answered with something they can open: a repository, an image, a document, a number. A claim with nothing behind it gets linked or cut.
3. **Fast to verdict.** The strongest evidence must be reachable within a first skim on a phone, in either theme and in any of the four languages. Depth is not an excuse for burying the answer.
4. **Truthfulness is a feature.** Empty stays visibly empty rather than being filled with invented social proof. The next real testimonial is worth more than a full grid of fabricated ones.
5. **Four languages, one product.** Any new surface ships complete in `en`, `ku`, `ar`, and `de`, with Arabic correct in RTL, because the Kurdish and Arabic visitors are the same person as the English one.

## Accessibility & Inclusion

No product-specific requirement has been established by the owner, so none is claimed here. Two factual notes for future work: the app ships no `prefers-reduced-motion` handling despite continuous and looping motion, and it has no skip link or documented contrast target. Treat both as open, not as accepted.