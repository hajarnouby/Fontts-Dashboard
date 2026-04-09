import React from 'react';
import { Bell, Search } from 'lucide-react';
import './Header.css';
import profile from '../assets/images/profile.svg';

const Header = () => {
  return (
    <header className="hdr">
      <div className="hcrumb">
        <span className="hbrand">Fontts</span>
        <span className="hslash">/</span>
        <span className="hpage">Dashboard</span>
      </div>

      <label className="hsearch" aria-label="Search everything">
        <Search className="hsicon" size={18} strokeWidth={1.9} />
        <input type="text" placeholder="Search everything..." />
      </label>

      <div className="hacts">
        <button className="hbtn halert" type="button" aria-label="Notifications">
          <span className="hdot" aria-hidden="true" />
          <Bell className="hicon" size={18} strokeWidth={1.9} />
        </button>

        <button className="hprof" type="button" aria-label="Open profile">
          <img src={profile} alt="Profile" className="hava" />
        </button>
      </div>
    </header>
  );
};

export default Header;
