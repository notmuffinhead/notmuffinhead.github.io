import styles from './SlidePlayer.module.css'

export default function SlidePlayer({ src, title = "Embedded slides" }) {
  return (
    <div className={styles.container}>
      <div className={styles.embedWrapper}>
        <iframe
          src={src}
          className={styles.embed}
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  );
}