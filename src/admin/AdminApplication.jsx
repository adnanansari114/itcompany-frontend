import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "http://localhost:5000";


export default function AdminApplications({setAdmin}) {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/apply/all", {
          headers: { Authorization: "Bearer " + localStorage.getItem("adminToken") }
        });
        setApps(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchApps();
  }, []);

  return (
    <div className="admin-applications-page">
      <h2>Job Applications</h2>

      <div className="app-table">
        <table>
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Job</th><th>Resume</th><th>Date</th>
            </tr>
          </thead>

          <tbody>
            {apps.map(a => (
              <tr key={a._id}>
                <td data-label="Name">{a.name}</td>
                <td data-label="Email">{a.email}</td>
                <td data-label="Phone">{a.phone}</td>
                <td data-label="Job">{a.jobId?.title || "—"}</td>
                <td data-label="Resume">
                  {a.resume ? (
                    <a
                      href={`http://localhost:5000/${a.resume}`}
                      target="_blank"
                      rel="noreferrer"
                      download
                    >
                      Download
                    </a>
                  ) : "—"}
                </td>
                <td data-label="Date">{new Date(a.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
