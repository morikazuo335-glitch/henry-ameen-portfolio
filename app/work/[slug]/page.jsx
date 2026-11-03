import Link from "next/link";

const caseStudies = {
  "northstar-finance": {
    number: "01", type: "WEBFLOW WEBSITE · CONCEPT PROJECT", title: "Northstar Finance",
    subtitle: "A clearer digital experience for a modern financial advisory brand.",
    challenge: "Financial services can feel complicated before a visitor even speaks to an adviser. This concept explores how a calm, structured website can make information easier to understand and encourage qualified enquiries.",
    approach: "A confident editorial layout, clear service pathways, plain-language content blocks and a focused enquiry journey. The visual system uses deep navy, warm neutrals and restrained motion to communicate clarity without feeling corporate or cold.",
    features: ["Service-led homepage and navigation", "Responsive advisory service pages", "Trust and process storytelling", "Consultation enquiry call to action"],
    outcome: "The intended result is a more approachable first impression and a shorter path from learning about a service to requesting a conversation.",
    visual: "finance"
  },
  "form-and-field": {
    number: "02", type: "SHOPIFY STOREFRONT · CONCEPT PROJECT", title: "Form & Field",
    subtitle: "A product-first storefront for a contemporary home and lifestyle label.",
    challenge: "A growing product brand needs more than a catalogue grid. Shoppers should be able to understand the product, compare options and feel confident moving toward checkout.",
    approach: "A clean storefront concept with generous product photography, concise product storytelling, collection-led browsing and a simplified purchase path. The visual direction pairs warm stone tones with crisp typography and subtle interactions.",
    features: ["Collection and product discovery", "Product detail and variant presentation", "Mobile-first shopping layouts", "Cart and checkout journey planning"],
    outcome: "The concept is designed to make product discovery feel effortless while giving the brand a consistent, recognisable online presence.",
    visual: "commerce"
  },
  "arc-studio": {
    number: "03", type: "FRAMER LANDING PAGE · CONCEPT PROJECT", title: "ARC Studio",
    subtitle: "A high-impact launch page for a creative digital studio.",
    challenge: "Creative studios need to communicate their point of view quickly. A generic template can make strong work feel forgettable and leave visitors unsure what to do next.",
    approach: "A bold opening statement, project-led visual hierarchy, modular service information and purposeful motion. The Framer concept uses a distinct typographic system and transitions that guide attention rather than distract from the message.",
    features: ["Motion-led hero and introduction", "Selected work presentation", "Clear service positioning", "Contact-focused conversion path"],
    outcome: "The intended experience gives the studio a memorable introduction and makes its work and next step easy to find.",
    visual: "studio"
  },
  "pulseboard": {
    number: "04", type: "SAAS DASHBOARD · UI CONCEPT PROJECT", title: "Pulseboard",
    subtitle: "A focused operations dashboard that turns activity into useful signals.",
    challenge: "Teams often have to scan too many screens to understand what needs attention. This concept looks at how a dashboard can surface priorities without overwhelming the user.",
    approach: "A dark interface with a strong information hierarchy, compact metric cards, activity summaries and a clear task queue. The layout is designed around quick scanning and consistent interaction patterns.",
    features: ["At-a-glance performance overview", "Prioritised activity and task list", "Trend and status visualisations", "Responsive dashboard layout"],
    outcome: "The concept aims to reduce visual noise and help a user identify the next useful action faster.",
    visual: "dashboard"
  }
};

export function generateStaticParams() { return Object.keys(caseStudies).map(slug => ({ slug })); }

export default async function WorkDetail({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug];
  if (!project) return <main className="detailPage wrap"><h1>Project not found</h1><Link href="/#work">Back to selected work</Link></main>;
  return (
    <main className="detailPage">
      <header className="detailNav wrap"><Link className="logo" href="/">HAC<span>.</span></Link><Link className="navbtn" href="/#contact">Start a project ↗</Link></header>
      <section className="detailHero wrap">
        <p className="kicker">{project.number} / {project.type}</p><h1>{project.title}</h1><p className="detailSubtitle">{project.subtitle}</p>
        <div className={`caseVisual ${project.visual}`}><div className="caseWindow"><div className="caseWindowBar">● ● ● <span>{project.title.toLowerCase().replaceAll(" ", "")}.concept</span></div><div className="caseWindowContent"><small>SELECTED DIGITAL EXPERIENCE</small><strong>{project.title}</strong><i /><b>Thoughtful by design.</b><div className="caseShapes"><span /><span /><span /></div></div></div></div>
        <p className="conceptNotice">Independent portfolio concept — not commissioned client work.</p>
      </section>
      <section className="detailBody wrap">
        <article><label>THE CHALLENGE</label><p>{project.challenge}</p></article>
        <article><label>THE APPROACH</label><p>{project.approach}</p></article>
        <article><label>KEY EXPERIENCE DETAILS</label><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></article>
        <article><label>INTENDED IMPACT</label><p>{project.outcome}</p></article>
      </section>
      <section className="detailCTA wrap"><h2>Have a project with a similar ambition?</h2><Link className="button" href="/#contact">Let’s talk about it ↗</Link></section>
      <footer className="footer wrap"><Link className="logo" href="/">HAC<span>.</span></Link><Link href="/#work">Back to all projects ↑</Link></footer>
    </main>
  );
}
