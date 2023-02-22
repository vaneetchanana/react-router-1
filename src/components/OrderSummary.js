import { useNavigate } from "react-router-dom"

export default function OrderSummary() {
    const navigate = useNavigate()
    return (
        <>
            <div>Order Comfirmed</div>
            {/* with -1 in the navigate function you wil go back to the previous path */}
            <button onClick={() => navigate(-1)}>Back</button>
        </>
    )
}
