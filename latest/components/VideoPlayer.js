import styles from './VideoPlayer.module.css'

export default function VideoPlayer({ src }) {
  return (
    <div className={styles.container}>
      <video 
        className={styles.video}
        controls 
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <p>{"Your browser doesn't support HTML5 video."}</p>
      </video>
    </div>
  );
}