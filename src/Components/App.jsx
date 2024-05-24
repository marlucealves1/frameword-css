import  styled  from "styled-components"
const cor = {
    preto:'#000',
    branca:'#fff',
    rosa: '#e01e8f',
    amarelo:'#eed200',
}
const Titulo1 = styled.h1`
color: purple;
`
const Titulo2 = styled.h1`
color:${cor.rosa};
color: blue;
`
const Card = styled.div`
width:400px;
height:400px;
background: pink;
border-radius:15px
margin: 0 auto; 

`
const App =()=>{
    return(
        <Card>
        <h1>Olá,mundooo!🙋‍♀️</h1>
        <h1>Hello Word!</h1>
        <h1>Hello Word!</h1>
        <h1>Hello Word!</h1>
        <h1>Hello Word!</h1>
        <h1>Hello Word!</h1>
        </Card>
    )
}
export default App; 
