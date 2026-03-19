import React, { useState } from 'react';

const storiesData = [
  {
    id: 1,
    title: "How We Met",
    location: "Tokyo, Japan",
    date: "September 15, 2023",
    image: "assets/how_we_met.png",
    description: "It all started with a chance encounter in the bustling streets of Tokyo. A single moment that sparked a beautiful journey.",
    fullNarrative: "Tokyo was where it all began. Amidst the neon lights and the bustling energy of Shibuya, our eyes met for the first time. It wasn't just a trip; it was the start of the most important journey of my life. I still remember the way the city lights reflected in your eyes, and how even in the middle of the world's busiest crossing, it felt like time had completely stopped just for us."
  },
  {
    id: 2,
    title: "Special Moments",
    location: "Art Studio",
    date: "A Flourishing Bond",
    image: "assets/special_moment.png",
    description: "Painting our world together, canvas by canvas. Every shared hobby and laugh added a new color to our lives.",
    fullNarrative: "Our art studio became our sanctuary. Between the splashes of paint and the endless laughter, we discovered that the most beautiful masterpieces aren't the ones hanging on walls, but the life we are building together, one shared brushstroke at a time. Every color we choose represents a promise to keep creating, keep exploring, and keep growing side by side."
  },
  {
    id: 3,
    title: "Today",
    location: "Home Comforts",
    date: "The Present",
    image: "assets/today.png",
    description: "Now, every morning with a quiet coffee is a celebration of how far we've come. Our today is as bright as ever.",
    fullNarrative: "These quiet mornings are what I cherish the most. The simple scent of coffee, the soft sunlight pouring through our window, and the peaceful knowing that you are by my side. Looking back at where we started only makes me more grateful for where we are now. Our story is still being written, and every today is a page I never want to end."
  }
];

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section className="stories-section" id="stories">
      <div className="container">
        <header className="content-header">
          <span className="section-badge">Narratives</span>
          <h2>Our Heartfelt Stories</h2>
          <p className="section-description">Deep dives into the milestones that define our journey together.</p>
        </header>

        <div className="stories-container">
          {storiesData.map((story, index) => (
            <div key={story.id} className={`story-card ${index % 2 !== 0 ? 'story-reverse' : ''}`}>
              <div className="story-image-area">
                <img src={story.image} alt={story.title} className="story-image" />
                <div className="story-image-overlay"></div>
              </div>
              <div className="story-content-area">
                <span className="story-meta">{story.location} | {story.date}</span>
                <h3 className="story-title">{story.title}</h3>
                <p className="story-text">{story.description}</p>
                <button 
                  className="btn-text"
                  onClick={() => setActiveStory(story)}
                >
                  Read Full Story
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeStory && (
        <div className="story-modal" onClick={() => setActiveStory(null)}>
          <div className="story-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveStory(null)}>&times;</button>
            <div className="modal-body">
              <img src={activeStory.image} alt={activeStory.title} className="modal-story-image" />
              <div className="modal-text-content">
                <span className="story-meta">{activeStory.location} | {activeStory.date}</span>
                <h2 className="modal-story-title">{activeStory.title}</h2>
                <div className="modal-separator"></div>
                <p className="modal-full-text">{activeStory.fullNarrative}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Stories;
