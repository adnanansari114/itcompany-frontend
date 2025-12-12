import React from "react";
import './admin.css'

export default function AdminFooter(){
    return(
        <>
      <footer className="admin-footer-unique">
  <div className="admin-footer-content">
    <div className="admin-footer-left">
      <p>© {new Date().getFullYear()} The IT Talent. All rights reserved.</p>
    </div>
    <div className="admin-footer-right">
      <p>Administration Console • Secured & Powered by The IT Talent</p>
    </div>
  </div>
</footer>
        </>
    )
}