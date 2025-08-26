import styles from './TempBanner.module.css'

export default function TempBanner() {
    return (
        <div className={styles.banner}>
            <p>
                <i><b>Note:</b> this site is a work in progress, more pages and updates coming!</i>
            </p>
        </div>
    )
}