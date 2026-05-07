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
import Head from '../Components/Head';
import { CheckCircle, Hammer, AlertTriangle, Clock, DollarSign, Upload, Eye, Pencil, Trash2 } from 'lucide-react';

const PROJECTS = [
  { id: 1, name: 'Logo Redesign',  dInit: 'KN', dName: 'Karim N.',  cInit: 'DM', cName: 'Donald M.',  cpPct: 50,  cpLabel: '2/4', status: 'In Progress',   deadline: 'Mar 20' },
  { id: 2, name: 'Brand Identity', dInit: 'SK', dName: 'Sara K.',   cInit: 'NH', cName: 'Nour H.',    cpPct: 75,  cpLabel: '3/4', status: 'Review Needed', deadline: 'Mar 18' },
  { id: 3, name: 'UX Audit',       dInit: 'LM', dName: 'Lina M.',   cInit: 'TC', cName: 'Tech Co.',   cpPct: 25,  cpLabel: '1/4', status: 'In Progress',   deadline: 'Mar 25' },
  { id: 4, name: 'Motion Intro',   dInit: 'OF', dName: 'Omar F.',   cInit: 'BC', cName: 'Bloom Cafe', cpPct: 100, cpLabel: '4/4', status: 'Completed',     deadline: 'Mar 10' },
  { id: 5, name: '3D Product',     dInit: 'HS', dName: 'Hana S.',   cInit: 'SX', cName: 'StartupX',   cpPct: 0,   cpLabel: '0/4', status: 'Not Started',   deadline: 'Mar 30' },
];

const ACTIVITY = [
  { Icon: CheckCircle,  clr: '#22C55E', bg: 'rgba(34,197,94,0.12)',   event: 'Checkpoint Approved',  detail: 'Logo Project CP2',      time: '2m ago'  },
  { Icon: Hammer,       clr: '#A020F0', bg: 'rgba(160,32,240,0.12)',  event: 'New Bid Submitted',    detail: 'Karim N. → Donald M.',  time: '8m ago'  },
  { Icon: AlertTriangle,clr: '#FE0149', bg: 'rgba(254,1,73,0.12)',    event: 'Strike Issued',        detail: 'User @lina_des',        time: '15m ago' },
  { Icon: Clock,        clr: '#F59E0B', bg: 'rgba(245,158,11,0.12)',  event: 'Bid Timer Expiring',   detail: 'E-commerce Brief',      time: '22m ago' },
  { Icon: DollarSign,   clr: '#22C55E', bg: 'rgba(34,197,94,0.12)',   event: 'Payment Released',     detail: 'EGP 1,200 CP3',         time: '1h ago'  },
  { Icon: Upload,       clr: '#60A5FA', bg: 'rgba(96,165,250,0.12)',  event: 'Urgent Money Upload',  detail: 'Omar F. Brand Kit',     time: '2h ago'  },
];

const ALERTS = [
  'Logo Redesign — CP2 overdue',
  'Brand Identity — CP3 overdue',
  'UX Audit — CP1 overdue',
];

const NEW_USERS = [
  { name: 'Karim Nabil',   type: 'Designer', initials: 'KN' },
  { name: 'Sara Mahmoud',  type: 'Client',   initials: 'SM' },
  { name: 'Omar Fathy',    type: 'Designer', initials: 'OF' },
];

const REVENUE = [
  { label: 'Commission',    amount: 'EGP 4,200', pct: 50 },
  { label: 'Courses',       amount: 'EGP 2,800', pct: 33 },
  { label: 'Subscriptions', amount: 'EGP 1,400', pct: 17 },
];

const statusClr = (s) => {
  if (s === 'Completed')     return 'green';
  if (s === 'Review Needed') return 'yellow';
  if (s === 'Not Started')   return 'grey';
  return 'purp';
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fontts</title>
        <meta name="description" content="Find real design jobs faster with Fontts. Get paid securely, showcase your portfolio, and grow through real client work built for designers." />
        <meta name="keywords" content="freelancing, jobs design, designers" />
        <link rel="icon" type="image/x-icon" href={logo} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet" />
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
              <StatCard title="Total Designers"  value="1,284"     icon={TotalDesigners}    line="+12 this week"     lclr="green" arrow={require('../assets/videos/arrowup.gif')} />
              <StatCard title="Active Clients"   value="847"       icon={ActiveClients}     line="+34 this week"     lclr="green" arrow={require('../assets/videos/arrowup.gif')} />
              <StatCard title="Active Projects"  value="203"       icon={ActiveProjects}    line="12 overdue"        lclr="rase"  arrow={require('../assets/videos/warn.gif')}    />
              <StatCard title="Revenue Today"    value="EGP 24,800" icon={RevenueToday}     line="+8% vs yesterday"  lclr="green" arrow={require('../assets/videos/arrowup.gif')} />
            </div>

            <div className='row sa pad1'>
              <StatCard title="Urgent Work Listings" value="156"      icon={UrgentWorkListings} line="23 sold today"     lclr="green"  arrow={require('../assets/videos/warng.gif')}  />
              <StatCard title="Open Briefs"           value="89"       icon={OpenBriefs}         line="41 expire in 24hr" lclr="rase"   arrow={require('../assets/videos/warn.gif')}   />
              <StatCard title="Flagged Users"         value="7"        icon={FlaggedUsers}       line="Needs review"      lclr="yellow" arrow={require('../assets/videos/warny.gif')}  />
              <StatCard title="Support Tickets"       value="3 urgent" icon={SupportTickets}     line="+8% vs yesterday"  lclr="green"  arrow={require('../assets/videos/arrowup.gif')} />
            </div>

            <Head h="Recent Projects" ar="/المشاريع الأخيرة" />

            <div className="row hm-lower">
              <div className="hm-tbl-wrap">
                <table className="hm-tbl">
                  <thead>
                    <tr className="thr">
                      <th>Project Name</th>
                      <th>Designer</th>
                      <th>Client</th>
                      <th>Checkpoint</th>
                      <th>Status</th>
                      <th>Deadline</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROJECTS.map(p => (
                      <tr key={p.id} className="tbr">
                        <td className="s3">{p.name}</td>
                        <td>
                          <div className="tbl-ava-cell">
                            <div className="tbl-ava center">{p.dInit}</div>
                            <span className="tbl-ava-cell__name s3">{p.dName}</span>
                          </div>
                        </td>
                        <td>
                          <div className="tbl-ava-cell">
                            <div className="tbl-ava center">{p.cInit}</div>
                            <span className="tbl-ava-cell__name s3">{p.cName}</span>
                          </div>
                        </td>
                        <td>
                          <div className="pgb-cell">
                            <div className="pgb-wrap">
                              <div className="pgb" style={{ width: `${p.cpPct}%` }} />
                            </div>
                            <span className="pgb-lbl s4">{p.cpLabel}</span>
                          </div>
                        </td>
                        <td><span className={`spl spl--${statusClr(p.status)} s3`}>{p.status}</span></td>
                        <td className="s4">{p.deadline}</td>
                        <td>
                          <div className="actr row">
                            <button className="actr__btn" type="button"><Eye size={14} strokeWidth={1.8} /></button>
                            <button className="actr__btn" type="button"><Pencil size={14} strokeWidth={1.8} /></button>
                            <button className="actr__btn actr__btn--del" type="button"><Trash2 size={14} strokeWidth={1.8} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="hm-feed col">
                <div className="hm-feed__hdr row sb">
                  <div className="col">
                    <h4 className="s2">Platform Activity</h4>
                    <p className="hm-feed__sub s4">Live feed</p>
                  </div>
                </div>
                <div className="col hm-feed__list">
                  {ACTIVITY.map((a, i) => (
                    <div key={i} className="ait row">
                      <div className="ait__ico center" style={{ background: a.bg }}>
                        <a.Icon size={16} strokeWidth={1.8} color={a.clr} />
                      </div>
                      <div className="col ait__info">
                        <span className="s3 ait__name">{a.event}</span>
                        <span className="s4 ait__detail">{a.detail}</span>
                      </div>
                      <span className="s4 ait__time">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row hm-cards">
              <div className="hm-card col">
                <h4 className="s2">Checkpoint Alerts</h4>
                <div className="col hm-alrt-list">
                  {ALERTS.map((a, i) => (
                    <div key={i} className="hm-alrt row">
                      <AlertTriangle size={16} strokeWidth={1.8} color="#F59E0B" />
                      <span className="s4 hm-alrt__text">{a}</span>
                      <span className="s3 hm-alrt__link purp">Offer Backup?</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hm-card col">
                <h4 className="s2">New Users Today</h4>
                <h3 className="s1 hm-nu__count">23</h3>
                <p className="s4 hm-nu__sub">14 Designers / 9 Clients</p>
                <div className="hm-nu__bar row">
                  <div className="hm-nu__bar-purp" style={{ width: '61%' }} />
                  <div className="hm-nu__bar-green" style={{ width: '39%' }} />
                </div>
                <div className="col hm-nu__list">
                  {NEW_USERS.map((u, i) => (
                    <div key={i} className="row hm-nu__row">
                      <div className="hm-nu__ava center s2">{u.initials}</div>
                      <span className="s3 hm-nu__name">{u.name}</span>
                      <span className={`hm-nu__type s3 ${u.type === 'Designer' ? 'purp' : 'green'}`}>{u.type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hm-card col">
                <h4 className="s2">Revenue Today</h4>
                <h3 className="s1 green">EGP 8,400</h3>
                <div className="col hm-rev__list">
                  {REVENUE.map((r, i) => (
                    <div key={i} className="row hm-rev__row sb">
                      <span className="s4 hm-rev__lbl">{r.label}</span>
                      <span className="s3 hm-rev__amt">{r.amount}</span>
                      <div className="hm-rev__bar-wrap">
                        <div className="hm-rev__bar" style={{ width: `${r.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
