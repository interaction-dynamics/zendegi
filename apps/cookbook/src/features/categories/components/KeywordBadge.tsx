import { useMemo } from 'react'

import Badge from '@/components/atoms/Badge'

export interface KeywordBadgeProps {
  children: string
}

const colors = [
  { foreground: 'text-gray-800', background: 'bg-gray-100' },
  { foreground: 'text-red-800', background: 'bg-red-100' },
  { foreground: 'text-yellow-800', background: 'bg-yellow-100' },
  { foreground: 'text-green-800', background: 'bg-green-100' },
  { foreground: 'text-blue-800', background: 'bg-blue-100' },
  { foreground: 'text-indigo-800', background: 'bg-indigo-100' },
  { foreground: 'text-pink-800', background: 'bg-pink-100' },
]

const sum = (...args: number[]): number =>
  args.length > 0 ? args[0] + sum(...args.slice(1)) : 0

const findRandomColor = (words: string) => {
  const colorIndex =
    sum(...words.split(' ').map(w => w.toUpperCase().charCodeAt(0))) %
    colors.length

  return colors[colorIndex]
}

export default function KeywordBadge({ children: keyword }: KeywordBadgeProps) {
  const { foreground, background } = useMemo(
    () => findRandomColor(keyword),
    [keyword],
  )

  return <Badge className={`${foreground} ${background}`}>{keyword}</Badge>
}
