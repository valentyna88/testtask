import Layout from "./Layout";
import Hero from "./components/Hero/Hero";
import Users from "./components/Users/Users";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Users />

      <section id="signup" className="signup">
        <div className="container">
          <h2 className="visually-hidden">Working with POST request</h2>
        </div>
      </section>
    </Layout>
  );
};

export default App;
