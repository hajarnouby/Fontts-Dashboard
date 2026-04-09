import React from 'react';
import './homepage.css';
import { Helmet } from 'react-helmet';
import logo from '../assets/images/logow.svg';
import Menu from '../Components/Menu';
import Header from '../Components/Header';
import Title from '../Components/Title';

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
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
