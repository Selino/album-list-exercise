import React, { useState, useEffect } from "react"

function List() {
  const [state, setState] = useState({
    albums: []
  })

  const getAlbumList = () =>
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(data => setState({ albums: data }))
      .then(state => console.log(state))
      .catch(err => {
        console.log(err)
      })

  useEffect(() => {
    getAlbumList()
    console.log("getAlbumList")
  }, [])

  const albumItems = state.albums.map(album => (
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

export default List
