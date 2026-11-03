import Link from "next/link";

const services = {
  webflow: { title: "Webflow development", intro: "A distinctive, responsive website your team can confidently manage.", bestFor: "Service businesses, studios and growing brands that need a polished marketing website.", includes: ["Page structure and responsive layouts", "CMS collections for repeatable content", "Interaction and motion details", "On-page SEO foundations", "Launch checks across screen sizes"], process: "We define the audience and page goals, shape the structure, develop the visual experience, build in Webflow and review the responsive details before launch." },
  shopify: { title: "Shopify storefronts", intro: "A product-led shopping experience designed to make browsing and buying feel simple.", bestFor: "Product brands that need a clear storefront, better product presentation and a considered shopping journey.", includes: ["Storefront layout and navigation", "Collection and product page design", "Mobile shopping experience", "Brand styling and content hierarchy", "Cart and checkout journey review"], process: "We map the catalogue and customer journey, design the storefront around product discovery, build the key shopping pages and test the experience on mobile and desktop." },
  framer: { title: "Framer websites", intro: "Expressive, motion-led websites with a strong visual point of view.", bestFor: "Founders, portfolios and creative brands that want a memorable launch or marketing site.", includes: ["Art direction and page composition", "Responsive Framer build", "Purposeful motion and transitions", "Reusable page sections", "Launch and performance checks"], process: "We establish the message and visual direction, create a high-impact page system, bring it to life with purposeful motion and refine it for every screen." }
};

export function generateStaticParams() { return Object.keys(services).map(slug => ({ slug })); }

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return <main className="detailPage wrap"><h1>Service not found</h1><Link href="/#services">Back to services</Link></main>;
  return (
    <main className="detailPage">
      <header className="detailNav wrap"><Link className="logo" href="/">HAC<span>.</span></Link><Link className="navbtn" href="/#contact">Let’s talk ↗</Link></header>
      <section className="detailHero wrap"><p className="kicker">WHAT I DO / {service.title.toUpperCase()}</p><h1>{service.title}</h1><p className="detailSubtitle">{service.intro}</p><div className="serviceDetailVisual"><span>HAC / DIGITAL EXPERIENCES</span><strong>Thoughtful digital.<br/><em>Built to perform.</em></strong><i>✳</i></div></section>
      <section className="detailBody wrap"><article><label>WHO IT’S FOR</label><p>{service.bestFor}</p></article><article><label>WHAT’S INCLUDED</label><ul>{service.includes.map(item => <li key={item}>{item}</li>)}</ul></article><article><label>HOW WE WORK</label><p>{service.process}</p></article></section>
      <section className="detailCTA wrap"><h2>Let’s shape the right experience for your business.</h2><Link className="button" href={`/#contact?service=${slug}`}>Discuss this service ↗</Link></section>
      <footer className="footer wrap"><Link className="logo" href="/">HAC<span>.</span></Link><Link href="/#services">Back to services ↑</Link></footer>
    </main>
  );
}
