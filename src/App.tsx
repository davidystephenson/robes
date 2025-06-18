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

const rows = Array.from({ length: 10000 }, (_, i) => {
  return {
    name: `Item ${i + 1}`,
    email: `Email ${i + 1}`
  }
})

function App() {
  const [value, setValue] = useState('')
  const [filtered, setFiltered] = useState(rows)
  function filter(props: {
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
      <InlineFormRobe
        label='Test'
        value={value}
        onValueChange={(value) => {
          filter({ query: value })
        }}
      />

      <RedButtonRobe>Test</RedButtonRobe>
      <RedIconButtonRobe
        aria-label='Test'
        icon={<FaTrash />}
      />
      <MenuRobe>
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
        Cells={TestCells}
        columns={['Name', 'Email']}
        filter={filter}
      />
    </RobesProvider>
  )
}

export default App
