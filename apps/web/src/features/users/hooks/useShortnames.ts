import User from '../types/User'

const shortenName = (name: string) => {
  const names = name.split(' ')

  if (names.length === 1) {
    return name[0][0] + name[1][0]
  }

  return name.substring(0, 1)
}

export default function useShortnames(users: User[]) {
  return users.map(user => shortenName(user.name))
}
