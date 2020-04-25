import React, { useState, useEffect } from "react"

function List() {
  const [state, setState] = useState({
    albums: [],
  })

  useEffect(() => {
    getAlbumList()
  }, [])

  const getAlbumList = () =>
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setState({ albums: data.slice(0, 5) }))
      .catch((err) => {
        console.log(err)
      })

  const albumItems = state.albums.map((album) => (
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
