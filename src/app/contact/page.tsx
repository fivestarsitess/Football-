import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin } from "lucide-react";
export const metadata: Metadata = { title: "Contact", description: "Contact Five Star Ball Football Academy in Hayes." };
export default function Page() {
  return <>
    <section className="page-hero"><div className="container"><p className="kicker">CONTACT US</p><h1>For enquiries, contact Five Star Ball.</h1></div></section>
    <section className="section"><div className="container contact-grid"><div><p>Have questions about player registration, membership, training or volunteering? Contact the Five Star Ball team for more information.</p><div className="contact-cards"><a href="tel:+447742256437"><Phone/><div><span>Telephone</span><strong>+44 7742 256437</strong></div></a><a href="https://wa.me/447742256437" target="_blank" rel="noopener noreferrer"><MessageCircle/><div><span>WhatsApp</span><strong>Contact us on WhatsApp</strong></div></a><div><MapPin/><div><span>Location</span><strong>Botwell Green, Hayes</strong></div></div></div></div><aside className="gold-panel"><h3>Five Star Ball Football Academy</h3><p>January 2027 launch<br/>Botwell Green, Hayes, West London</p><a className="button button-dark" href="https://wa.me/447742256437" target="_blank" rel="noopener noreferrer">CONTACT US ON WHATSAPP</a></aside></div></section>
  </>;
}
