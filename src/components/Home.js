//importing useNavigate() hook which returns a function that you can use to navigate to the appropriate path 
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      {/* second parameter in the navigate function is optional, this object replaced order-summary instead of pushing it to the history stack */}
      <button onClick={() => navigate('order-summary',{replace : true})} >Place Order</button>
    </>
  )
}
