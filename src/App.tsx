import { useCallback, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './sections/Footer';
import { BackgroundFX } from './components/BackgroundFX';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';
import { CommandPalette } from './components/CommandPalette';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  const openPalette = useCallback(() => setPaletteOpen(true), []);
  const closePalette = useCallback(() => setPaletteOpen(false), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <BackgroundFX />
      <CustomCursor />
      <ScrollProgress />
      <Navbar onOpenPalette={openPalette} />
      <CommandPalette open={paletteOpen} onClose={closePalette} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>

      <BackToTop />
    </>
  );
}

export default App;
