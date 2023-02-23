import { Outlet, Link, useSearchParams } from "react-router-dom"

export default function Users() {

  //setSearchParams will set the params to the url
  //serchParams will get you the value of the params
  const [searchParams, setSearchParams] = useSearchParams()

  //to get hold of the filter parameter we use get function on search params
  //below statement will return true or false based on if the filter parameter is applied or not.
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      <Link to='1'><h2>User 1</h2></Link>
      <Link to='2'><h2>User 2</h2></Link>
      <Link to='3'><h2>User 3</h2></Link>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({filter : 'active'})} >Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>
      }
    </div>
  )
}
