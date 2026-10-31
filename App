"use client";

import { motion } from "framer-motion";

const services = [
  ["01", "Webflow Development", "Custom, responsive websites with polished interactions, thoughtful structure and an easy-to-manage CMS."],
  ["02", "Shopify Stores", "Product-first storefronts that make discovery simple and buying feel effortless."],
  ["03", "Framer Websites", "Expressive modern websites with fluid motion and a strong visual point of view."]
];

const projects = [
  ["01", "WEBFLOW · CONCEPT", "Digital presence, reimagined", "A refined brand experience built around clarity, typography and confident visual storytelling.", "one"],
  ["02", "SHOPIFY · CONCEPT", "Commerce with character", "A product-first storefront concept designed to make the path to purchase seamless.", "two"],
  ["03", "FRAMER · CONCEPT", "A sharper first impression", "A motion-led landing page concept with bold composition and a responsive layout.", "three"]
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function Home() {
  return (
    <main>
      <div className="glow g1" />
      <div className="glow g2" />

      <header className="nav wrap">
        <a className="logo" href="#home">HAC<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
        </nav>
        <a className="navbtn" href="#contact">Let’s talk ↗</a>
      </header>

      <section className="hero wrap" id="home">
        <div className="heroText">
          <div className="eyebrow"><i /> AVAILABLE FOR SELECT PROJECTS</div>
          <motion.h1 initial="hidden" animate="show" variants={reveal}>
            I build digital<br />experiences that<br /><em>move you forward.</em>
          </motion.h1>
          <p className="intro">
            I’m Henry Ameen Charles — a website developer creating distinctive, high-performing websites with Webflow, Shopify and Framer.
          </p>
          <div className="actions">
            <a className="button" href="#work">Explore my work ↗</a>
            <a className="simpleLink" href="#about">Get to know me ↓</a>
          </div>
          <div className="meta">BASED IN NIGERIA <span /> WORKING WORLDWIDE</div>
        </div>

        <motion.div className="portraitStage" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div className="halo" />
          <div className="orbit o1" />
          <div className="orbit o2" />
          <img src="https://i.ibb.co/tp0bc7Z1/Polished-3-D-Portrait-of-a-Young-Man.png" alt="Selected 3D portrait" />
          <div className="chip c1">✳ Webflow</div>
          <div className="chip c2">✳ Shopify</div>
          <div className="chip c3">◈ Framer</div>
          <div className="glass gtop">✦ <b>Design-led</b><small>Built with intention</small></div>
          <div className="glass gbottom">✧ <b>Digital craft</b><small>From idea to launch</small></div>
        </motion.div>
        <div className="scroll">— SCROLL TO EXPLORE</div>
      </section>

      <div className="ticker">
        <div>WEBFLOW　✳　SHOPIFY　✳　FRAMER　✳　DIGITAL EXPERIENCES　✳　WEBFLOW　✳　SHOPIFY　✳　FRAMER　✳　</div>
      </div>

      <section className="section wrap" id="about">
        <div className="kicker">01 / A LITTLE ABOUT ME <i /></div>
        <div className="twoCol">
          <h2>Good websites<br />do more than <em>look good.</em></h2>
          <div className="bodycopy">
            <p className="lead">They make people feel something. They make choices easier. They help ambitious brands show up with confidence.</p>
            <p>I bring design thinking and practical development together to create websites considered from the first impression to the final click. My focus is clear communication, strong visual direction and details that make the experience feel effortless.</p>
            <a className="simpleLink" href="#contact">Have a project in mind? ↗</a>
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="wrap">
          <div className="kicker">02 / WHAT I DO <i /></div>
          <div className="sectionHead">
            <h2>Thoughtful digital.<br /><em>Built to perform.</em></h2>
            <p>From a first idea to a polished launch, I help turn your online presence into an experience people remember.</p>
          </div>
          {services.map(s => (
            <motion.div className="service" key={s[0]} initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
              <span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section wrap" id="work">
        <div className="kicker">03 / SELECTED WORK <i /></div>
        <div className="sectionHead">
          <h2>Ideas made <em>visible.</em></h2>
          <p>Concept directions showing how I approach different digital experiences. Replace these with real client work as it becomes available.</p>
        </div>
        <div className="projects">
          {projects.map(p => (
            <motion.article key={p[0]} initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}>
              <div className={"art " + p[4]}>
                <span>{p[0]}</span>
                <div className="mock">
                  <div className="dots">● ● ●</div>
                  <div className="mockTitle" />
                  <div className="mockLine" />
                  <div className="mockOrb" />
                </div>
                <small>{p[1]}</small>
              </div>
              <div className="projectInfo">
                <div><label>{p[1]}</label><h3>{p[2]}</h3><p>{p[3]}</p></div>
                <b>↗</b>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="wrap">
          <label>THE RIGHT WEBSITE CHANGES THE WAY PEOPLE SEE YOUR BRAND.</label>
          <h2>Let’s make your<br /><em>next move count.</em></h2>
          <a className="button light" href="#contact">Start a conversation ↗</a>
        </div>
      </section>

      <section className="section wrap" id="contact">
        <div className="kicker">04 / GET IN TOUCH <i /></div>
        <div className="contactGrid">
          <div>
            <h2>Have something<br />good in <em>mind?</em></h2>
            <p>Tell me what you’re building. I’d love to hear about it.</p>
          </div>
          <div className="contactCard">
            <label>LET’S CREATE SOMETHING GREAT</label>
            <a className="email" href="mailto:hello@henryameen.com">Let’s talk ↗</a>
            <p>Replace this placeholder email with your real contact address before publishing.</p>
            <hr />
            <label>ELSEWHERE</label>
            <div className="social">
              <a href="https://www.linkedin.com/" target="_blank">LinkedIn ↗</a>
              <a href="https://www.instagram.com/" target="_blank">Instagram ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer wrap">
        <a className="logo" href="#home">HAC<span>.</span></a>
        <small>DESIGNED WITH INTENTION · BUILT FOR WHAT’S NEXT</small>
        <a href="#home">BACK TO TOP ↑</a>
        <small>© {new Date().getFullYear()} Henry Ameen Charles</small>
      </footer>
    </main>
  );
}
