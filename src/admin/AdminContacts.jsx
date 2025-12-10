import React, { useEffect, useState } from "react";
import axios from "axios";
import './admin.css';
import SEO from '../components/SEO';
const API = import.meta.env.VITE_APP_API_URL;

export default function AdminContacts(setIsAdmin) {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const token = localStorage.getItem("adminToken");

    const res = await axios.get(`${API}/api/contact/all`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    setList(res.data);
  };

  return (
    <>
    <SEO
                title="Contacts"
                description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
                canonicalUrl="https://www.theittalent.com/admin/admincontact"
            />
    <div className="admin-contact-page">
      <h2>Contact Messages</h2>

      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Location</th>
              <th>Company Location</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {list.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone || "—"}</td>
                <td>{item.company || "—"}</td>
                <td>{item.userLocation}</td>
                <td>{item.companyLocation}</td>
                <td>{item.message}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
