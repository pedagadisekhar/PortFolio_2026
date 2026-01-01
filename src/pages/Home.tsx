import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

const Home: React.FC = () => (
  <div className="layout">
    <Sidebar />
    <main className="main-content">
      <Hero />
    </main>
  </div>
);

export default Home;
  

