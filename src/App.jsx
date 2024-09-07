import React from "react";
import styles from "./styles";

import {
  Navbar,
  Hero,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <div className="bg-primary text-white w-full overflow-hidden select-none">
      {/* Navbar */}
      <nav className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </nav>
      {/* End of navbar */}

      {/* Hero section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      {/* End of hero */}

      {/* Sections */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
      {/* Sections */}
    </div>
  );
};

export default App;
