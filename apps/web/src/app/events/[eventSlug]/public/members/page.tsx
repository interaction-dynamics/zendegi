import Page from '@/components/atoms/Page'
import Navigation from '@/components/atoms/Navigation'
import List from '@/components/molecules/List'
import Item from '@/components/molecules/Item'
import Avatar from '@/features/users/components/Avatar'

export default function MembersPage() {
  return (
    <Page navigation={<Navigation>Members</Navigation>}>
      <List>
        <Item title="Aurelie Poulin" icon={<Avatar>AP</Avatar>} />
        <Item title="Aurelie Poulin" />
        <Item title="Aurelie Poulin" />
        <Item title="Aurelie Poulin" />
      </List>
    </Page>
  )
}
