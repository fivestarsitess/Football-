import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Membership", description: "Five Star Ball Football Academy monthly membership for £35 per player." };
export default function Page() {
  return <>
    <section className="page-hero"><div className="container"><p className="kicker">MEMBERSHIP</p><h1>Simple, structured membership.</h1></div></section>
    <section className="section"><div className="container membership-grid"><div className="membership-panel large"><p className="kicker">MONTHLY MEMBERSHIP</p><div className="price">£35 <span>PER PLAYER / MONTH</span></div><ul><li>One weekly 90-minute training session</li><li>Age-group coaching</li><li>Structured football development</li><li>Technical skills training</li><li>Teamwork activities</li><li>Player development feedback</li><li>Academy announcements</li></ul><Link className="button button-gold" href="/register">Register Interest</Link></div><aside><h2>How payment works</h2><p>Membership is paid monthly. Parents will receive payment instructions after an application has been reviewed and a place has been offered.</p><p>Payment processing is not available on this website at this stage. No card information is collected.</p></aside></div></section>
  </>;
}
