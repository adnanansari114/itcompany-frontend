
import React, { useState, useEffect } from 'react';
import '../../style/About.css';
import axios from "axios";
import ReadySection from '../../components/ReadySection';
import { Search, MapPin, Clock, Briefcase, Building2, ChevronDown } from 'lucide-react';
import SEO from '../../components/SEO';
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_APP_API_URL;

const categories = [
  "All Categories", "React.js", "Node.js", "Python", "Java", "Angular", "Vue.js",
  "DevOps", "AWS", "Data Science", "Full Stack", "Mobile (React Native / Flutter)"
];
const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Freelance", "Remote"];
const locations = ["All Locations", "Indore", "Bangalore", "Pune", "Hyderabad", "Mumbai", "Delhi", "Remote"];

const Careers = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${API}/api/jobs`);
        setAllJobs(res.data || []);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const toggleDropdown = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-wrapper') && !e.target.closest('.filters-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const filteredJobs = allJobs.filter(job => {
    if (job.isActive === false) return false;

    const techstack = (job.techstack || "").toString().toLowerCase();
    const description = (job.description || "").toString().toLowerCase();
    const company = (job.company || "").toString().toLowerCase();
    const engagementtype = (job.engagementtype || "").toString().toLowerCase();
    const location = (job.location || "").toString().toLowerCase();

    const searchLower = searchTerm.toLowerCase();

    const matchesSearch =
      techstack.includes(searchLower) ||
      description.includes(searchLower) ||
      company.includes(searchLower);

    const matchesCategory =
      selectedCategory === "All Categories" ||
      techstack.includes(selectedCategory.toLowerCase());

    const matchesType =
      selectedType === "All Types" ||
      engagementtype === selectedType.toLowerCase();

    const matchesLocation =
      selectedLocation === "All Locations" ||
      location === selectedLocation.toLowerCase();

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  if (loading) {
    return (
      <div style={{ padding: "100px 20px", textAlign: "center", fontSize: "1.5rem" }}>
        Loading amazing opportunities...
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Career Opportunities at The IT Talent"
        description="Join our team! We're hiring skilled developers, cloud engineers, and tech experts. Explore open positions and apply today."
        canonicalUrl="https://www.theittalent.com/careers"
      />

      <section className="careers-hero">
        <div className="hero-overlay"></div>
        <div className="hero-careers-content">
          <h1>Join The IT Talent Team</h1>
          <p>We are hiring passionate tech professionals to shape the future</p>
        </div>
      </section>

      <section className="filters-bar">
        <div className="container filters-container" onClick={(e) => e.stopPropagation()}>
          <div className="search-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search by tech stack, role, company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="dropdown-wrapper">
            <button className="dropdown-toggle" onClick={(e) => { e.stopPropagation(); toggleDropdown('category'); }}>
              <Briefcase size={18} />
              {selectedCategory}
              <ChevronDown size={18} className={`chevron ${openDropdown === 'category' ? 'rotated' : ''}`} />
            </button>
            {openDropdown === 'category' && (
              <div className="dropdown-menu">
                <div className="dropdown-scroll">
                  {categories.map(cat => (
                    <button key={cat} className={selectedCategory === cat ? 'active' : ''}
                      onClick={() => { setSelectedCategory(cat); setOpenDropdown(null); }}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Job Type */}
          <div className="dropdown-wrapper">
            <button className="dropdown-toggle" onClick={(e) => { e.stopPropagation(); toggleDropdown('type'); }}>
              <Clock size={18} />
              {selectedType}
              <ChevronDown size={18} className={`chevron ${openDropdown === 'type' ? 'rotated' : ''}`} />
            </button>
            {openDropdown === 'type' && (
              <div className="dropdown-menu">
                {jobTypes.map(type => (
                  <button key={type} className={selectedType === type ? 'active' : ''}
                    onClick={() => { setSelectedType(type); setOpenDropdown(null); }}>
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location */}
          <div className="dropdown-wrapper">
            <button className="dropdown-toggle" onClick={(e) => { e.stopPropagation(); toggleDropdown('location'); }}>
              <MapPin size={18} />
              {selectedLocation}
              <ChevronDown size={18} className={`chevron ${openDropdown === 'location' ? 'rotated' : ''}`} />
            </button>
            {openDropdown === 'location' && (
              <div className="dropdown-menu">
                {locations.map(loc => (
                  <button key={loc} className={selectedLocation === loc ? 'active' : ''}
                    onClick={() => { setSelectedLocation(loc); setOpenDropdown(null); }}>
                    {loc}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="results-count-mobile">{filteredJobs.length} Open Positions</div>
        </div>
      </section>

      <section className="jobs-sections">
        <div className="containers">
          <div className="results-count-desktop">
            Showing {filteredJobs.length} Active Job{filteredJobs.length !== 1 ? 's' : ''}
          </div>

          <div className="jobs-grids">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job._id} className="job-cards">
                  <div className="job-headers">
                    <h3>{job.techstack || "Software Engineer"}</h3>
                    <span className="company">
                      <Building2 size={16} /> {job.company || "The IT Talent"}
                    </span>
                  </div>

                  <div className="job-details">
                    <span className="detail">
                      <Briefcase size={16} /> {job.engagementtype || "Full-time"}
                    </span>
                    <span className="detail">
                      <MapPin size={16} /> {job.location || "Remote"}
                    </span>
                    <span className="detail">
                      <Clock size={16} /> Posted {new Date(job.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  {job.budget && (
                    <div className="budget-tag">Budget: {job.budget}</div>
                  )}

                  <button
                    className="apply-btn"
                    onClick={() => navigate(`/jobapply/${job._id}`)}
                  >
                    View & Apply
                  </button>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <h3>No matching jobs found</h3>
                <p>Try adjusting your filters or search term</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <ReadySection />
    </>
  );
};

export default Careers;