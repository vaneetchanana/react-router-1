import { useParams } from "react-router-dom"

export default function UserDetail() {
  //useParams() hook returns an object with key value pairs, this object contains key value pairs of the dynamic params from the current url. 
  const params = useParams()

  //It is important to note here that userId on the params object correponds to the dynamic segment we have specified in the route config :userId
  const userId = params.userId

  //you can also destructure itc
  // const {useId} = useParams()
  return (
    <div>Details of the user {userId}</div>
  )
}
