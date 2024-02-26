import styles from './loading.module.css';

const Loading = () => {
  return (
    <main className={`${styles.wrapper} ${styles.loading}`}>
      <div className={styles.post1}>
        <div>
          <div className={styles.container1}>
            <div className={styles.top1}>
              <div className={styles.imgContainer1}>
                <div className={styles.img1} />
              </div>

              <div className={styles.category} />
            </div>

            <div className={styles.bottom1}>
              <div className={styles.title1} />
              <div className={styles.desc1} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.post1}>
        <div>
          <div className={styles.container1}>
            <div className={styles.top1}>
              <div className={styles.imgContainer1}>
                <div className={styles.img1} />
              </div>

              <div className={styles.category} />
            </div>

            <div className={styles.bottom1}>
              <div className={styles.title1} />
              <div className={styles.desc1} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.post2}>
        <div>
          <div>
            <div className={styles.container2}>
              <div className={styles.top2}>
                <div className={styles.imgContainer2}>
                  <div className={styles.img2} />
                </div>

                <div className={styles.category} />
              </div>
              <div className={styles.bottom2}>
                <div className={styles.title2} />
                <div className={styles.desc2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
