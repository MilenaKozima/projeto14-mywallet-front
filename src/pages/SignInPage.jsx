import styled from "styled-components"
import { Link , useNavigate} from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"
import { useGetIn } from "../hooks/useGetIn"
import useForm from "../hooks/useForm"
import {useSignIn} from "../services/auth"

export default function SignInPage() {
  const {form, handleForm} = useForm({email: "", password: ""})
  const signin = useSignIn()
  useGetIn

  function submitForm(e){
    e.preventDefault()
    signin(form)

  }

  return (
    <SingInContainer>
      <form onSubmit={submitForm}> 
        <MyWalletLogo />
        <input
        required 
        placeholder="E-mail" 
        type="email" 
        autoComplete="username" 
        name="email"
        value={form.email}
        onChange={handleForm}
        data-test="email"
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
        data-test="password" 
        />
        <button data-test="sign-in-submit" type="submit">Entrar</button>
      </form>

      <Link to="/cadastro">
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
