import FooterStyle from "./style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={FooterStyle.container}>
      <div>
        <p>
          ICONs <a href="https://iconscout.com">Iconscout</a>
        </p>
        <p>Copyright © 2021 Nabil Shaahani. </p>
      </div>
    </footer>
  );
};

export default Footer;
