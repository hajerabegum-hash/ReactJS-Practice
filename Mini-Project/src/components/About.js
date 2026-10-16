import React, { useState } from "react";

const About = () => {
  // JavaScript React hook for interactive tabs
  const [activeTab, setActiveTab] = useState("story");

  const tabContent = {
    story: {
      title: "Our Humble Beginnings",
      text: "Founded in 2015, our restaurant began as a small family-owned food truck roaming the city streets. Driven by a deep passion for authentic, locally-sourced ingredients, we opened our permanent brick-and-mortar home to bring communities together around exceptional culinary dishes.",
    },
    vision: {
      title: "The Culinary Vision",
      text: "We believe that dining is an art form. Our kitchen merges traditional, time-honored cooking methods with modern gastronomy. Every plate is crafted intentionally, ensuring minimized environmental waste and maximized rich flavor profiles.",
    },
    values: {
      title: "Our Core Pillars",
      text: "Sustainability, hospitality, and culinary excellence guide everything we do. We build direct relationships with local farmers, treat our staff like family, and welcome every guest into an open, inclusive dining experience.",
    },
  };

  return (
    <section className="about-section" aria-label="About Our Restaurant">
      <div className="about-container">
        {/* Header Block */}
        <header className="about-header">
          <span className="about-subtitle">Discover Our Story</span>
          <h1 className="about-main-title">
            Crafting Culinary Memories Since 2015
          </h1>
          <div className="about-divider"></div>
        </header>

        {/* Content Layout Grid */}
        <div className="about-content-grid">
          {/* Left Side: Visual Image Collages */}
          <div className="about-image-wrapper">
            <div className="about-image-card about-main-img">
              <img
                src="https://ik.imagekit.io/idrowysjp/Dining%20Room22.avif"
                alt="Our busy restaurant dining room ambiance"
              />
            </div>
            <div className="about-image-card about-accent-img">
              <img
                src="https://ik.imagekit.io/idrowysjp/logo.jpg"
                alt="Head chef plating a signature culinary dish"
              />
            </div>
          </div>

          {/* Right Side: Interactive Editorial Copy */}
          <article className="about-info-content">
            <h2>Where Tradition Meets Innovation</h2>
            <p className="about-intro-paragraph">
              Welcome to our home. We provide more than just exceptional food;
              we curate memorable dining experiences structured around vibrant
              atmosphere and impeccable service.
            </p>

            {/* JavaScript Tab Control Controls */}
            <div className="about-tab-buttons">
              {Object.keys(tabContent).map((tabKey) => (
                <button
                  key={tabKey}
                  className={`about-tab-btn ${activeTab === tabKey ? "active" : ""}`}
                  onClick={() => setActiveTab(tabKey)}
                >
                  {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
                </button>
              ))}
            </div>

            {/* Dynamic Tab Body */}
            <div className="about-tab-body">
              <h3>{tabContent[activeTab].title}</h3>
              <p>{tabContent[activeTab].text}</p>
            </div>

            {/* Performance Indicators / Stats Grid */}
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Years Active</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">45+</span>
                <span className="about-stat-label">Local Farms Partnered</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">3</span>
                <span className="about-stat-label">Culinary Awards</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;

// // const About = () => {
// //   return (
// //     <div>
// //       {/* <h1>I m About us page</h1>
// //       <h2>Hello! swiggy</h2> */}

// //     </div>
// //   );
// // };

// // export default About;

// import React, { useState } from 'react';
// import styles from './About.module.css';

// const About = () => {
//   // State to handle the interactive story tabs
//   const [activeTab, setActiveTab] = useState('story');

//   const tabContent = {
//     story: {
//       title: "Our Humble Beginnings",
//       text: "Founded in 2015, our restaurant began as a small family-owned food truck roaming the city streets. Driven by a deep passion for authentic, locally-sourced ingredients, we opened our permanent brick-and-mortar home to bring communities together around exceptional culinary dishes.",
//     },
//     vision: {
//       title: "The Culinary Vision",
//       text: "We believe that dining is an art form. Our kitchen merges traditional, time-honored cooking methods with modern gastronomy. Every plate is crafted intentionally, ensuring minimized environmental waste and maximized rich flavor profiles.",
//     },
//     values: {
//       title: "Our Core Pillars",
//       text: "Sustainability, hospitality, and culinary excellence guide everything we do. We build direct relationships with local farmers, treat our staff like family, and welcome every guest into an open, inclusive dining experience.",
//     }
//   };

//   return (
//     <section className={styles.aboutSection} aria-label="About Our Restaurant">
//       <div className={styles.container}>

//         {/* Header Block */}
//         <header className={styles.aboutHeader}>
//           <span className={styles.subtitle}>Discover Our Story</span>
//           <h1 className={styles.mainTitle}>Crafting Culinary Memories Since 2015</h1>
//           <div className={styles.divider}></div>
//         </header>

//         {/* Content Layout Grid */}
//         <div className={styles.contentGrid}>

//           {/* Left Side: Visual Image Collages */}
//           <div className={styles.imageWrapper}>
//             <div className={`${styles.imageCard} ${styles.mainImg}`}>
//               <img
//                 src="https://unsplash.com"
//                 alt="Our busy restaurant dining room ambiance"
//               />
//             </div>
//             <div className={`${styles.imageCard} ${styles.accentImg}`}>
//               <img
//                 src="https://unsplash.com"
//                 alt="Head chef plating a signature culinary dish"
//               />
//             </div>
//           </div>

//           {/* Right Side: Interactive Editorial Copy */}
//           <article className={styles.infoContent}>
//             <h2>Where Tradition Meets Innovation</h2>
//             <p className={styles.introParagraph}>
//               Welcome to our home. We provide more than just exceptional food; we curate memorable dining experiences structured around vibrant atmosphere and impeccable service.
//             </p>

//             {/* JavaScript Tab Control Controls */}
//             <div className={styles.tabButtons}>
//               {Object.keys(tabContent).map((tabKey) => (
//                 <button
//                   key={tabKey}
//                   className={`${styles.tabBtn} ${activeTab === tabKey ? styles.activeTab : ''}`}
//                   onClick={() => setActiveTab(tabKey)}
//                 >
//                   {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
//                 </button>
//               ))}
//             </div>

//             {/* Dynamic Tab Body */}
//             <div className={styles.tabBody}>
//               <h3>{tabContent[activeTab].title}</h3>
//               <p>{tabContent[activeTab].text}</p>
//             </div>

//             {/* Performance Indicators / Stats Grid */}
//             <div className={styles.statsGrid}>
//               <div className={styles.statItem}>
//                 <span className={styles.statNumber}>10+</span>
//                 <span className={styles.statLabel}>Years Active</span>
//               </div>
//               <div className={styles.statItem}>
//                 <span className={styles.statNumber}>45+</span>
//                 <span className={styles.statLabel}>Local Farms Partnered</span>
//               </div>
//               <div className={styles.statItem}>
//                 <span className={styles.statNumber}>3</span>
//                 <span className={styles.statLabel}>Culinary Awards</span>
//               </div>
//             </div>

//           </article>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;
