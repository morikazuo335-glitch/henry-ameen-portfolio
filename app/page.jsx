"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ContactForm from "./contact-form";

const services = [
  ["01", "Webflow Development", "Custom, responsive websites with polished interactions, thoughtful structure and an easy-to-manage CMS."],
  ["02", "Shopify Stores", "Product-first storefronts that make discovery simple and buying feel effortless."],
  ["03", "Framer Websites", "Expressive modern websites with fluid motion and a strong visual point of view."]
];

const projects = [
  ["01", "WEBFLOW · CONCEPT", "Northstar Finance", "A clearer digital experience for a modern financial advisory brand.", "one", "northstar-finance"],
  ["02", "SHOPIFY · CONCEPT", "Form & Field", "A product-first storefront concept for a contemporary home and lifestyle label.", "two", "form-and-field"],
  ["03", "FRAMER · CONCEPT", "A sharper first impression", "A motion-led landing page concept with bold composition and a responsive layout.", "three", "arc-studio"],
  ["04", "SAAS · UI CONCEPT", "Clarity at a glance", "A focused operations dashboard concept for turning activity into clear next steps.", "four", "pulseboard"]
];

const reveal = {
  hidden: { opacity: 0, y: 44, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } }
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div className={className} variants={reveal} initial="hidden" whileInView="show"
      viewport={{ once: true, amount: 0.18 }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export default function Home() {
  const pageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.2 });
  const portraitY = useTransform(scrollYProgress, [0, 0.22], [0, 100]);
  const portraitRotate = useTransform(scrollYProgress, [0, 0.2], [0, -5]);

  return (
    <main ref={pageRef}>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="glow g1" />
      <div className="glow g2" />
      <div className="ambient-grid" />

      <header className="nav wrap">
        <a className="logo" href="#home">HAC<span>.</span></a>
        <nav><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a></nav>
        <a className="navbtn" href="#contact">Let’s talk ↗</a>
      </header>

      <section className="hero wrap" id="home">
        <div className="heroText">
          <motion.div className="eyebrow" initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2, duration: .7 }}>
            <i /> AVAILABLE FOR SELECT PROJECTS
          </motion.div>
          <motion.h1 variants={stagger} initial="hidden" animate="show">
            <motion.span variants={reveal}>I build digital</motion.span>
            <motion.span variants={reveal}>experiences that</motion.span>
            <motion.span className="gradient-words" variants={reveal}>move you forward.</motion.span>
          </motion.h1>
          <motion.p className="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8, duration: .8 }}>
            I’m Henry Ameen Charles — a website developer creating distinctive, high-performing websites with Webflow, Shopify and Framer.
          </motion.p>
          <motion.div className="actions" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: .7 }}>
            <a className="button" href="#work">Explore my work <span>↗</span></a>
            <a className="simpleLink" href="#about">Get to know me ↓</a>
          </motion.div>
          <div className="meta">BASED IN NIGERIA <span /> WORKING WORLDWIDE</div>
        </div>

        <motion.div className="portraitStage" style={reduceMotion ? {} : { y: portraitY, rotate: portraitRotate }}>
          <motion.div className="halo" animate={reduceMotion ? {} : { scale: [1, 1.12, 1], opacity: [.55, .9, .55] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="orbit o1" animate={reduceMotion ? {} : { rotate: 360 }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} />
          <motion.div className="orbit o2" animate={reduceMotion ? {} : { rotate: -360 }} transition={{ duration: 46, repeat: Infinity, ease: "linear" }} />
          <motion.div className="orbit o3" animate={reduceMotion ? {} : { rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} />
          <motion.img src="https://i.ibb.co/tp0bc7Z1/Polished-3-D-Portrait-of-a-Young-Man.png" alt="Selected 3D portrait"
            initial={{ opacity: 0, y: 45, scale: .88 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: .25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reduceMotion ? {} : { scale: 1.035, y: -8 }} />
          <motion.div className="chip c1" animate={reduceMotion ? {} : { y: [0, -13, 0], rotate: [0, 4, 0] }} transition={{ duration: 5, repeat: Infinity }}>✳ Webflow</motion.div>
          <motion.div className="chip c2" animate={reduceMotion ? {} : { y: [0, 12, 0], x: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, delay: .7 }}>✳ Shopify</motion.div>
          <motion.div className="chip c3" animate={reduceMotion ? {} : { y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}>◈ Framer</motion.div>
          <motion.div className="glass gtop" animate={reduceMotion ? {} : { y: [0, -9, 0] }} transition={{ duration: 5.5, repeat: Infinity }}>✦ <b>Design-led</b><small>Built with intention</small></motion.div>
          <motion.div className="glass gbottom" animate={reduceMotion ? {} : { y: [0, 10, 0] }} transition={{ duration: 6.5, repeat: Infinity }}>✧ <b>Digital craft</b><small>From idea to launch</small></motion.div>
          <motion.span className="spark spark-a" animate={reduceMotion ? {} : { rotate: 360, scale: [1, 1.5, 1] }} transition={{ duration: 8, repeat: Infinity }}>✳</motion.span>
          <motion.span className="spark spark-b" animate={reduceMotion ? {} : { rotate: -360, y: [0, -14, 0] }} transition={{ duration: 9, repeat: Infinity }}>✦</motion.span>
        </motion.div>
        <motion.div className="scroll" animate={reduceMotion ? {} : { y: [0, 8, 0], opacity: [.5, 1, .5] }} transition={{ duration: 2, repeat: Infinity }}>— SCROLL TO EXPLORE</motion.div>
      </section>

      <div className="ticker"><div>WEBFLOW　✳　SHOPIFY　✳　FRAMER　✳　DIGITAL EXPERIENCES　✳　WEBFLOW　✳　SHOPIFY　✳　FRAMER　✳　</div></div>

      <section className="section wrap" id="about">
        <Reveal><div className="kicker">01 / A LITTLE ABOUT ME <i /></div></Reveal>
        <div className="twoCol">
          <Reveal><h2>Good websites<br />do more than <em>look good.</em></h2></Reveal>
          <Reveal className="bodycopy">
            <p className="lead">They make people feel something. They make choices easier. They help ambitious brands show up with confidence.</p>
            <p>I bring design thinking and practical development together to create websites considered from the first impression to the final click. My focus is clear communication, strong visual direction and details that make the experience feel effortless.</p>
            <a className="simpleLink" href="#contact">Have a project in mind? ↗</a>
          </Reveal>
        </div>
        <div className="orbit-note"><span>✳</span> IDEAS INTO EXPERIENCES <span>✳</span></div>
      </section>

      <section className="section services" id="services">
        <div className="wrap">
          <Reveal><div className="kicker">02 / WHAT I DO <i /></div></Reveal>
          <Reveal className="sectionHead">
            <Link className="serviceHeadlineLink" href="#service-list"><h2>Thoughtful digital.<br /><em>Built to perform.</em></h2><span>EXPLORE HOW I CAN HELP ↘</span></Link>
            <p>From a first idea to a polished launch, I help turn your online presence into an experience people remember.</p>
          </Reveal>
          {services.map(s => (
            <motion.div className="service" key={s[0]} initial="hidden" whileInView="show" viewport={{ once: true, amount: .4 }} variants={reveal} whileHover={{ x: 10, backgroundColor: "rgba(166,138,255,.055)" }}>
              <span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section wrap" id="work">
        <Reveal><div className="kicker">03 / SELECTED WORK <i /></div></Reveal>
        <Reveal className="sectionHead">
          <h2>Ideas made <em>visible.</em></h2>
          <p>Concept directions showing how I approach different digital experiences. Replace these with real client work as it becomes available.</p>
        </Reveal>
        <div className="projects">
          {projects.map((p, i) => (
            <Link className="projectLink" href={`/work/${p[5] || "arc-studio"}`} key={p[0]}><motion.article initial={{ opacity: 0, y: 55, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8, delay: i * .12, ease: [0.22, 1, .36, 1] }} whileHover={reduceMotion ? {} : { y: -12, rotateX: -2, scale: 1.015 }}>
              <div className={"art " + p[4]}>
                <span>{p[0]}</span>
                <div className="mock">
                  <div className="dots">● ● ●</div><div className="mockTitle" /><div className="mockLine" /><div className="mockOrb" />
                </div>
                <small>{p[1]}</small>
                <div className="art-shine" />
              </div>
              <div className="projectInfo">
                <div><label>{p[1]}</label><h3>{p[2]}</h3><p>{p[3]}</p></div><b>↗</b>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="wrap">
          <Reveal><label>THE RIGHT WEBSITE CHANGES THE WAY PEOPLE SEE YOUR BRAND.</label></Reveal>
          <Reveal><h2>Let’s make your<br /><em>next move count.</em></h2></Reveal>
          <Reveal><a className="button light" href="#contact">Start a conversation ↗</a></Reveal>
          <motion.div className="statement-orb" animate={reduceMotion ? {} : { rotate: 360, scale: [1, 1.12, 1] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} />
        </div>
      </section>

      <section className="section wrap" id="contact">
        <Reveal><div className="kicker">04 / GET IN TOUCH <i /></div></Reveal>
        <div className="contactGrid">
          <Reveal><div><h2>Have something<br />good in <em>mind?</em></h2><p>Tell me what you’re building. I’d love to hear about it.</p></div></Reveal>
          <Reveal className="contactCard">
            <label>LET’S CREATE SOMETHING GREAT</label>
            <a className="email" href="mailto:hello@henryameen.com">Let’s talk ↗</a>
            <p>Replace this placeholder email with your real contact address before publishing.</p>
            <hr /><label>ELSEWHERE</label>
            <div className="social"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a></div>
          </Reveal>
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
