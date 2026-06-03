import { motion } from 'framer-motion'

export default function SectionHead({ idx, title }) {
  return (
    <motion.div
      className="section-head"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="idx">{idx}</span>
      <h2>
        <span className="punc">// </span>
        {title}
      </h2>
      <span className="rule" />
    </motion.div>
  )
}
