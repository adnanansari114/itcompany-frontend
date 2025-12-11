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
    {
      id: 4,
      country: "UAE",
      name: "Dubai Office",
      address: "Al Khaleej St - Al Corniche - Deira - Dubai",
      phone: "+971 54 750 9138",
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