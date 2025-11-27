import { Draggable } from "gsap/Draggable"
gsap.registerPlugin(Draggable)
import gsap from "gsap"

import {Dock, Home, Navbar , Welcome} from "#components"
import { Contact, Finder, ImageContent, Photos, Resume, Safari, Terminal ,Text} from "#windows"

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

      <Home />
    </main>
  )
}

export default App