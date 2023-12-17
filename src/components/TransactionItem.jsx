import styled from "styled-components"
import dayjs from "dayjs"

export default function TransactionItem ({transaction}){
  const {date, description, value, type} = transaction
  
  return (
        <ItemContainer>
        <div>
          <span>{dayjs(date).format("DD/MM")}</span>
          <strong data-teste="registry-name">{description}</strong>
        </div>
        <Value data-teste="registry-amount" color={type}>{value.toFixed(2).toString().replace(".", ",")}</Value>
      </ItemContainer>
    )
}

const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "income" ? "green" : "red")};
`
const ItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`