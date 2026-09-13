import React, { useEffect, useState } from "react";
import { CONTACT, EXPERIENCE, NEWS, PROFILE, PROJECTS, RESEARCH } from "./data.jsx";

const HEADSHOT_URL = new URL("./Jagadeesh_V_Headshot.jpg", import.meta.url).href;

const SECTIONS = [
  { id: "about",      label: "about" },
  { id: "news",       label: "news" },
  { id: "research",   label: "interests" },
  { id: "experience", label: "experience" },
  { id: "projects",   label: "research" },
  { id: "contact",    label: "contact" },
];

function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= y) current = id;
      }
      setActive((prev) => (prev === current ? prev : current));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join("|"), offset]);
  return active;
}

function Navbar({ active }) {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };
  return (
    <header className="nav-top">
      <div className="shell nav-inner">
        <a href="#about" className="nav-brand" onClick={(e) => handleClick(e, "about")}>
          <span>Vivek Jagadeesh</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              className={"nav-link" + (active === s.id ? " is-active" : "")}
              onClick={(e) => handleClick(e, s.id)}
              aria-current={active === s.id ? "true" : "false"}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children, num }) {
  return (
    <div className="sect-label">
      {num && <span style={{ color: "var(--accent)" }}>{num}</span>}
      <span>{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <section id="about" className="hero">
      <figure className="hero-photo" aria-label="Headshot">
        <img src={HEADSHOT_URL} alt="Vivek Jagadeesh" loading="eager" decoding="async" />
      </figure>
      <div className="hero-text">
        <h1>{PROFILE.name.split(" ")[0]} <em>{PROFILE.name.split(" ").slice(1).join(" ")}</em></h1>
        <p className="role">{PROFILE.role}</p>
        <p className="bio">{PROFILE.bio}</p>
        <div className="hero-meta">
          {PROFILE.location && <span>{PROFILE.location}</span>}
          {PROFILE.status && <span>{PROFILE.status}</span>}
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news">
      <SectionLabel num="01">News</SectionLabel>
      <div className="news-list">
        {NEWS.map((n, i) => (
          <div className="news-item" key={i}>
            <div className="news-date">{n.date}</div>
            <div className="news-body">
              {n.tag && <span className="news-tag">{n.tag}</span>}
              {n.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research">
      <SectionLabel num="02">Research Interests</SectionLabel>
      <div className="research-grid">
        {RESEARCH.map((r, i) => (
          <div className="research-card" key={i}>
            <div className="num">{String(i + 1).padStart(2, "0")} ·</div>
            <h3>{r.title}</h3>
            <p>{r.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const INLINE_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const isExternal = (href) => /^(https?:)?\/\//.test(href || "");

function Anchor({ href, className, children }) {
  return (
    <a
      className={className}
      href={href}
      target={isExternal(href) ? "_blank" : undefined}
      rel={isExternal(href) ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

/**
 * Turn markdown-style [label](href) spans in a string into links, leaving the
 * surrounding text alone, so only part of a bullet needs to be a link.
 */
function linkify(text) {
  if (typeof text !== "string" || !text.includes("](")) return text;
  const out = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(
      <Anchor key={m.index} className="bullet-link" href={m[2]}>{m[1]}</Anchor>
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/**
 * A bullet may be:
 *   "plain text"                                  -> rendered as-is
 *   "text with an [inline link](https://...)"      -> only that phrase becomes a link
 *   <>JSX with <a href="...">inline links</a></>  -> rendered as-is
 *   { text, href }                                -> whole bullet becomes a link
 *   { text, links: [{ label, href }] }            -> text followed by labelled links
 * `text` in the object forms also supports [label](href) spans.
 */
function Bullet({ item }) {
  if (item == null || React.isValidElement(item)) return item;
  if (typeof item !== "object") return linkify(item);
  const { text, href, links } = item;
  const body = href
    ? <Anchor className="bullet-link" href={href}>{linkify(text)}</Anchor>
    : linkify(text);
  return (
    <>
      {body}
      {links?.length > 0 && (
        <span className="bullet-links">
          {links.map((l) => (
            <Anchor key={l.href || l.label} href={l.href}>{l.label}</Anchor>
          ))}
        </span>
      )}
    </>
  );
}

function Experience() {
  return (
    <section id="experience">
      <SectionLabel num="03">Work Experience</SectionLabel>
      <div className="work-list">
        {EXPERIENCE.map((w, i) => (
          <div className="work-item" key={i}>
            <div className="work-meta">
              {w.dates}
              <span className="where">{w.where}</span>
            </div>
            <div className="work-body">
              <h3>{w.role}</h3>
              <span className="at">@ {w.org}</span>
              {w.bullets?.length > 0 && (
                <ul>{w.bullets.map((b, j) => <li key={j}><Bullet item={b} /></li>)}</ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <SectionLabel num="04">Research</SectionLabel>
      <div className="proj-list">
        {PROJECTS.map((p, i) => (
          <article className="proj-item" key={i}>
            <div className="proj-head">
              <h3><a>{p.name}</a></h3>
            </div>
            <div className="proj-year">{p.year}</div>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-stack">
              {p.stack.map((s) => <code key={s}>{s}</code>)}
            </div>
            {p.links?.length > 0 && (
              <div className="proj-links">
                {p.links.map((l) => (
                  <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <SectionLabel num="05">Contact</SectionLabel>
      <div className="contact-wrap">
  
        <div className="contact-list">
          {CONTACT.map((c) => (
            <a className="contact-row" key={c.lbl} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <span className="lbl">{c.lbl}</span>
              <span className="val">{c.val}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot shell">
      <span>Built by Vivek Jagadeesh</span>
    </footer>
  );
}

export default function App() {
  const active = useScrollSpy(SECTIONS.map((s) => s.id), 140);
  return (
    <>
      <Navbar active={active} />
      <main className="shell">
        <Hero />
        <News />
        <Research />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
