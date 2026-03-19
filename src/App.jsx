import React, { useState, useMemo } from 'react';
import MemoryCard from './components/MemoryCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stories from './components/Stories';
import PersonalMessage from './components/PersonalMessage';
import ClosingSection from './components/ClosingSection';
import './index.css';

const memoriesData = [
  {
    id: 1,
    title: 'Autumn Bridge Walk',
    date: 'Oct 15, 2025',
    category: 'Travel',
    snippet: 'A beautiful morning walking across the old bridge. The colors were breathtaking.',
    image: 'assets/couple_on_bridge.png'
  },
  {
    id: 2,
    title: 'City Explorations',
    date: 'Nov 02, 2025',
    category: 'Travel',
    snippet: 'Getting lost in the city streets was our favorite part of the trip.',
    image: 'assets/couple_city_walk.png'
  },
  {
    id: 3,
    title: 'Cozy Rain Mornings',
    date: 'Dec 12, 2025',
    category: 'Milestones',
    snippet: 'Coffee, conversation, and the sound of rain outside. Pure happiness.',
    image: 'assets/couple_cafe_cozy.png'
  },
  {
    id: 4,
    title: 'Golden Hour Run',
    date: 'Jan 20, 2026',
    category: 'Family',
    snippet: 'The beach, the sunset, and endless laughter. A memory to keep.',
    image: 'assets/couple_beach_sunset.png'
  },
  {
    id: 5,
    title: 'Garden Whispers',
    date: 'Feb 14, 2026',
    category: 'Family',
    snippet: 'Valentines Day spent among the roses. A truly magical afternoon.',
    image: 'assets/couple_flower_garden.png'
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Travel', 'Family', 'Milestones'];

  const filteredMemories = useMemo(() => {
    return memoriesData.filter(m => {
      const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.snippet.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || m.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="app-main">
      <Navbar />
      <Hero />
      <Stories />
      <PersonalMessage />
      
      <main className="container" id="memories" style={{ paddingTop: '5rem' }}>
        <header className="content-header">
          <h2>Detailed Memory Collection</h2>
          <div className="search-filters">
            <input
              type="text"
              placeholder="Search memories..."
              className="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <section className="masonry-grid">
          {filteredMemories.map(memory => (
            <MemoryCard
              key={memory.id}
              {...memory}
              onClick={() => setLightboxImage(memory.image)}
            />
          ))}
        </section>
      </main>

      <ClosingSection />

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Expanded memory" className="lightbox-img" />
        </div>
      )}

      <footer>
        <div className="footer-content">
          <p className="curated-by">This collection of memories was meticulously curated for you by</p>
          <a href="https://www.instagram.com/hold_my_blooms?igsh=MXU0bG1oaG14c2hmcA==" target="_blank" rel="noopener noreferrer" className="footer-logo-link">
            <img src="favicon.jpeg" alt="Hold My Blooms Logo" className="footer-logo" />
          </a>
          <p className="footer-copyright">&copy; 2026 Hold My Blooms.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
