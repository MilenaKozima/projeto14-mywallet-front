import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"
import { useState } from "react"
import axios from "axios"

export default function SignUpPage() {
  const [form, setForm] = useState({name:"", email: "", password: "", confirmPassword: ""})
  const navigate = useNavigate()

  function handleForm(e){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function submitForm(e){
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      alert("As senhas não são iguais")
      return
    }

    delete form.confirmPassword
    axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, form)
    .then(res => navigate("/"))
    .catch(err => alert(err.response.data))

  }

  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input 
        required
        placeholder="Nome" 
        name="name"
        value={form.name}
        onChange={handleForm}
        />
        <input
        required 
        placeholder="E-mail" 
        type="email" 
        autoComplete="username" 
        name="email"
        value={form.email}
        onChange={handleForm}
        />
        <input 
        required
        minLength={3}
        name="password"
        placeholder="Senha" 
        type="password" 
        autoComplete="new-password"
        value={form.password}
        onChange={handleForm} 
        />
        <input 
        required
        minLength={3}
        name="confirmPassword"
        placeholder="Confirme a senha" 
        type="password" 
        autoComplete="new-password" 
        value={form.confirmPassword}
        onChange={handleForm}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/" >
        Já tem uma conta? Entre agora!
      </Link>
    </SingUpContainer>
  )
}



const SingUpContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
