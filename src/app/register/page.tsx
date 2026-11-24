import type { Metadata } from "next";
import FormEmbed from "@/components/FormEmbed";
export const metadata: Metadata = { title: "Register Your Interest", description: "Register interest for the Five Star Ball January 2027 football academy intake in Hayes." };
export default function Page() {
  return <>
    <section className="page-hero"><div className="container"><p className="kicker">JANUARY 2027 INTAKE</p><h1>Register your interest.</h1><p>Join Five Star Ball Football Academy for our January 2027 intake at Botwell Green, Hayes.</p></div></section>
    <section className="section"><div className="container">
      <div className="registration-facts"><span>Ages 7–9</span><span>Ages 10–12</span><span>Ages 13–15</span><span>£35 monthly</span><span>90-minute session</span><span>90-player capacity</span></div>
      <div className="application-note">Submitting an application does not automatically guarantee a place. Applications are reviewed by the Five Star Ball team.</div>
      <FormEmbed src="https://eu.forms.app/form/6b05e3f23d2b294a90dc067d" title="Five Star Ball Player Registration" />
    </div></section>
  </>;
}
