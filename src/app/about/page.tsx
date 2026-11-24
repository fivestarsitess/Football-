import type { Metadata } from "next";
export const metadata: Metadata = { title: "About Us", description: "Learn about Five Star Ball Football Academy in Hayes and our youth development philosophy." };
export default function Page() {
  return <>
    <section className="page-hero"><div className="container"><p className="kicker">ABOUT US</p><h1>Football development with purpose.</h1></div></section>
    <section className="section"><div className="container content-grid"><article><p className="kicker">WHO WE ARE</p><h2>Structured support for every player.</h2><p>Five Star Ball Football Academy aims to provide young players with a positive and structured environment in which they can develop their football ability, confidence, discipline, teamwork and understanding of the game.</p><p>Our objective is to support players of different starting abilities and help them develop both on and off the pitch.</p></article><aside className="gold-panel"><h3>Our mission</h3><p>To inspire and develop the next generation through accessible, organised and age-appropriate football coaching.</p></aside></div></section>
    <section className="section dark-section"><div className="container"><p className="kicker">COACHING PHILOSOPHY</p><h2>Development beyond the scoreboard.</h2><div className="card-grid three">
      {[["Player-centred","Training adapts to the needs and stage of development of each age group."],["Progressive","Players build from technical fundamentals towards tactical understanding and confident decisions."],["Positive","Coaching promotes effort, respect, teamwork, responsibility and a love of the game."]].map(([title,text]) => <article className="feature-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
    </div></div></section>
  </>;
}
