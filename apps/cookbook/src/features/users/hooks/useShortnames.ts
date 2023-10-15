import User from '../types/User'

const shortenName = (name: string) => {
  const names = name.split(' ')

  return names.length > 1 ? names[0][0] + names[1][0] : name.substring(0, 2)
}

export default function useShortnames(users: User[]) {
  return users.map(user => shortenName(user.name))
}
