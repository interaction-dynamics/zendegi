import Avatar from '@/features/users/components/Avatar'

const MAX_VISIBLE_AVATARS = 6

export interface AvatarListProps {
  shortnames: string[]
}

export default function AvatarList({ shortnames }: AvatarListProps) {
  return (
    <div className="flex -space-x-2 overflow-hidden ">
      {shortnames.slice(0, MAX_VISIBLE_AVATARS).map((shortname, index) => (
        <Avatar key={index}>{shortname}</Avatar>
      ))}
      {shortnames.length > MAX_VISIBLE_AVATARS && (
        <Avatar>+{shortnames.length - MAX_VISIBLE_AVATARS}</Avatar>
      )}
    </div>
  )
}
