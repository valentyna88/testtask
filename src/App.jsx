import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <section id="hero" className="hero">
        <div className="container">
          <h1>Test assignment for front-end developer</h1>
        </div>
      </section>

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
