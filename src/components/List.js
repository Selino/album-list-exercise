import React, { Component } from "react"

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => this.setState({ albums: data }))
      .then(console.log("poop"))
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const albumItems = this.state.albums.map(album => (
      <li key={album.id}>
        <p>{album.title}</p>
      </li>
    ))
    return (
      <div>
        <h1>Albums</h1>
        <ul>{albumItems}</ul>
      </div>
    )
  }
}
