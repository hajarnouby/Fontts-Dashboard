import React from 'react';
import './homepage.css';
import { Helmet } from 'react-helmet';
import logo from '../assets/images/logow.svg';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import Title from '../Components/Title';
import StatCard from './../Components/StatCard';
import FlaggedUsers from '../assets/images/FlaggedUsers.svg';
import OpenBriefs from '../assets/images/OpenBriefs.svg';
import UrgentWorkListings from '../assets/images/UrgentWorkListings.svg';
import RevenueToday from '../assets/images/RevenueToday.svg';
import ActiveProjects from '../assets/images/ActiveProjects.svg';
import ActiveClients from '../assets/images/ActiveClients.svg';
import TotalDesigners from '../assets/images/TotalDesigners.svg';
import SupportTickets from '../assets/images/SupportTickets.svg';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fontts</title>
        <meta
          name="description"
          content="Find real design jobs faster with Fontts. Get paid securely, showcase your portfolio, and grow through real client work built for designers."
        />
        <meta name="keywords" content="freelancing, jobs design, designers" />
        <link rel="icon" type="image/x-icon" href={logo} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <div className="home-page">
        <div className="home-page__sidebar">
          <Menu />
        </div>

        <div className="home-page__main">
          <Header />

          <main className="home-page__content">
            <Title title="Dashboard" subtitle="Platform overview — Sunday, March 22, 2025" />
            <div className='row sa pad1'>
            <StatCard title="Total Designers" value="1,284" icon={TotalDesigners} line="+12 this week" lclr="green" arrow={require('../assets/videos/arrowup.gif')} />
            <StatCard title="Active Clients" value="847" icon={ActiveClients} line="+34 this week" lclr="green" arrow={require('../assets/videos/arrowup.gif')} />
            <StatCard title="Active Projects" value="203" icon={ActiveProjects} line="12 overdue" lclr="rase" arrow={require('../assets/videos/warn.gif')} />
            <StatCard title="Revenue Today" value="EGP 24,800" icon={RevenueToday} line="+8% vs yesterday" lclr="green" arrow={require('../assets/videos/arrowup.gif')} />
            </div>
            <div className='row sa pad1'>
            <StatCard title="Urgent Work Listings" value="156" icon={UrgentWorkListings} line="23 sold today" lclr="green" arrow={require('../assets/videos/warng.gif')} />
            <StatCard title="Open Briefs" value="89" icon={OpenBriefs} line="41 expire in 24hr" lclr="rase" arrow={require('../assets/videos/warn.gif')} />
            <StatCard title="Flagged Users" value="7" icon={FlaggedUsers} line="Needs review" lclr="yellow" arrow={require('../assets/videos/warny.gif')} />
            <StatCard title="Support Tickets" value="3 urgent" icon={SupportTickets} line="+8% vs yesterday" lclr="green" arrow={require('../assets/videos/arrowup.gif')} />
            </div>

          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
