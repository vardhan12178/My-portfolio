# Bala Vardhan Portfolio Redesign

## Design direction and implementation specification

Prepared for Bala Vardhan | 8 September 2026 | Version 1

This document defines a complete redesign of balavardhan.dev to present Bala as an experienced full-stack developer with strong product judgment. It covers the visual system, page structure, proposed copy, project storytelling, responsive behavior, implementation work, and launch checks. Use the numbered change IDs to discuss and implement the work in stages.

**Recommendation:** rebuild the presentation around a light neutral canvas, deep ink typography, cobalt accents, and generous product imagery. Make the role, professional experience, strongest work, and contact options immediately understandable. The design should feel precise, confident, and personal.

The existing dark editorial style is coherent, but the oversized name, faint supporting text, and long project list reduce the prominence of professional evidence. A more substantial visual change is appropriate for the modern look requested. The recommendation is a design judgment; it does not promise a particular hiring outcome.

### What the redesign should accomplish

- A visitor can identify the role, primary technologies, experience, location, and availability from the opening screen.
- The strongest projects demonstrate personal ownership, engineering decisions, and finished product quality.
- Professional experience appears before the smaller experimental tools.
- The visual system remains consistent across desktop, mobile, project pages, and social previews.
- Resume, LinkedIn, live demos, source code, and email are easy to reach.

### Scope and working rules

The scope includes the homepage, selected project case studies, navigation, footer, metadata, imagery, and necessary code cleanup. Keep the current domain and working destination links. This document proposes changes; it does not modify the website or authorize publication of new claims.

Use existing experience and features as the starting point. Confirm employment dates, project ownership, production use, metrics, and availability before publishing revised copy. Never invent usage figures, testimonials, performance improvements, or client endorsements.

### Reading order

Pages 2 to 4 explain the audit and visual system. Pages 5 to 7 specify the homepage, case studies, and professional content. Pages 8 and 9 define interaction and implementation checks. Page 10 gives the delivery sequence and content checklist.

---

## 1 Current portfolio findings

The review covered the live desktop homepage and the local page, stylesheet, layout, header, gallery, and motion implementation. These findings distinguish visible issues from changes recommended for the next version. Mobile performance and project backend behavior require separate testing during implementation.

### Changes grounded in the current site

**AUD01 Fix the selected work heading.** The heading wraps into a very narrow column and consumes much of a desktop viewport. In globals.css, the parent .section-intro-row has max-width: 18ch. Remove that constraint from the parent and give the heading its own responsive width. Use the shorter heading "Selected work" and a separate descriptive sentence.

**AUD02 Rebalance the hero.** The name is the largest message, while the role, employer history, and experience are much smaller. Present the name at a moderate size and make the professional proposition the main heading. Move availability out of the lower About section and into the opening area.

**AUD03 Curate the work.** VKart is followed by seven projects using the same row treatment. This makes the page long and postpones the employment story. Replace the list with one flagship project, two supporting projects, and a compact tools collection after experience.

**AUD04 Explain the work.** VKart currently describes features and links to code, but has no dedicated explanation of ownership, architecture, difficult decisions, or results. Add a case study that makes the engineering visible.

**AUD05 Strengthen experience copy.** HR Geckos includes substantial workflow and billing work. TCS includes dashboard and performance work. The bullets need clearer scope and evidence; replace vague phrases with specific responsibilities and verified outcomes.

**AUD06 Improve supporting text.** The current 11px hero metadata is too visually subordinate for important hiring information. Use 14 to 16px for employers, experience, dates, and location with stronger contrast.

**AUD07 Repair stylesheet structure.** A malformed declaration sequence appears around the browser preview styling in globals.css. Clean up the affected block and validate the stylesheet while rebuilding the preview component. Its complete visual impact has not been established.

### Preserve and build on

Keep direct resume access, live and source links, authentic project screenshots, a clear identity, semantic sections, keyboard focus styling, the mobile menu Escape behavior, and reduced motion support. Preserve these behaviors while changing their presentation.

---

## 2 Color and visual direction

**VIS01 Adopt a light default theme.** Use a quiet off-white background, white project surfaces, almost-black text, and one cobalt accent. Let actual application screenshots carry most of the visual variety. Reserve a dark section for the final contact area to create a clear ending.

| Token | Proposed value | Intended use |
| --- | --- | --- |
| Canvas | #F7F8FA | Main page background |
| Surface | #FFFFFF | Project cards and navigation |
| Soft surface | #EEF2F7 | Screenshot stages and subtle grouping |
| Primary text | #111827 | Headings and essential information |
| Secondary text | #4B5563 | Descriptions and metadata |
| Accent | #1D4ED8 | Primary buttons and text links |
| Accent hover | #1E40AF | Hover and pressed emphasis |
| Accent tint | #E8EEFF | Selected tab background |
| Decorative border | #D7DEE8 | Dividers and card edges |
| Control outline | #64748B | Input and control boundaries |
| Dark section | #111827 | Contact section background |
| Dark section text | #F9FAFB | Contact heading and body |

**VIS02 Use color by purpose.** Primary buttons use white text on cobalt. Secondary buttons use ink text on white with a visible outline. Links use cobalt and gain an underline on hover and keyboard focus. On the dark contact section, use a white primary button with dark text. Never use a status dot alone to communicate availability.

**VIS03 Keep surfaces restrained.** Use 16px project card radii, 20px screenshot stage radii, and 10px button radii. Give cards a light border and, where needed, a subtle shadow such as 0 12px 32px rgba(17,24,39,0.06). Avoid placing every paragraph inside a card.

**VIS04 Build a recognizable identity.** Use a simple typographic "Bala Vardhan" wordmark and an optional BV favicon. Keep icon stroke weight, arrow size, and button spacing consistent. Use one small accent detail per component rather than decorating every edge.

### Optional alternate direction

If a dark default is preferred later, use #0B1120 canvas, #151E30 surfaces, #F8FAFC text, #CBD5E1 supporting text, and #93C5FD links. Recheck all interactive states. Treat this as an alternate palette, not a second theme required for the first release. A theme toggle adds testing work without strengthening the project story.

---

## 3 Typography and layout system

**VIS05 Replace the dominant serif typography with Inter.** Use Inter for headings, body copy, navigation, and buttons. This creates a clearer product engineering identity and reuses a font already present in the project. Keep JetBrains Mono only for short technical labels when it adds meaning. Remove Instrument Serif from the default design.

| Role | Desktop | Mobile | Weight and line height |
| --- | --- | --- | --- |
| Main heading | 64 to 76px | 38 to 44px | 600 to 650 / 1.08 |
| Section heading | 36 to 44px | 28 to 32px | 600 / 1.15 |
| Project title | 24 to 28px | 22 to 24px | 600 / 1.25 |
| Hero introduction | 19 to 20px | 17 to 18px | 400 / 1.6 |
| Body copy | 16 to 18px | 16px | 400 / 1.65 |
| Navigation and labels | 14 to 16px | 14 to 16px | 500 / 1.4 |
| Secondary metadata | 14px | 14px | 400 to 500 / 1.5 |

**VIS06 Establish a responsive grid.** Use a maximum content width of 1200px. Use 48px outer gutters on large screens, 32px on tablets, and 20px on phones. For the desktop hero, divide the content into roughly 55% text and 45% imagery with a 48 to 64px gap. Allow intrinsic sizing so neither side overflows.

**VIS07 Use consistent spacing.** Base spacing on 4, 8, 12, 16, 24, 32, 48, 64, 80, and 96px. Start with 88 to 112px between desktop sections and 56 to 72px on mobile. Use 24 to 32px inside project cards. Adjust for actual content rather than forcing every section to the same height.

**VIS08 Control reading width and wrapping.** Keep paragraph lines around 55 to 70 characters. Constrain large headings at the heading element, not a small-font parent container. Avoid fixed line breaks that look good at one viewport and collapse at another. Use balanced wrapping where supported, with a readable fallback.

**VIS09 Give images room to explain the product.** Use a 16:10 stage for overview screenshots and a closer crop when demonstrating a workflow. Preserve full screenshots in case studies. Do not crop off the feature being discussed or make screenshots the only source of essential text.

### Overall composition

The hero introduces the developer, a full-width project feature establishes credibility, two supporting cards create variety, and an open experience section supplies professional depth. This intentional variation should replace a long sequence of visually identical rows.

---

## 4 Homepage structure and proposed copy

**HOME01 Simplify navigation.** Show the wordmark, Work, Experience, About, and a Resume button. Make Contact available as a clear header link if space permits. Merge Skills into About rather than keeping a separate navigation destination. Use a 72px desktop header and a compact mobile menu.

**HOME02 Rebuild the hero.** The name appears above the main proposition. Put the role in visible text and keep the first paragraph short. The following is proposed copy for review:

**Identity:** Bala Vardhan / Full-stack developer

**Heading:** I build web products from interface to backend.

**Introduction:** Full-stack developer with 4+ years of experience across product and enterprise teams. I work with React, Next.js, Node.js, and databases to turn requirements into working applications.

**Evidence line:** HR Geckos / Previously TCS

**Availability:** Open to full-time roles / Hyderabad or remote

**Actions:** View selected work / Resume / LinkedIn

Confirm the experience duration and availability before publishing. Keep essential hero content visible immediately. At a typical 1440 by 900 desktop viewport, aim to show the start of the work section without a long empty gap.

**HOME03 Use a product preview as the hero image.** Show one sharp VKart interface preview on a soft neutral stage with a discreet browser bar and the caption "VKart / Full-stack commerce application". Link it to the case study. Avoid repeating the same hero image at the top of the next section; use an admin or workflow view there.

**HOME04 Present selected work.** Use a full-width VKart feature, then two medium cards for Image Magic Pro and provisionally FitTrack. Validate FitTrack's completeness and demo reliability before final selection. Each card contains a meaningful screenshot, short summary, role, three or four relevant technologies, and clearly separated actions.

**HOME05 Show experience next.** Place HR Geckos and TCS before the smaller tools. Keep company, role, dates, and contribution bullets visible without opening an accordion.

**HOME06 Finish with tools and personal context.** Follow experience with a compact "More tools" collection, a combined About and capabilities section, and contact. Keep the existing smaller apps discoverable with descriptive links. Use a two-column tools grid on desktop and a single column on mobile.

**HOME07 Make the ending actionable.** Use "Let's talk about your team" with a visible email address, Copy email, Resume, LinkedIn, and GitHub. Keep the copyright footer small and uncluttered.

---

## 5 Project storytelling and case studies

**WORK01 Make VKart the flagship case study.** Add /projects/vkart with a short overview, role, scope, technologies, selected screenshots, engineering decisions, and lessons. Show the live app and frontend/backend source links near the top. The summary should remain useful even if the external demo is unavailable.

### Required case study structure

1. **Overview:** what the application does, who it is for, and whether it is a personal project or professional work.
2. **Contribution:** what Bala designed, implemented, integrated, or tested. Distinguish personal work from external services and collaborators.
3. **Product flow:** show two or three connected steps, such as product discovery, checkout, and order administration.
4. **Architecture:** a concise diagram of the verified frontend, API, data stores, authentication, and payment integrations. Explain one meaningful boundary or tradeoff.
5. **Engineering challenge:** describe the original constraint, the implementation decision, and how its behavior was checked.
6. **Results and learning:** verified outcomes, known limitations, and the next improvement. Include metric context and measurement method when using numbers.

**WORK02 Be precise about advanced features.** Explain what "smart search" actually does after checking its implementation. Clarify whether JWT validation means parsing, claim checks, or signature verification. Explain authentication and payment behavior accurately. Do not use "secure", "scalable", or "production-ready" as unsupported badges.

**WORK03 Improve the supporting projects.** For Image Magic Pro, explain the batch editing workflow, supported operations, and browser processing approach after verification. For FitTrack, explain data ownership, persistence, and the main tracking workflow. If that evidence is weak, promote the strongest completed tool instead.

**WORK04 Curate visual evidence.** Capture current interfaces at consistent sizes. Show an overview plus a focused feature crop. Add short captions that identify the engineering or workflow point. Use safe demo data and screenshots suitable for public viewing. Avoid decorative device mockups that shrink the useful interface.

**WORK05 Improve the gallery.** Keep descriptive tabs such as Storefront, Product management, and Inventory. Make the selected state visible and keyboard accessible. On mobile, use horizontally scrollable text tabs or stacked figures rather than tiny screenshot thumbnails. Do not autoplay screenshots.

**WORK06 Standardize actions and repositories.** Use "Case study", "Live demo", and "Source code" consistently. Give each repository a useful README with setup instructions, architecture, features, screenshots, and limitations. The portfolio repository currently has the default Next.js README and should receive its own project documentation.

---

## 6 Professional experience and personal content

**COPY01 Make experience easy to scan.** Use two clear employer blocks. Each contains company, role, month and year dates, a short scope sentence, and up to three strong bullets. Add technologies only when they are confirmed for that role. Avoid skill percentage bars or years attributed to a tool without evidence.

### Proposed HR Geckos copy

Full-stack developer / Oct 2024 to Present

- Built an employee handbook application used by multiple organizations, spanning database work and a responsive interface.
- Implemented policy review and approval workflows with user roles, PDF handling, and employee acknowledgement tracking.
- Integrated Stripe subscriptions, invoices, refunds, and payment updates.

These statements reorganize the current portfolio content. Strengthen them with verified scope: the part owned independently, the organizations or users served if publishable, and a concrete operational result. Avoid exposing internal client details.

### Proposed TCS copy

Full-stack developer / Dec 2021 to Jun 2024

- Built reusable React interfaces and business dashboards.
- Integrated REST APIs using Redux and React hooks to manage application data.
- Applied lazy loading, bundle reduction, and caching to improve page performance.

If performance measurements exist, add the before and after values, what was measured, and the relevant environment. If no reliable measurement exists, retain the specific implementation description without inventing a percentage.

**COPY02 Combine About and capabilities.** Write a short paragraph about working style and one paragraph about the role sought. Group skills under Frontend, Backend and data, and Delivery and integrations. Connect each group to a relevant project or experience example. Keep all listed capabilities consistent with the resume.

**Proposed About text:** I work across the interface, API, and database, breaking requirements into manageable steps and carrying features through implementation. My recent work includes employee workflows, billing integrations, and personal web products. I'm interested in full-time roles in Hyderabad or remote teams.

**COPY03 Add personal detail only when authentic.** A short statement about the kinds of problems Bala enjoys can distinguish the site. A professional portrait is optional and should use a real approved photo. Do not block the redesign on obtaining one.

**COPY04 Align every hiring surface.** Use consistent name, role, dates, technologies, and project descriptions across the portfolio, resume, LinkedIn, and GitHub. Add testimonials or employer logos only when authentic and appropriate to publish. No invented ratings or endorsement graphics.

---

## 7 Interaction and responsive behavior

**UX01 Keep navigation predictable.** Use a sticky header with a subtle background and border after scrolling. Preserve section anchor links and account for the header height. Make active navigation distinguishable by more than color. Retain menu focus management, Escape to close, focus restoration, and background isolation while the mobile menu is open.

**UX02 Use restrained motion.** Keep hover transitions around 150 to 220ms and optional reveals around 300 to 450ms with no more than 12 to 16px travel. Remove large masked text entrances, clip-path reveals, and cumulative project delays. Avoid parallax, custom cursors, loading intros, and continuous decorative animations.

**UX03 Prefer native scrolling.** Remove the global Lenis scroll behavior for the proposed first version. Use native anchors, optionally with reduced-motion-aware CSS smooth scrolling. Content should remain readable without waiting for JavaScript or animation initialization. Choose a single lightweight motion approach after checking actual needs.

**UX04 Define interaction states.** Every button and link needs default, hover, focus, and pressed states. Copy email should announce "Email copied" through an accessible status message. If clipboard access fails, keep the selectable address and mail link available. Card navigation and secondary links must not be nested inside each other.

| Viewport | Expected layout |
| --- | --- |
| 1024px and wider | Two-column hero; full-width flagship; two supporting cards |
| 768 to 1023px | Stack hero when needed; preserve readable screenshot size |
| 320 to 767px | Single column; stacked projects and experience; wrapped actions |

**UX05 Design for real mobile reading.** Put hero copy and actions before imagery. Keep body text at 16px or above, avoid fixed card heights, and allow long project names and emails to wrap. Use a project target of at least 44 by 44px for touch controls. Do not rely on hover to expose descriptions or actions.

**UX06 Verify accessibility.** Use one main heading, logical heading levels, descriptive links, semantic landmarks, meaningful alt text, and visible keyboard focus. Verify contrast at 4.5:1 for ordinary text and 3:1 for qualifying large text. Check relevant control and focus contrast separately. Respect reduced motion and test text enlargement and reflow. Reference: W3C WCAG 2.2 [1].

### Interaction acceptance

All content and actions remain usable at 320px width, with keyboard-only navigation, and with reduced motion enabled. Menus, tabs, copy feedback, and external links must work without trapping the visitor or hiding the primary content.

---

## 8 Implementation and quality checks

**ENG01 Keep the existing Next.js foundation.** A visual redesign does not require a framework migration or a new backend. Keep content server rendered where possible and add client behavior only for interactive controls. Separate project data from presentation so summaries, case studies, and metadata remain consistent.

| Existing location | Proposed implementation work |
| --- | --- |
| src/app/page.tsx | Reorder sections; revise hero; curate project cards |
| src/app/globals.css | Replace tokens; rebuild type and grid; repair malformed CSS |
| src/app/layout.tsx | Simplify fonts; refresh metadata, theme color, and footer |
| components/Header.tsx | Simplify navigation and retain accessible mobile behavior |
| components/HomeMotion.tsx | Remove heavy reveals or replace with limited transitions |
| components/SmoothScroll.tsx | Remove Lenis wrapper for native scrolling |
| components/VKartGallery.tsx | Improve screenshot labels and responsive gallery controls |
| public/img and public/og assets | Refresh screenshots and social sharing artwork |

Component paths in this table are relative to src/app. Add src/app/projects/[slug]/page.tsx or equivalent dedicated project routes, plus a shared project content source. Audit imports before removing unused motion, theme, icon, or other dependencies; package presence alone does not prove a dependency is unused.

**ENG02 Optimize actual delivery.** Use responsive images with correct sizes and dimensions, prioritize only the actual hero image, and lazy-load lower content. Limit font weights and avoid unnecessary scripts. Test mobile loading and interactions on a production build. Aim for LCP at or below 2.5s, INP at or below 200ms, and CLS at or below 0.1 at the 75th percentile when field data is available [2]. These are targets, not current measured results.

**ENG03 Refresh discovery surfaces.** Update title, description, social preview, favicon, and structured data to match the new identity. Keep structured claims accurate. Add appropriate canonical URLs, sitemap, and robots configuration after checking what exists. Preserve old useful anchors or provide a migration path.

**ENG04 Validate the complete visitor journey.** Run lint and build checks. Verify homepage to case study to live/source links, resume download/open, LinkedIn, email, mobile menu, screenshot tabs, direct project URLs, refresh behavior, and 404 handling. Check 320, 390, 768, 1024, and 1440px widths. Recheck at zoom and with reduced motion. Record any external demo failures before launch.

**ENG05 Keep public demos reliable.** Ensure links point to the intended project and source repository. If a workflow requires login, provide a safe demo path where feasible and explain it. Never publish production credentials. Do not claim a feature is tested merely because its link opens.

---

## 9 Delivery sequence and content checklist

| Stage | Changes | Completion evidence |
| --- | --- | --- |
| 1 Foundation | AUD01, AUD07, VIS01 to VIS09 | Tokens, typography, header, and responsive hero reviewed |
| 2 Homepage | AUD02, AUD03, AUD06, HOME01 to HOME07 | New hierarchy works on desktop and mobile |
| 3 Evidence | AUD04, AUD05, WORK01 to WORK06, COPY01 to COPY04 | Case study and experience claims verified |
| 4 Behavior | UX01 to UX06 | Keyboard, mobile, reduced motion, and link flows pass |
| 5 Release checks | ENG01 to ENG05 | Build, visual review, metadata, and performance checks complete |

### Information to gather during implementation

- Confirm current role, employment dates, location preferences, and availability.
- Confirm ownership, technologies, development period, and status of each featured project.
- Choose the third featured project after checking its completeness and demo reliability.
- Gather one or two substantial engineering decisions for VKart, with implementation evidence.
- Gather publishable results for professional work or projects. Record measurement method and context.
- Supply a current resume and verify the existing LinkedIn, GitHub, email, and demo destinations.
- Prepare fresh screenshots with appropriate demo data. Add a portrait only if desired.

The UI foundation can proceed using existing confirmed material. Keep unverified claims out of public copy; use accurate qualitative descriptions until supporting evidence is available.

### Definition of done

The portfolio has a coherent light visual system, three curated projects, a substantive VKart case study, prominent experience, and direct contact actions. Mobile and accessibility checks pass. No placeholder claims, broken internal links, or layout defects remain. Review the preview before updating the public site.

### References

These references support accessibility and performance targets.

[1] W3C. Web Content Accessibility Guidelines 2.2. https://www.w3.org/TR/WCAG22/

[2] Google web.dev. Web Vitals. https://web.dev/articles/vitals

Portfolio reviewed: https://balavardhan.dev/ and local source files, 8 September 2026.
