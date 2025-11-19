type PageKey = 'home' | 'projects' | 'design' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageKey;
  onNavChange: (page: PageKey) => void;
}

const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: 'home', label: 'Home' },
  { key: 'projects', label: 'Projects' },
  { key: 'design', label: 'UI/UX' },
  { key: 'about', label: 'About' },
  { key: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, onNavChange }: NavbarProps) {
  return (
    <header className="navbar" aria-label="Primary navigation">
      <div className="nav-brand">Alex Nguyen</div>
      <nav>
        <ul className="nav-list">
          {NAV_ITEMS.map(item => (
            <li key={item.key}>
              <button
                className={`nav-link ${currentPage === item.key ? 'active' : ''}`}
                onClick={() => onNavChange(item.key)}
                aria-current={currentPage === item.key ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
