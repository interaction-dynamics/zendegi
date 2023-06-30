import Avatar from '@/features/user/components/Avatar'

import MenuItem from '@/components/atoms/MenuItem'
import Menu from '@/components/atoms/Menu'

const UserMenu: React.FC = () => {
  // const user = useAppSelector(getCurrentUser)

  // if (!user) {
  //   return <></>
  // }

  return (
    <Menu
      as='button'
      menuButtonClassName='flex max-w-xs rounded-full items-center cursor-pointer border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors focus:ring-primary-500'
      menuButton={<Avatar email='thibault.friedrich@gmail.com' />}
    >
      <MenuItem>foo</MenuItem>
      <MenuItem>bar</MenuItem>
    </Menu>
  )
}

export default UserMenu
