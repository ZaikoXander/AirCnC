import { useState } from "react"
import api from "../../services/api"

export default function Login() {
  const [email, setEmail] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const response = await api.post("/sessions", { email })

    const { _id } = response.data

    localStorage.setItem("user", _id)
  }

  return (
    <>
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder='Seu melhor e-mail'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}