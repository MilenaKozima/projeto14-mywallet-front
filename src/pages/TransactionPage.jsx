import styled from "styled-components"
import  useKickOut  from "../hooks/useKickOut"
import { useParams } from "react-router-dom"
import { useAddTransaction } from "../services/transactions"
import useForm from "../hooks/useForm"

export default function TransactionsPage() {
  const {form, handleForm} = useForm({description: "", value: ""})
  const {type} = useParams()
  const typeText = type === "entrada" ? "Entrada" : "Saida"
  const addTransaction = useAddTransaction()
  useKickOut()

  function submitForm(e) {
    e.preventDefault()
    const body = {...form, type: type === "entrada" ? "income" : "expense"}
    addTransaction(body)
  }

  return (
    <TransactionsContainer>
      <h1>Nova {typeText}</h1>
      <form onSubmit={submitForm}>
        <input 
        data-test="registry-amount-input"
        required
        name="value"
        placeholder="Valor" 
        type="number"
        value={form.value}
        onChange={handleForm}
        />
        <input 
        required
        data-test="registry-name-input"
        placeholder="Descrição" 
        name="description"
        value={form.description}
        onChange={handleForm} 
        />
        <button data-test="registry-save" type="submit">Salvar {typeText}</button>
      </form>
    </TransactionsContainer>
  )
}

const TransactionsContainer = styled.main`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    align-self: flex-start;
    margin-bottom: 40px;
  }
`
