export const startAlbums = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAlbums({ albums: data.slice(0, 5) }))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export const setAlbums = ({ albums: albumsArray }) => ({
  type: "SET",
  albums: albumsArray,
})
