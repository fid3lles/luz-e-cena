import FooterLogo from "./FooterLogo";
import FooterInfo from "./FooterInfo";
import styles from "./Footer.module.css";
import FooterSocial from "./FooterSocial";
import FooterInstitutional from "./FooterInstitutional";
import FooterDevelopers from "./FooterDevelopers";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_info}>
          <FooterLogo />
          <FooterInfo />
          <FooterInstitutional />
          <FooterSocial />
        </div>
      </footer>
      <FooterDevelopers />
    </>
  );
};

export default Footer;
