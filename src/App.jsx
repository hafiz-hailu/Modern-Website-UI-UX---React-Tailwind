import styles from './style';
import {
  Billing,
  Business,
  Button,
  CarDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GatStarted,
  Hero,
  Navbar,
  Stats,
  Testimonial,
} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/* Navbar */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Multiple sections */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CarDeal />
        <Testimonial />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
