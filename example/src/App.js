import React from 'react'
import { useMyHook } from 'use-infinite-scroll'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App