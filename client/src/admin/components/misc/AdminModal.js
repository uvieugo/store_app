import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function AdminModal(props) {
  const [open, setOpen] = React.useState(props.showModal)

  return (
    <Modal
      trigger={<Button>Show Modal</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
  )
}

export default AdminModal
