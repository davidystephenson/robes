import InputRobe from './InputRobe'
import LayoutRobe from './LayoutRobe'
import RobesProvider from './RobesProvider'

function App() {
  return (
    <RobesProvider>
      <LayoutRobe>
        <InputRobe />
      </LayoutRobe>
    </RobesProvider>
  )
}

export default App
