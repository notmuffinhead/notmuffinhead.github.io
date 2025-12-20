import styles from './PDFViewer.module.css'
import Link from 'next/link'

export default function PDFViewer({ src, title = "PDF Document", buttonText = "View PDF" }) {
  return (
    <div className={styles.container}>
      <div className={styles.mobileDownload}>
        <div className={styles.fileLink}>
          <Link href={src} target="_blank">
            {buttonText}
          </Link>
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