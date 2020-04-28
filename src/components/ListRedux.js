import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { startAlbums } from "../actions/albumsAction"

const ListRedux = () => {
  const albums = useSelector((state) => state.albums)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startAlbums())
    // eslint-disable-next-line
  }, [])

  const displayAlbums = albums.map((item) => (
    <li key={item.id}>{item.title}</li>
  ))

  return (
    <div>
      <h1>Albums</h1>
      <ul>{displayAlbums}</ul>
    </div>
  )
}

export default ListRedux
