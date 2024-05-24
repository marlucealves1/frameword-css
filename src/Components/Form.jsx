import React from 'react'

import { Formulario } from "../Styles/Form";

const Form = () => {
    const [nome, setNome]= React.useState('')
return(
    <Formulario>
   <label htmlFor="nome">Nome</label>
   <label onChangeCapture={({})=>setNome(target.value)} value={nome} html="nome"type="text"/>
   <input type="text" />
   <label htmlFor="email">Email</label>
   <input type="text" />
   <label htmlFor="senha">senha</label>
   <input id="senha" type="passaword" />
   {nome}
   </Formulario>
)
}
export default Form;