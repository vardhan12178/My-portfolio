import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export const metadata = {
  title: "VKart case study | Bala Vardhan",
  description: "A full-stack commerce application with product discovery, checkout, admin operations, payments, and order tracking.",
};

const screenshots = [
  { src: "/img/vkart.webp", label: "Storefront", alt: "VKart storefront and product catalogue" },
  { src: "/img/vkart-ai.webp", label: "AI assistant", alt: "VKart AI shopping assistant" },
  { src: "/img/vkart-products.webp", label: "Products", alt: "VKart product collection page" },
  { src: "/img/vkart-admin.webp", label: "Admin", alt: "VKart admin operations dashboard" },
  { src: "/img/vkart-inventory.webp", label: "Inventory", alt: "VKart inventory management" },
];

export default function VKartCaseStudy() {
  return (
    <main className="case-study">
      <div className="section-shell">
        <Link className="back-link" href="/#projects"><ArrowLeft size={15} /> Back to selected work</Link>
        <header className="case-hero" data-reveal>
          <p className="eyebrow">Case study <span>/</span> Full-stack commerce application</p>
          <h1>VKart</h1>
          <p className="case-intro">A full-stack shopping application that connects product discovery, authentication, payments, order tracking, and admin operations in one experience.</p>
          <div className="case-actions"><a className="button button-primary" href="https://vkart.balavardhan.dev/" target="_blank" rel="noreferrer">Open live demo <ArrowUpRight size={16} /></a><a className="button button-secondary" href="https://github.com/vardhan12178/vkart" target="_blank" rel="noreferrer">Frontend code <Github size={15} /></a><a className="text-link" href="https://github.com/vardhan12178/backend" target="_blank" rel="noreferrer">Backend code <Github size={15} /></a></div>
          <div className="case-meta"><span><strong>Role</strong>Full-stack developer</span><span><strong>Scope</strong>Product, API, data, and integrations</span><span><strong>Stack</strong>React, Node.js, MongoDB, Stripe</span></div>
        </header>

        <figure className="case-image case-image-large" data-reveal><Image src="/img/vkart.webp" alt="VKart storefront interface" width={2880} height={1800} priority sizes="(max-width: 760px) 100vw, 1200px" /><figcaption>Storefront / product discovery and catalogue experience</figcaption></figure>

        <div className="case-grid">
          <section className="case-section" data-reveal><p className="eyebrow">01 <span>/</span> Overview</p><h2>A connected commerce flow.</h2><p>VKart brings together the customer-facing shopping experience and the operational tools needed to manage a catalogue. The interface covers product discovery, account access, checkout, and order tracking, while the admin area supports products, stock, and orders.</p></section>
          <section className="case-section" data-reveal><p className="eyebrow">02 <span>/</span> Contribution</p><h2>From interface to database.</h2><p>I designed and built the application across the interface, API, database, authentication flow, and payment integration. The work is organized around clear product flows so a feature can move from a customer action to an operational response.</p></section>
        </div>

        <section className="case-section case-section-wide" data-reveal><p className="eyebrow">03 <span>/</span> Product flow</p><h2>Three surfaces, one system.</h2><div className="flow-grid"><div><span>01</span><h3>Discover</h3><p>Browse the catalogue and use instant keyword search to find relevant products with real-time stock levels.</p></div><div><span>02</span><h3>Purchase</h3><p>Move through authentication, secure Stripe checkout, and automated order confirmation with PDF invoice delivery.</p></div><div><span>03</span><h3>Operate</h3><p>Admin operators manage catalogue items, stock quantities, payments, and fulfillment stages from a protected dashboard.</p></div></div></section>

        <div className="case-grid">
          <section className="case-section" data-reveal><p className="eyebrow">04 <span>/</span> Architecture &amp; Data Flow</p><h2>Decoupled, modular stack.</h2><p>A responsive React and Tailwind frontend communicates with a modular Node.js and Express REST API. MongoDB stores document collections for products, customers, and order history, while Stripe processes transactions through signed webhooks.</p></section>
          <section className="case-section" data-reveal><p className="eyebrow">05 <span>/</span> Engineering Challenge</p><h2>Idempotent order reconciliation.</h2><p>To prevent duplicate orders during client disconnects or webhook retries, Stripe session IDs and payment intent events are verified with cryptographic signatures and recorded with idempotent database transactions before adjusting inventory.</p></section>
        </div>

        <section className="case-section case-section-wide" data-reveal><p className="eyebrow">06 <span>/</span> Interface details</p><h2>Designed to be explored.</h2><div className="case-gallery">{screenshots.slice(1).map((shot) => <figure className="case-image" key={shot.src}><Image src={shot.src} alt={shot.alt} width={2880} height={1800} sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>{shot.label}</figcaption></figure>)}</div></section>

        <section className="case-section case-section-wide case-next" data-reveal><p className="eyebrow">07 <span>/</span> Next iteration</p><h2>Continuous optimization.</h2><p>The next roadmap includes edge caching for product listings, Elasticsearch integration for complex faceted filters, and automated end-to-end checkout testing with Playwright.</p><Link className="text-link" href="/#contact">Discuss the work <ArrowUpRight size={15} /></Link></section>
        <div className="case-footer-link"><Link className="back-link" href="/#projects"><ArrowLeft size={15} /> Back to selected work</Link></div>
      </div>
    </main>
  );
}
