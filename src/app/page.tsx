import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Trophy, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="eyebrow">JANUARY 2027 INTAKE NOW OPEN</div>
          <h1>FIVE STAR BALL <span>FOOTBALL ACADEMY</span></h1>
          <p className="hero-tagline">DEVELOP. TRAIN. COMPETE.</p>
          <p className="hero-lead">Building confidence, developing ability and inspiring the next generation of footballers through structured football coaching.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/register">Register Your Interest <ArrowRight /></Link>
            <Link className="button button-outline" href="/volunteer">Become a Volunteer</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container intro-grid">
          <div><p className="kicker">THE ACADEMY</p><h2>Purpose-built youth development at the heart of Hayes.</h2></div>
          <div className="intro-copy"><p>Five Star Ball provides a positive and structured environment where young players can develop ability, confidence, discipline and teamwork.</p><div className="facts-row"><span><strong>Botwell Green</strong>Hayes</span><span><strong>January 2027</strong>Launch</span><span><strong>£35</strong>Per month</span></div></div>
        </div>
      </section>
      <section className="section dark-section">
        <div className="container"><p className="kicker">AGE GROUPS</p><h2>One academy. Three pathways.</h2><div className="card-grid three">
          {[["AGES 7–9","Build fundamentals, coordination and confidence through engaging, age-appropriate coaching.","30"],["AGES 10–12","Develop technique, decision-making and understanding in a challenging team environment.","30"],["AGES 13–15","Strengthen tactical awareness, performance habits and individual football intelligence.","30"]].map(([age,text,places]) => (
            <article className="feature-card" key={age}><span className="card-number">{places}</span><h3>{age}</h3><p>{text}</p><Link href="/age-groups">Explore age group <ArrowRight /></Link></article>
          ))}
        </div></div>
      </section>
      <section className="section"><div className="container split-section">
        <div className="training-panel"><Trophy /><p className="kicker">TRAINING</p><h2>One structured 90-minute session each week.</h2><p>Technical development, tactical learning and small-sided play combine in a programme designed around every age group.</p><Link className="text-link" href="/training">View the training programme <ArrowRight /></Link></div>
        <div className="membership-panel"><p className="kicker">MEMBERSHIP</p><div className="price">£35 <span>/ MONTH</span></div><p>Monthly membership. No card information collected on this website.</p><ul><li><Check /> Weekly 90-minute session</li><li><Check /> Structured development</li><li><Check /> Player feedback</li><li><Check /> Academy announcements</li></ul><Link className="button button-gold" href="/membership">Membership details</Link></div>
      </div></section>
      <section className="section benefits-section"><div className="container"><p className="kicker">THE FIVE STAR APPROACH</p><div className="benefits-grid">
        <div><ShieldCheck /><h3>Safe & positive</h3><p>A supportive environment with safeguarding and review-led appointments.</p></div><div><Trophy /><h3>Player development</h3><p>Age-appropriate coaching that develops the whole young footballer.</p></div><div><Users /><h3>Team & confidence</h3><p>Teamwork, communication and confidence are central to every session.</p></div>
      </div></div></section>
      <section className="volunteer-cta"><div className="container"><div><p className="kicker">JOIN THE TEAM</p><h2>Help develop the next generation.</h2></div><Link className="button button-gold" href="/volunteer">Become a Volunteer <ArrowRight /></Link></div></section>
      <section className="register-cta"><div className="container"><p className="kicker">LIMITED SPACES AVAILABLE</p><h2>Register for the January 2027 intake.</h2><p>Maximum capacity: 90 players across three age groups.</p><Link className="button button-gold" href="/register">Register Your Interest</Link></div></section>
    </>
  );
}
