import Home from './pages/Home';
import Projects from './pages/Projects';
import Design from './pages/Design';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';
import { useState } from 'react';

type PageKey = 'home' | 'projects' | 'design' | 'about' | 'contact';

function App() {
  const [page, setPage] = useState<PageKey>('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home />;
      case 'projects': return <Projects />;
      case 'design': return <Design />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
    }
  };

  return (
    <Layout currentPage={page} onNavChange={setPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
