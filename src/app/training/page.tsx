import type { Metadata } from "next";
export const metadata: Metadata = { title: "Training", description: "Five Star Ball's 90-minute youth football training programme in Hayes." };
export default function Page() {
  const schedule=[["Warm-up","10 minutes"],["Ball mastery","15 minutes"],["Passing and receiving","15 minutes"],["Dribbling and attacking","15 minutes"],["Tactical development","15 minutes"],["Small-sided matches","15 minutes"],["Cool-down and feedback","5 minutes"],["Total","90 minutes"]];
  return <>
    <section className="page-hero"><div className="container"><p className="kicker">TRAINING</p><h1>Structured sessions. Measurable development.</h1></div></section>
    <section className="section"><div className="container content-grid"><div><p className="kicker">OUR FOCUS</p><h2>Every session develops the complete player.</h2><p>Coaching focuses on ball mastery, passing and receiving, dribbling, shooting, defending, tactical awareness, decision-making, positioning, teamwork, confidence, football intelligence, and coordination and agility.</p></div><div className="gold-panel"><h3>Session format</h3><p>One 90-minute session per week.</p><p>Age-appropriate games and progressions ensure every group trains at the right level.</p></div></div></section>
    <section className="section dark-section"><div className="container"><p className="kicker">SAMPLE SESSION</p><h2>90-minute programme</h2><div className="schedule">{schedule.map(([activity,duration])=> <div key={activity}><span>{activity}</span><strong>{duration}</strong></div>)}</div></div></section>
  </>;
}
