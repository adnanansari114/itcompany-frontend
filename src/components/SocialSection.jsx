import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../style/components.css";
import SEO from "./SEO";

export default function SocialSection() {
  const socials = [
    { id: 1, name: "Facebook", icon: FaFacebookF, link: "https://www.facebook.com/theittalents" },
    { id: 2, name: "LinkedIn", icon: FaLinkedinIn, link: "https://www.linkedin.com/company/theittalents/" },
    { id: 3, name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/theittalent?igsh=eWxkYm9xNmVodHZj" },
  ];

  return (
    <>
      <SEO
        title="Top IT Talent Solutions & Custom Software Services"
        description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
        canonicalUrl="https://www.theittalent.com/"
      />
      <section className="social-section">
        <div className="social-grid">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                className="social-box"
              >
                <div className="icon-wrap">
                  <Icon />
                </div>

                <h3 className="social-name">{item.name}</h3>
                <p className="social-text">Visit {item.name}</p>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
}
