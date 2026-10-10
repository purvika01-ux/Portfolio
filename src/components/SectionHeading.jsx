import React from 'react'

const SectionHeading = ({ index, eyebrow, title, highlight, description, align = 'left' }) => {
  const centered = align === 'center'

  return (
    <div className={`reveal mb-10 md:mb-12 ${centered ? 'text-center mx-auto' : ''} max-w-[640px]`}>
      <span className="eyebrow">
        <span className="text-text-muted">{index}</span>
        <span className="h-px w-6 bg-accent-soft/50" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-[2rem] md:text-[2.6rem] leading-[1.1] font-bold text-text-primary">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-[0.98rem] leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  )
}

export default SectionHeading
