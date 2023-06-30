'use client'
import { forwardRef, LegacyRef } from 'react'
import lottie from 'lottie-web'
import { defineElement } from 'lord-icon-element'

// register lottie and define custom element
defineElement(lottie.loadAnimation)

export type LordIconTrigger =
  | 'hover'
  | 'click'
  | 'loop'
  | 'loop-on-hover'
  | 'morph'
  | 'morph-two-way'

export type LordIconColors = {
  primary?: string
  secondary?: string
}

export type LordIconProps = {
  src?: string
  trigger?: LordIconTrigger
  colors?: LordIconColors
  delay?: number
  size?: number
}

const LordIcon = forwardRef(
  (
    { colors, src, size, trigger = 'morph', delay }: LordIconProps,
    ref: LegacyRef<HTMLElement> | undefined
  ) => {
    return (
      <lord-icon
        colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
        src={src}
        trigger={trigger}
        delay={delay}
        style={{
          strokeWidth: 10,
          width: size,
          height: size,
        }}
        ref={ref}
      />
    )
  }
)

LordIcon.displayName = 'LordIcon'

export default LordIcon
