import "../style/components.css";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SEO from './SEO';

export default function LocationSection() {
  const locations = [
    {
      id: 1,
      country: "India",
      name: "Head Office — Indore",
      address: "Nipania Main Rd, Madhya Pradesh, India",
      phone: "+91 97543 64386",
      flag: "India",
    },
    // {
    //   id: 2,
    //   country: "USA",
    //   name: "US Branch — New York",
    //   address: "5th Avenue, Manhattan, New York 10001",
    //   phone: "+1 555 234 7788",
    //   flag: "Us",
    // },
    // {
    //   id: 3,
    //   country: "UK",
    //   name: "UK Office — London",
    //   address: "221B Baker Street, London NW1 6XE",
    //   phone: "+44 20 7946 0999",
    //   flag: "🇬🇧",
    // },
    {
      id: 4,
      country: "UAE",
      name: "Dubai Office",
      address: "Business Bay, Dubai, UAE",
      phone: "+91 91791 00280",
      flag: "🇦🇪",
    },
  ];

  return (
    <>
      <SEO
        title="The IT Talent - Top IT Staffing & Development Company"
        description="14+ years experience in AI, Cloud, Web Development & Staff Augmentation"
      />
      <section className="location-section">
        <div className="location-wrapper">
          {locations.map((loc) => (
            <div key={loc.id} className="location-item">
              <div className="location-flag">{loc.flag}</div>
              <h3 className="location-name">{loc.name}</h3>
              <p className="location-detail">
                <FaMapMarkerAlt /> {loc.address}
              </p>
              <p className="location-detail">
                <FaPhoneAlt /> {loc.phone}
              </p>
              <span className="location-country">{loc.country}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}