import { useEffect, useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/router'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { projects } from './projects/projectList'
import { projectContent } from './projects/projectContent'
import styles from './ProjectModal.module.css'

// Card metadata by id, and the ordered list of navigable ids (those with content).
const byId = Object.fromEntries(projects.map(p => [p.id, p]))
const order = projects.map(p => p.id).filter(id => projectContent[id])

export default function ProjectModal() {
  const router = useRouter()
  const reduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const dirRef = useRef(1)
  const panelRef = useRef(null)

  useEffect(() => setMounted(true), [])

  const activeId =
    router.isReady && typeof router.query.project === 'string'
      ? router.query.project
      : null
  const isOpen = Boolean(activeId && projectContent[activeId])

  const close = useCallback(() => {
    router.replace('/', undefined, { shallow: true })
  }, [router])

  const navigate = useCallback(
    (delta) => {
      const i = order.indexOf(activeId)
      if (i === -1) return
      dirRef.current = delta
      const nextId = order[(i + delta + order.length) % order.length]
      router.replace({ pathname: '/', query: { project: nextId } }, undefined, { shallow: true })
    },
    [activeId, router]
  )

  // Esc closes, arrows navigate
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') navigate(1)
      else if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, navigate])

  // Lock background scroll while open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // Keep focus inside the panel; focus it when opened / when project changes
  useEffect(() => {
    if (isOpen && panelRef.current) panelRef.current.focus()
  }, [isOpen, activeId])

  useEffect(() => {
    if (!isOpen) return
    const onTab = (e) => {
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), iframe, video, [tabindex]:not([tabindex="-1"])'
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', onTab)
    return () => window.removeEventListener('keydown', onTab)
  }, [isOpen])

  if (!mounted) return null

  const Content = activeId ? projectContent[activeId] : null
  const meta = activeId ? byId[activeId] : null
  const title = meta ? (meta.modalTitle ?? meta.title) : ''
  const dir = dirRef.current

  const contentVariants = reduceMotion
    ? { enter: { opacity: 0 }, center: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        enter: (d) => ({ x: d > 0 ? 90 : -90, scale: 0.9, opacity: 0 }),
        center: { x: 0, scale: 1, opacity: 1 },
        exit: (d) => ({ x: d > 0 ? -90 : 90, scale: 0.9, opacity: 0 }),
      }

  return createPortal(
    <AnimatePresence>
      {isOpen && Content && (
        <motion.div
          className={styles.backdrop}
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            ref={panelRef}
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
              <button className={styles.close} onClick={close} aria-label="Close">
                {"×"}
              </button>
            </div>

            <button
              className={`${styles.chevron} ${styles.chevronLeft}`}
              onClick={() => navigate(-1)}
              aria-label="Previous project"
            >
              {"‹"}
            </button>
            <button
              className={`${styles.chevron} ${styles.chevronRight}`}
              onClick={() => navigate(1)}
              aria-label="Next project"
            >
              {"›"}
            </button>

            <div className={styles.body}>
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.div
                  key={activeId}
                  custom={dir}
                  variants={contentVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                >
                  <Content />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
