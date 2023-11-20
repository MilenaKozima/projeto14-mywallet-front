import { useState } from "react";

export default function useForm(inicialForm) {
    const [form, setForm] = useState(inicialForm)

    function handleForm(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    return {form, handleForm}
}