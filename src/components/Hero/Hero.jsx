import Button from "../Button/Button";

const Hero = () => {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="container">
        <h1 className="hero-title">Test assignment for front-end developer</h1>
        <p className="hero-text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button href="#signup">Sign up</Button>
      </div>
    </section>
  );
};
export default Hero;
