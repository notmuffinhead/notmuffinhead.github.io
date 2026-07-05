import styles from './Chip.module.css'

export default function Chip({ children, className = '' }) {
  return <span className={`${styles.chip} ${className}`}>{children}</span>
}
