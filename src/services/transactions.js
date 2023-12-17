import { useState } from "react"
import AuthContext from "../context/AuthContext"
import axios from "axios"
import { useEffect } from "react"

export function useGetTransaction() {
    const [transactions, setTransactions] = useState(undefined)
    const { token } = useContext(AuthContext)

    const config = { headers: { Authorization: `Bearer ${token}` } }
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`, config)
            .then(res => setTransactions(res.data))
            .catch(err => alert(err.response.data))
    }, [])

    return transactions
}