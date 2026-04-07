import React, { useState } from 'react';
import './Menu.css';
import logo from '../assets/images/logop.svg';

const mainNavigation = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard',
  },
  {
    id: 'users',
    label: 'Users',
    icon: 'users',
    children: [
      { id: 'designers', label: 'Designers' },
      { id: 'clients', label: 'Clients' },
      { id: 'coordinators', label: 'Coordinators' },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: 'projects',
  },
  {
    id: 'checkpoints',
    label: 'Checkpoints',
    icon: 'checkpoints',
  },
  {
    id: 'urgent-board',
    label: 'Urgent Board',
    icon: 'urgent',
  },
  {
    id: 'pages',
    label: 'Pages',
    icon: 'pages',
    children: [
      { id: 'all-pages', label: 'All Pages' },
      { id: 'page-editor', label: 'Page Editor' },
    ],
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'reports',
  },
  {
    id: 'moderation',
    label: 'Moderation',
    icon: 'moderation',
  },
];

const systemNavigation = [
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings',
  },
  {
    id: 'help',
    label: 'Help',
    icon: 'help',
  },
];

const languages = ['EN', 'AR'];

const Icon = ({ name, className = '' }) => {
  switch (name) {
    case 'dashboard':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.75" y="4.75" width="5.25" height="5.25" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
          <rect x="14" y="4.75" width="5.25" height="5.25" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
          <rect x="4.75" y="14" width="5.25" height="5.25" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
          <rect x="14" y="14" width="5.25" height="5.25" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case 'users':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="16.5" cy="10.25" r="2.1" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.75 18c.75-2.6 2.7-3.9 5.85-3.9S15.7 15.4 16.45 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M15.45 17.7c.45-1.75 1.8-2.7 4.05-2.85" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'projects':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4.75 7.25h5.1l1.55 1.85h7.85v8.9a1.25 1.25 0 0 1-1.25 1.25H6a1.25 1.25 0 0 1-1.25-1.25z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M4.75 7.25v-1A1.25 1.25 0 0 1 6 5h3.85l1.3 1.45" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'checkpoints':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="4.75" width="14" height="14.5" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
          <path d="m8.35 12.1 2.25 2.25 5.05-5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'urgent':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M13.25 3.75 6.5 13.1h4.15l-1.15 7.15L17.5 10.9h-4.05l-.2-7.15Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'pages':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7.25 4.75h7.55l4.2 4.2v10.3H7.25z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.8 4.75v4.2H19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 13h5.8M10 16.2h4.35" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'reports':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5.75 18.75V12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M11.95 18.75V6.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M18.15 18.75V9.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'moderation':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 20V5.6A1.6 1.6 0 0 1 8.6 4h8.55l-1.95 3.95 1.95 3.95H8.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'settings':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M19.1 13.2v-2.4l-1.95-.55a5.8 5.8 0 0 0-.55-1.35l1-1.75-1.7-1.7-1.75 1a5.8 5.8 0 0 0-1.35-.55L12.2 3.9H9.8l-.55 1.95a5.8 5.8 0 0 0-1.35.55l-1.75-1-1.7 1.7 1 1.75a5.8 5.8 0 0 0-.55 1.35l-1.95.55v2.4l1.95.55c.12.47.3.92.55 1.35l-1 1.75 1.7 1.7 1.75-1c.43.25.88.43 1.35.55l.55 1.95h2.4l.55-1.95c.47-.12.92-.3 1.35-.55l1.75 1 1.7-1.7-1-1.75c.25-.43.43-.88.55-1.35l1.95-.55Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      );
    case 'help':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.8 9.2a2.55 2.55 0 1 1 4.2 2c-.7.55-1.45 1.1-1.45 2.05" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="12" cy="16.65" r=".9" fill="currentColor" />
        </svg>
      );
    case 'language':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.8 12h14.4M12 4.2c2.25 2.4 3.35 5 3.35 7.8S14.25 17.4 12 19.8c-2.25-2.4-3.35-5-3.35-7.8S9.75 6.6 12 4.2Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'search':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="5.35" stroke="currentColor" strokeWidth="1.7" />
          <path d="m16.05 16.05 3.2 3.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case 'panel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.75" y="5.25" width="14.5" height="13.5" rx="2.75" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10.25 5.25v13.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="m14.55 12 2-2m-2 2 2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'chevron':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m8.5 10.25 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'spark':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m12 4 1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m18 4 .45 1.55L20 6l-1.55.45L18 8l-.45-1.55L16 6l1.55-.45L18 4Z" fill="currentColor" />
          <path d="m6 16 .45 1.55L8 18l-1.55.45L6 20l-.45-1.55L4 18l1.55-.45L6 16Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};

const Menu = () => {
  const [isCompact, setIsCompact] = useState(false);
  const [openGroups, setOpenGroups] = useState({
    users: true,
    pages: true,
  });
  const [activeMainItem, setActiveMainItem] = useState('urgent-board');
  const [activeSubItem, setActiveSubItem] = useState('');
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const toggleGroup = (groupId) => {
    setOpenGroups((currentGroups) => ({
      ...currentGroups,
      [groupId]: !currentGroups[groupId],
    }));
  };

  const handleMainItemClick = (item) => {
    if (item.children) {
      if (isCompact) {
        setActiveMainItem(item.id);
        setActiveSubItem('');
        return;
      }

      toggleGroup(item.id);
      return;
    }

    setActiveMainItem(item.id);
    setActiveSubItem('');
  };

  const handleSubItemClick = (parentId, childId) => {
    setOpenGroups((currentGroups) => ({
      ...currentGroups,
      [parentId]: true,
    }));
    setActiveMainItem('');
    setActiveSubItem(childId);
  };

  return (
    <aside className={`menu-panel${isCompact ? ' is-compact' : ''}`}>
      <div aria-hidden="true" />

      <div className="menu-panel__scroll col">
        <header className="menu-header row">
          <div className="menu-brand row">
            <div className="menu-brand__logo center">
              <img src={logo} alt="Logo" className="menu-brand__logo-image" />
            </div>
          </div>

          <button
            className={`menu-icon-button center${isCompact ? ' is-active' : ''}`}
            type="button"
            aria-label={isCompact ? 'Expand sidebar' : 'Collapse sidebar'}
            aria-expanded={!isCompact}
            onClick={() => setIsCompact((currentState) => !currentState)}
          >
            <Icon name="panel" className="menu-icon menu-icon--small" />
          </button>
        </header>

        <span className="menu-badge s3">Moderator Panel</span>

        <label className="menu-search row" aria-label="Search navigation">
          <Icon name="search" className="menu-icon menu-icon--muted" />
          <input type="text" placeholder="Search..." />
          <span className="menu-search__shortcut s3">Ctrl F</span>
        </label>

        <nav className="menu-nav col" aria-label="Main navigation">
          {mainNavigation.map((item) => {
            const isOpen = Boolean(openGroups[item.id]);
            const isActive = activeMainItem === item.id;

            return (
              <div key={item.id} className="menu-nav__group">
                <button
                  className={`menu-nav__item${isActive ? ' is-active' : ''}${isOpen ? ' is-open' : ''}`}
                  type="button"
                  onClick={() => handleMainItemClick(item)}
                  title={isCompact ? item.label : undefined}
                >
                  <span className="menu-nav__item-copy row">
                    <Icon name={item.icon} className="menu-icon" />
                    <span className="menu-nav__text s2">{item.label}</span>
                  </span>

                  {item.children ? (
                    <Icon name="chevron" className={`menu-icon menu-icon--chevron${isOpen ? ' is-open' : ''}`} />
                  ) : null}
                </button>

                {item.children ? (
                  <div className={`menu-submenu${isOpen ? ' is-open' : ''}`}>
                    <div className="menu-submenu__inner">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          className={`menu-submenu__item s4${activeSubItem === child.id ? ' is-active' : ''}`}
                          type="button"
                          onClick={() => handleSubItemClick(item.id, child.id)}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <span className="menu-label s3">System</span>

        <div className="menu-system col">
          {systemNavigation.map((item) => (
            <button
              key={item.id}
              className={`menu-nav__item menu-nav__item--minor${activeMainItem === item.id ? ' is-active' : ''}`}
              type="button"
              onClick={() => {
                setActiveMainItem(item.id);
                setActiveSubItem('');
              }}
              title={isCompact ? item.label : undefined}
            >
              <span className="menu-nav__item-copy row">
                <Icon name={item.icon} className="menu-icon" />
                <span className="menu-nav__text s2">{item.label}</span>
              </span>
            </button>
          ))}

          <div className="menu-nav__item menu-nav__item--minor menu-nav__item--static" title={isCompact ? 'Language' : undefined}>
            <span className="menu-nav__item-copy row">
              <Icon name="language" className="menu-icon" />
              <span className="menu-nav__text s2">Language</span>
            </span>

            <div className="menu-language row" role="group" aria-label="Select language">
              {languages.map((language) => (
                <button
                  key={language}
                  className={`menu-language__pill${activeLanguage === language ? ' is-active' : ''}`}
                  type="button"
                  onClick={() => setActiveLanguage(language)}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>
        </div>

        <article className="menu-status">
          <div className="menu-status__title row">
            <Icon name="spark" className="menu-icon menu-icon--spark" />
            <h3 className="s2">Platform Status</h3>
          </div>

          <p className="menu-status__copy s2">
            <span className="menu-status__dot" aria-hidden="true" />
            All systems operational
          </p>
        </article>

        <button className="menu-profile row" type="button">
          <div className="menu-profile__avatar center s2">SM</div>

          <div className="menu-profile__copy">
            <strong className="s2">Sara Mahmoud</strong>
            <span className="s4">sara@fontts.com</span>
          </div>

          <Icon name="chevron" className="menu-icon menu-icon--small" />
        </button>
      </div>
    </aside>
  );
};

export default Menu;
