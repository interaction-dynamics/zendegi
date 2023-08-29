export interface AvatarsProps {
  shortnames: string[]
}

export default function Avatars({ shortnames }: AvatarsProps) {
  return (
    <div className="flex -space-x-2 overflow-hidden ">
      {shortnames.map(shortname => (
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gray-300"
          key={shortname}
        >
          <span className="text-xs font-medium leading-none text-white">
            {shortname}
          </span>
        </span>
      ))}
    </div>
  )
}
