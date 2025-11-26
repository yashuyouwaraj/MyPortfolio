import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
import gsap from "gsap"

import {Dock, Navbar , Welcome} from "#components"
import { Finder, Resume, Safari, Terminal } from "#windows"

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  )
}

export default App