import { useEffect, useState } from "react"
import api from "../../services/api"

export default function Dashboard() {
  const [spots, setSpots] = useState([])

  useEffect(() => {
    async function loadSpots() {
      const user_id: any = localStorage.getItem("user")
      const response = await api.get("/dashboard", {
        headers: { user_id }
      })

      setSpots(response.data)
    }

    loadSpots()
  }, [])

  return (
    <>
      <ul className="spot-list">
        {spots.map((spot: { company: any, price: any, _id: any }) => (
          <li key={spot._id}>
            <header />
            <strong>{spot.company}</strong>
            <span>{spot.price}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
