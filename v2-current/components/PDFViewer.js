import styles from './PDFViewer.module.css'
import detailStyles from '../styles/ProjectDetail.module.css'

export default function PDFViewer({ src, title = "PDF Document", buttonText = "View PDF" }) {
  return (
    <div className={styles.container}>
      <div className={styles.mobileDownload}>
        <div className={detailStyles.fileLink}>
          <a href={src} target="_blank" rel="noopener noreferrer">
            {buttonText}
          </a>
        </div>
      </div>
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
