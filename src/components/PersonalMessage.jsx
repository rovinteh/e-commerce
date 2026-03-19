import React from 'react';

const PersonalMessage = () => {
    const startDate = new Date('2023-09-15');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <section className="personal-message-section" id="message">
            <div className="container">
                <div className="message-glass">
                    <span className="section-badge">A Heartfelt Note</span>
                    <h2 className="message-title">To My Dearest</h2>
                    <div className="message-content">
                        <p className="letter-text">
                            Looking back at all our shared moments, I'm reminded of how lucky I am to have you by my side. 
                            From the bustling streets of Tokyo to the quiet mornings in our garden, every step with you 
                            has been a treasure. This collection of memories is a small tribute to the beautiful journey 
                            we've walked together and the many more adventures that await us.
                        </p>
                        <p className="letter-text">
                            You are my greatest bloom, and I promise to hold onto our story forever.
                        </p>
                    </div>
                    <div className="counter-container">
                        <span className="counter-label">Days of Happiness Together:</span>
                        <div className="counter-number">{diffDays}</div>
                        <span className="counter-subtext">...and counting.</span>
                    </div>

                    <div className="voice-player-container">
                        <div className="voice-icon-box">
                            <img src="/favicon.jpeg" alt="Hold My Blooms Logo" className="voice-logo" />
                        </div>
                        <div className="voice-text-area">
                            <span className="voice-subtitle">A Voice from My Heart</span>
                            <h3 className="voice-title">Listen to a Soft Message</h3>
                            <div className="audio-control-bar">
                                <audio controls className="romantic-audio-player">
                                    <source src="/assets/romantic_message.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalMessage;
