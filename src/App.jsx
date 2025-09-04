import Layout from "./Layout";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <Layout>
      <Hero />

      <section id="users" className="users">
        <div className="container">
          <h2 className="visually-hidden">Working with GET request</h2>
        </div>
      </section>

      <section id="signup" className="signup">
        <div className="container">
          <h2 className="visually-hidden">Working with POST request</h2>
        </div>
      </section>
    </Layout>
  );
};

export default App;
