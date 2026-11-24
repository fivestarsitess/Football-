import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Age Groups", description: "Explore Five Star Ball youth football age groups in Hayes." };
export default function Page() {
  const groups = [["7–9","Foundation","Ball control, coordination, confidence and enjoyment establish strong habits from the start."],["10–12","Development","Technique, passing, movement and tactical decisions become more structured and challenging."],["13–15","Performance","Players develop football intelligence, positioning, teamwork and greater game understanding."]];
  return <>
    <section className="page-hero"><div className="container"><p className="kicker">AGE GROUPS</p><h1>Three groups. Every stage matters.</h1></div></section>
    <section className="section"><div className="container"><div className="card-grid three">{groups.map(([ages,stage,text]) => <article className="age-card" key={ages}><p className="kicker">{stage}</p><h2>AGES {ages}</h2><p>{text}</p><div className="capacity">Maximum 30 players</div></article>)}</div>
      <div className="capacity-table"><h2>Academy capacity</h2><table><thead><tr><th>Age group</th><th>Maximum places</th></tr></thead><tbody><tr><td>7–9</td><td>30</td></tr><tr><td>10–12</td><td>30</td></tr><tr><td>13–15</td><td>30</td></tr><tr className="total"><td>Total</td><td>90</td></tr></tbody></table></div>
      <p className="note">Each age group has its own capacity. Once an age group reaches its limit, further applications will be directed to its waiting list. This website does not display invented live availability.</p><Link className="button button-gold" href="/register">Register Interest</Link>
    </div></section>
  </>;
}
