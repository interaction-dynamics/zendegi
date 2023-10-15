export interface BannerProps {
  imageUrl?: string
}

export default function Banner({ imageUrl }: BannerProps) {
  return (
    <div
      className="w-full aspect-[16/7] relative rounded-2xl bg-gray-200"
      style={{
        background: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
