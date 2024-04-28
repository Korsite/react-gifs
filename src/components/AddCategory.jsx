import {useState} from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [input, setInput] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()

        if( input.trim().length <= 1 ) return;
        onNewCategory(input.trim())
        setInput('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder={"Buscar gifs"}
                value={input}
                onChange={value => setInput(value.target.value)}
            />
        </form>
    )
}