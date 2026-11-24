import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              <Image src="/five-star-ball-logo.webp" alt="Five Star Ball Football Academy" width={90} height={90} />
              <strong>FIVE STAR BALL</strong>
            </Link>
            <p>Professional, structured football development for young players in Hayes and West London.</p>
            <div className="tagline">DEVELOP. TRAIN. COMPETE.</div>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="footer-links">
              <Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/age-groups">Age Groups</Link>
              <Link href="/training">Training</Link><Link href="/membership">Membership</Link>
              <Link href="/volunteer">Volunteers</Link><Link href="/register">Register</Link><Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <h3>Policies</h3>
            <div className="footer-links"><Link href="/privacy">Privacy Policy</Link><Link href="/safeguarding">Safeguarding</Link></div>
            <h3 className="social-title">Social</h3>
            <div className="social-placeholder" aria-label="Social media links are not yet provided">
              <span title="Instagram account not yet provided">IG</span>
              <span title="TikTok account not yet provided">TT</span>
              <span title="Facebook account not yet provided">FB</span>
              <span title="YouTube account not yet provided">YT</span>
            </div>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Botwell Green, Hayes</p>
            <a className="footer-contact" href="tel:+447742256437"><Phone /> +44 7742 256437</a>
            <a className="footer-contact" href="https://wa.me/447742256437" target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="developer-credit">
        <a href="https://5sites.co.uk" target="_blank" rel="noopener noreferrer" aria-label="Visit Five Star Sites">
          <Image src="/fss-logo.png" alt="Five Star Sites logo" width={180} height={39} />
        </a>
        <a href="https://5sites.co.uk" target="_blank" rel="noopener noreferrer">
          <strong>DEVELOPED BY FIVE STAR SITES</strong>
          <span>Professional website development by Five Star Sites.</span>
        </a>
      </div>
    </footer>
  );
}
