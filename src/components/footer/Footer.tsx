import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Jaydev</div>
      <div className={styles.text}>Jay creative thoughts agency © All rights reseverved</div>
    </div>
  );
};

export default Footer;
