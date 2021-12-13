import HeadingStyle from "./style/Heading.module.css";

const Heading = ({ children, color }) => {
  return (
    <>
      <h3 className={HeadingStyle.title} style={{ color }}>
        {children}
      </h3>
    </>
  );
};

export default Heading;
