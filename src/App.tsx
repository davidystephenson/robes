import RobesProvider from './RobesProvider'
import TestCells from './TestCells'
import LongRowmanceRobe from './LongRowmanceRobe'
import { useState } from 'react'
import RedButtonRobe from './RedButtonRobe'
import { FaTrash } from 'react-icons/fa'
import ColorSwitchRobe from './ColorSwitchRobe'
import DeleteMenuItemRobe from './DeleteMenuItemRobe'
import MenuRobe from './MenuRobe'
import RedIconButtonRobe from './RedIconButtonRobe'
import RedMenuItemRobe from './RedMenuItemRobe'
import InlineFormRobe from './InlineFormRobe'
import LinkMenuItemRobe from './LinkMenuItemRobe'
import FileMenuItemRobe from './FileMenuItemRobe'
import useActor from 'use-actor'
import ImpressedActorRobe from './ImpressedActorRobe'
import IconImpressedActorRobe from './IconImpressedActorRobe'
import IconButtonLinkRobe from './IconButtonLinkRobe'
import IconButtonLinkableRobe from './IconButtonLinkableRobe'

const rows = Array.from({ length: 10000 }, (_, i) => {
  return {
    name: `Item ${i + 1}`,
    email: `Email ${i + 1}`
  }
})

async function logName (props: { name: string }): Promise<string> {
  console.log(props.name.toUpperCase())
  return props.name.toUpperCase()
}

function App() {
  const actor = useActor({ label: 'Log Name', action: logName })
  const [value, setValue] = useState('')
  const [filtered, setFiltered] = useState(rows)
  function onSearch(props: {
    query?: string,
  }) {
    setValue(props.query ?? '')
    const filtered = rows.filter(row => {
      if (!props.query) {
        return true
      }
      return row.name.includes(props.query)
    })
    setFiltered(filtered)
  }

  // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   console.log('a')
  // }

  return (
    <RobesProvider>
      <IconButtonLinkRobe aria-label='Test' href='https://example.com' button={{ icon: <FaTrash /> }} />
      <IconButtonLinkableRobe aria-label='Test' href='https://example.com' button={{ icon: <FaTrash /> }} />
      <IconImpressedActorRobe
        actor={actor}
        aria-label='Log Name'
        icon={<FaTrash />}
        input={{ name: value }}
      />
      <ImpressedActorRobe
        actor={actor}
        input={{ name: value }}
      >
        Log Name
      </ImpressedActorRobe>
      <InlineFormRobe
        label='Test'
        value={value}
        onValueChange={(value) => {
          onSearch({ query: value })
        }}
      />
      <RedButtonRobe>Test</RedButtonRobe>
      <RedIconButtonRobe
        aria-label='Test'
        icon={<FaTrash />}
      />
      <MenuRobe>
        <LinkMenuItemRobe>Test</LinkMenuItemRobe>
        <FileMenuItemRobe onFile={(props) => {
          console.log(props.file)
        }}>Test</FileMenuItemRobe>
        <DeleteMenuItemRobe>Test</DeleteMenuItemRobe>
        <DeleteMenuItemRobe color='blue'>Test</DeleteMenuItemRobe>
        <DeleteMenuItemRobe color='black' icon={undefined}>Test</DeleteMenuItemRobe>
        <DeleteMenuItemRobe />
        <RedMenuItemRobe>Archive</RedMenuItemRobe>
      </MenuRobe>
      <ColorSwitchRobe />
      {/*<MenuRobe loading>
        <MenuItem>Test</MenuItem>
      </MenuRobe>
      <FormRobe onSubmit={handleSubmit}>
        <InputRobe name='query' />
        <ButtonRobe type='submit'>Test</ButtonRobe>
      </FormRobe> */}
      <LongRowmanceRobe
        data={filtered}
        debug
        Cells={TestCells}
        columns={['Name!!!', 'Email']}
        onSearch={onSearch}
      />
    </RobesProvider>
  )
}

export default App
