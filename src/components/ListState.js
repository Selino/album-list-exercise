import React, { useState } from "react"
// import AlbumForm from "./AlbumForm"
import { withFormik, Form, Field, Formik } from "formik"
import * as Yup from "yup"

export default function List() {
  const [state, setState] = useState({
    albums: [],
  })

  // useEffect(() => {
  //   getAlbumList("https://jsonplaceholder.typicode.com/albums")
  // }, [])

  async function fetchData(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setState({ albums: data.slice(0, 5) })
    } catch (error) {
      console.log(error)
    }
  }

  const albumItems = state.albums.map((album) => (
    <li key={album.id}>
      <p>{album.title}</p>
    </li>
  ))

  const albumListForm = ({ values, errors, touched }) => {
    return (
      <Form>
        <div>
          {touched.url && errors.url && <p>{errors.url}</p>}
          <Field type='text' name='url' placeholder='url' />
        </div>
        <div>
          {touched.butt && errors.butt && <p>{errors.butt}</p>}
          <Field type='text' name='butt' placeholder='butt' />
        </div>
        <input type='submit' value='Submit' />
      </Form>
    )
  }

  const AlbumForm = (props) => {
    const FormWithFormik = withFormik({
      mapPropsToValues({ url, butt }) {
        return {
          url: url || "",
          butt: butt || "",
        }
      },
      validationSchema: Yup.object().shape({
        url: Yup.string().url().required("Url is required."),
        butt: Yup.string().email().required("Butt is required."),
      }),
      handleSubmit(values) {
        fetchData(values.url)
      },
    })(albumListForm)
    return <FormWithFormik />
  }

  return (
    <div>
      <h1>Album List</h1>
      <ul>{albumItems}</ul>
      <AlbumForm baseUrl='' />
    </div>
  )
}
