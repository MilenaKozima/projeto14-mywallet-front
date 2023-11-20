import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo" 
import axios from "axios"
import { useGetIn } from "../hooks/useGetIn";
import useForm from "../hooks/useForm"
import {useSignUp} from "../services/auth"

export default function SignUpPage() {
  const {form, handleForm} = useForm({name:"", email: "", password: "", confirmPassword: ""})
  useGetIn()
  const signUp = useSignUp()

  function submitForm(e){
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      alert("As senhas não são iguais")
      return
    }

    delete form.confirmPassword
    signup(form)

  }

  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input 
        data-test="name"
        required
        placeholder="Nome" 
        name="name"
        value={form.name}
        onChange={handleForm}
        />
        <input
        data-test="email"
        required 
        placeholder="E-mail" 
        type="email" 
        autoComplete="username" 
        name="email"
        value={form.email}
        onChange={handleForm}
        />
        <input 
        data-test="password"
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
        data-test="conf-password" 
        required
        minLength={3}
        name="confirmPassword"
        placeholder="Confirme a senha" 
        type="password" 
        autoComplete="new-password" 
        value={form.confirmPassword}
        onChange={handleForm}
        />
        <button data-test="sign-up-submit" type="submit">Cadastrar</button>
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
