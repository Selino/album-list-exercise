import React from "react"
import Gif from "./Gif"

// export const Primary = () => <Gif>Poop</Gif>

// This default export determines where your story goes in the story list
export default {
  title: "Gif",
  component: Gif,
}

const Template = (args) => <Gif {...args} />

export const FirstStory = Template.bind({})

FirstStory.args = {
  /* the args you need here will depend on your component */
}
