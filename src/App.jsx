import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
import gsap from "gsap"

import {Dock, Home, Navbar , Welcome} from "#components"
import { Contact, Finder, ImageContent, Photos, Resume, Safari, Terminal, Text, ArchiveWindow } from "#windows"

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
      <Text />
      <ImageContent />
      <Contact />
      <Photos />
      <ArchiveWindow />

      <Home />
    </main>
  )
}

export default App