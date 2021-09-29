import HeadingStyle from "./style/Heading.module.css";

const Heading = ({ children, color }) => {
  return (
    <>
      <h1 className={HeadingStyle.title} style={{ color }}>
        {children}
      </h1>
    </>
  );
};

export default Heading;
