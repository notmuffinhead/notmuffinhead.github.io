import styles from './SlidePlayer.module.css'

export default function SlidePlayer({ src }) {
  return (
    <div className={styles.container}>
      <div className={styles.embedWrapper}>
        <iframe 
          src={src}
          className={styles.embed}
          allowFullScreen
        />
      </div>
    </div>
  );
}