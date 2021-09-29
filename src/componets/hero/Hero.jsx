import HeroStyle from "./style/Hero.module.css";

const Hero = () => {
  return (
    <section className={HeroStyle.container}>
      <div className={HeroStyle.wrapper}>
        <h2>Front-End Developer</h2>
        <h1>Nabil shaahani</h1>
        <img
          src="..\asserts\icons\down-arrow.svg"
          alt="arrow down"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Hero;
