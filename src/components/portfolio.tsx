"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>;
const Tag = ({ children }: { children: string }) => <span className="tag">{children}</span>;

function ProjectPreview() {
  return <div className="preview" aria-label="MergePilot AI interface preview">
    <div className="preview-top"><span className="signal"><i /><i /><i /></span><span>mergepilot / pull-request</span><span>•••</span></div>
    <div className="preview-main">
      <aside><b>MP</b><span className="active" /><span /><span /><span /></aside>
      <div className="preview-body"><div className="repo-row"><span className="branch">main</span><strong>feat: add review intelligence</strong></div><div className="code"><p><em>12</em> export async function <b>analyzePullRequest</b>() {'{'}</p><p><em>13</em>&nbsp;&nbsp;const context = await getRepositoryContext()</p><p className="marked"><em>14</em>&nbsp;&nbsp;return reviewWithAI(context)</p><p><em>15</em>{'}'}</p></div><div className="review"><span>AI REVIEW</span><p>Potential null path detected before repository context is resolved.</p><button>View suggestion <Arrow /></button></div></div>
    </div>
  </div>;
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  const close = () => setMenu(false);
  return <>
    <header className="nav"><a className="brand" href="#top" onClick={close}>Paras Chavan<span>.</span></a><nav className={menu ? "open" : ""} aria-label="Main navigation">{[["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Skills", "skills"], ["Contact", "contact"]].map(([label, id]) => <a href={`#${id}`} onClick={close} key={id}>{label}</a>)}</nav><div className="nav-actions"><button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle color theme"><span>{dark ? "◐" : "◑"}</span></button><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}><i /><i /></button></div></header>
    <main id="top">
      <section className="hero section"><div className="hero-copy"><p className="eyebrow reveal">Software Engineer <span>•</span> Pune, India</p><h1 className="reveal delay-1">Building reliable<br />software systems<span>.</span></h1><p className="lede reveal delay-2">Backend-first engineer focused on scalable APIs, cloud-native systems, and intelligent full-stack applications.</p><p className="stack reveal delay-3">Python <b>•</b> FastAPI <b>•</b> Node.js <b>•</b> TypeScript <b>•</b> AWS <b>•</b> PostgreSQL <b>•</b> MongoDB</p><div className="hero-actions reveal delay-4"><a className="button solid" href="#projects">View Projects <Arrow /></a><a className="button" href="#contact">Get in Touch <Arrow /></a></div><div className="text-links reveal delay-4"><a href={portfolio.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href={`mailto:${portfolio.email}`}>Email <Arrow /></a></div></div><div className="hero-mark" aria-hidden="true"><div className="orbit" /><div className="mark-code">&lt;/&gt;</div><p>ENGINEERED<br />WITH INTENT</p></div><a className="scroll-note" href="#about">Scroll to explore <span>↓</span></a></section>

      <section id="about" className="section"><div className="section-head"><p className="eyebrow">01 / Engineering focus</p><h2>How I build<span>.</span></h2><p>Software is most useful when the system beneath it is deliberate, readable, and resilient.</p></div><div className="focus-grid">{portfolio.focus.map(([num, title, text]) => <article className="focus-card" key={title}><span className="number">{num}</span><span className="card-arrow">↗</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section id="experience" className="section"><div className="section-head split"><div><p className="eyebrow">02 / Experience</p><h2>Work shaped<br />by systems<span>.</span></h2></div><p>Building products where thoughtful interfaces meet dependable implementation.</p></div><div className="timeline">{portfolio.experiences.map((job, i) => <article className="job" key={job.company}><div className="time"><span>0{i + 1}</span><p>{job.date}</p></div><div className="job-content"><p className="role">{job.role}</p><h3>{job.company}</h3><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tags">{job.tech.map(t => <Tag key={t}>{t}</Tag>)}</div></div></article>)}</div></section>

      <section id="projects" className="section project-section"><div className="project-intro"><p className="eyebrow">03 / Featured project</p><p className="project-index">01 — 01</p></div><article className="project-card"><div className="project-copy"><p className="eyebrow">GitHub Developer Intelligence Platform</p><h2>MergePilot<br />AI<span>.</span></h2><p>A GitHub-integrated developer intelligence platform designed to analyze repositories and pull requests and establish the foundation for AI-assisted code review workflows.</p><ul className="checks">{["GitHub OAuth authentication", "Protected server-side API architecture", "Repository and pull-request retrieval", "AI-assisted code review foundation"].map(x => <li key={x}>{x}</li>)}</ul><div className="tags">{["Next.js", "TypeScript", "React", "Auth.js", "PostgreSQL", "Drizzle ORM", "GitHub REST API", "Tailwind CSS", "Zod", "Gemini API"].map(t => <Tag key={t}>{t}</Tag>)}</div><div className="hero-actions"><a className="button solid" href={portfolio.mergePilotLive} target="_blank" rel="noreferrer">View Live Project <Arrow /></a><a className="button" href={portfolio.mergePilot} target="_blank" rel="noreferrer">View on GitHub <Arrow /></a></div></div><ProjectPreview /></article></section>

      <section id="skills" className="section"><div className="section-head split"><div><p className="eyebrow">04 / Toolkit</p><h2>Technical<br />range<span>.</span></h2></div><p>A focused set of tools used across product interfaces, backend systems, and infrastructure.</p></div><div className="skill-matrix">{Object.entries(portfolio.skills).map(([category, skills]) => <div className="skill-group" key={category}><h3>{category}</h3><div>{skills.map(skill => <span key={skill}>{skill}<i>↗</i></span>)}</div></div>)}</div></section>

      <section className="section achievements"><div className="section-head"><p className="eyebrow">05 / Research & achievements</p><h2>Beyond the<br />build<span>.</span></h2></div><div className="achievement-list">{portfolio.achievements.map(([kind, title, detail, url], i) => <article key={title}>{url ? <a className="achievement-link" href={url} target="_blank" rel="noreferrer"><span>0{i + 1}</span><div><p>{kind}</p><h3>{title}</h3>{detail && <small>{detail}</small>}</div><b>↗</b></a> : <><span>0{i + 1}</span><div><p>{kind}</p><h3>{title}</h3>{detail && <small>{detail}</small>}</div><b>↗</b></>}</article>)}</div></section>

      <section className="section education"><p className="eyebrow">06 / Education</p><div><h2>PCET&apos;s Pimpri<br />Chinchwad University<span>.</span></h2><p>Bachelor of Technology — Computer Science Engineering</p></div><aside><span>2023 — 2027</span><span>Pune, Maharashtra</span></aside></section>

      <section id="contact" className="contact"><div className="contact-inner"><p className="eyebrow">07 / Contact</p><h2>Let&apos;s build something<br />useful<span>.</span></h2><p>I&apos;m open to software engineering opportunities, backend-focused roles, and interesting technical projects.</p><a className="email-link" href={`mailto:${portfolio.email}`}>{portfolio.email} <Arrow /></a><div className="contact-actions"><a className="button solid" href={`mailto:${portfolio.email}`}>Email Me <Arrow /></a><a className="button" href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a className="button" href={portfolio.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div></section>
    </main><footer><span>© 2026 Paras Chavan</span><span>Software Engineer</span><span>Built with Next.js</span></footer>
  </>;
}
