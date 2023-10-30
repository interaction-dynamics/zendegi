'use client'
import KeywordBadge from '@/features/categories/components/KeywordBadge'

export interface KeywordListProps {
  keywords: string[]
}

export default function KeywordList({ keywords }: KeywordListProps) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      {keywords.map(keyword => (
        <KeywordBadge key={keyword}>{keyword}</KeywordBadge>
      ))}
    </div>
  )
}
