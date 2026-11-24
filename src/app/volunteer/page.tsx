import type { Metadata } from "next";
import FormEmbed from "@/components/FormEmbed";
export const metadata: Metadata = { title: "Volunteer", description: "Volunteer with Five Star Ball Football Academy in Hayes." };
export default function Page() {
  const roles=["Football Coach","Assistant Coach","Training Assistant","Academy Administrator","Media Volunteer","Matchday Assistant"];
  return <>
    <section className="page-hero"><div className="container"><p className="kicker">VOLUNTEER RECRUITMENT</p><h1>Become part of Five Star Ball.</h1><p>Help develop the next generation of footballers. Join our volunteer team and support young players through coaching, training and academy operations.</p></div></section>
    <section className="section"><div className="container content-grid"><div><p className="kicker">VOLUNTEER DETAILS</p><h2>Minimum age: 18+</h2><p><strong>Location:</strong> Botwell Green, Hayes.</p><p>Relevant experience and qualifications are welcome. Requirements depend on the responsibilities of each position; not every role requires coaching qualifications.</p></div><div className="gold-panel"><h3>Available role areas</h3><ul>{roles.map(role=><li key={role}>{role}</li>)}</ul></div></div></section>
    <section className="section dark-section"><div className="container"><p className="kicker">VOLUNTEER STRUCTURE</p><h2>A planned team of 30 volunteers.</h2><div className="card-grid three">
      {[["TEAM 1","AGES 7–9"],["TEAM 2","AGES 10–12"],["TEAM 3","AGES 13–15"]].map(([team,ages])=> <article className="feature-card" key={team}><h3>{team}</h3><h2>{ages}</h2><p>10 volunteers<br/>3 subgroup leads<br/>1 additional team volunteer</p><p>Each subgroup lead coordinates a subgroup of approximately three volunteers.</p></article>)}
    </div><p className="note">Appointments are subject to recruitment review, references, role suitability, appropriate DBS checks where eligible and required, safeguarding requirements, relevant training and academy approval. Volunteers will not begin unsupervised work with children before required checks and approval.</p></div></section>
    <section className="section"><div className="container"><h2>Apply to volunteer</h2><FormEmbed src="https://eu.forms.app/form/6b05e8253d2b294a90dc3812" title="Five Star Ball Volunteer Application" /></div></section>
  </>;
}
