import React, { useState, useEffect } from 'react';
import '../../style/About.css';
import axios from "axios";
import ReadySection from '../../components/ReadySection';
import { Search, MapPin, Clock, Briefcase, Building2, ChevronDown } from 'lucide-react';
const API = import.meta.env.VITE_APP_API_URL;
import SEO from '../../components/SEO';

import { useNavigate } from "react-router-dom";

const categories = ["Web Development", "Artificial Intelligence", "Cloud & DevOps", "Data Engineering", "Design"];
const jobTypes = ["Full-time", "Part-time", "Contract", "Remote"];
const locations = ["Indore", "Bangalore", "Pune", "Remote", "Hyderabad", "Mumbai"];

const Careers = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Job Category");
  const [selectedType, setSelectedType] = useState("All Job Type");
  const [selectedLocation, setSelectedLocation] = useState("All Job Location");
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const res = await axios.get(`${API}/api/jobs`);
  //       // const res = await axios.get("http://localhost:5000/api/jobs");
  //       console.log("API Response Data:", res.data);
  //       setAllJobs(res.data);
  //     } catch (err) {
  //       console.log("Error fetching jobs:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchJobs();
  // }, []);

useEffect(() => {
  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API}/api/jobs`);
      console.log("API Response Data:", res.data);
      setAllJobs(res.data);
    } catch (err) {
      console.log("Error fetching jobs:", err);
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
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All Job Category" || job.category === selectedCategory;

    const matchesType =
      selectedType === "All Job Type" || job.jobType === selectedType;

    const matchesLocation =
      selectedLocation === "All Job Location" || job.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesType && matchesLocation;
  });

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading jobs...</h2>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Career Opportunities at The IT Talent"
        description="Join The IT Talent team! Discover exciting career opportunities for experienced software developers, data scientists, and cloud engineers. Apply now."
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
              placeholder="Search jobs or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>

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
                    <button
                      key={cat}
                      className={selectedCategory === cat ? 'active' : ''}
                      onClick={() => { setSelectedCategory(cat); setOpenDropdown(null); }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="dropdown-wrapper">
            <button className="dropdown-toggle" onClick={(e) => { e.stopPropagation(); toggleDropdown('type'); }}>
              <Clock size={18} />
              {selectedType}
              <ChevronDown size={18} className={`chevron ${openDropdown === 'type' ? 'rotated' : ''}`} />
            </button>

            {openDropdown === 'type' && (
              <div className="dropdown-menu">
                <div className="dropdown-scroll">
                  {jobTypes.map(type => (
                    <button
                      key={type}
                      className={selectedType === type ? 'active' : ''}
                      onClick={() => { setSelectedType(type); setOpenDropdown(null); }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
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
                <div className="dropdown-scroll">
                  {locations.map(loc => (
                    <button
                      key={loc}
                      className={selectedLocation === loc ? 'active' : ''}
                      onClick={() => { setSelectedLocation(loc); setOpenDropdown(null); }}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="results-count-mobile">{filteredJobs.length} Jobs</div>
        </div>
      </section>

      {/* Job Listing */}
      <section className="jobs-sections">
        <div className="containers">
          <div className="results-count-desktop">
            Showing {filteredJobs.length} Jobs Available
          </div>

          <div className="jobs-grids">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div key={job._id} className="job-cards">
                  <div className="job-headers">
                    <h3>{job.title}</h3>
                    <span className="company"><Building2 size={16} /> The IT Talent</span>
                  </div>

                  <div className="job-details">
                    <span className="detail"><Briefcase size={16} /> {job.jobType}</span>
                    <span className="detail"><MapPin size={16} /> {job.location}</span>
                    <span className="detail"><Clock size={16} /> Posted: {new Date(job.createdAt).toDateString()}</span>
                  </div>

                  {/* <button
                    className="apply-btn"
                    onClick={() => window.location.href = `/jobapply/${job._id}`}
                  >
                    Apply Now
                  </button> */}
                  <button
                    className="apply-btn"
                    onClick={() => navigate(`/jobapply/${job._id}`)}
                  >
                    Apply Now
                  </button>

                </div>
              ))
            ) : (
              <div className="no-jobs">
                <h3>No jobs found</h3>
                <p>Try adjusting your filters</p>
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
