import { Link } from "react-router-dom"
import styled from "styled-components"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignUpPage() {

  const [form, setForm] = useState({name: "", email: "", password: "", confirmPass: ""});

  function handleForm(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function submitForm(e){
    e.preventDefault()

    delete form.confirmPass
    axios.post(`${process.env.VITE_API_URL}/cadastro`, form)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data))
  }

  return (
    <SingUpContainer>
      <form onSubmit={submitForm}>
        <MyWalletLogo />
        <input 
        placeholder="Nome" 
        name="name"
        type="text"
        required 
        value={form.name}
        onChange={handleForm}
        />
        <input 
        placeholder="E-mail" 
        type="email" 
        name="email"
        value={form.email}
        onChange={handleForm}
        required
        />
        <input 
        placeholder="Senha" 
        required
        minLength={3}
        type="password"
        name="password" 
        autoComplete="new-password" 
        value={form.password}
        onChange={handleForm}
        />
        <input 
        placeholder="Confirme a senha" 
        required
        minLength={3}
        type="password" 
        autocomplete="new-password" 
        value={form.confirmPass}
        onChange={handleForm}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/">
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
