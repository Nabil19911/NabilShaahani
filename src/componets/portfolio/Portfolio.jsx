import Heading from "../../UI/headings/Heading";
import MyWork from "../../UI/mywork/MyWork";
import PortfolioStyle from "./style/Portfolio.module.css";
import { portfolioData } from "./Data";

const Portfolio = () => {
  return (
    <div className={PortfolioStyle.container}>
      <Heading color={"#212835"}>My Work</Heading>
      <div className={PortfolioStyle.wrapper}>
        {portfolioData.map((el, index) => (
          <MyWork
            key={index}
            imageSrc={el.imageSrc}
            heading={el.heading}
            skills={el.skills}
            demoLink={el.demoLink}
            sourceLink={el.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
