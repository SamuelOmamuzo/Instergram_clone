import style from "styled-components"

const SignUp = () =>{
    return(
        <Container>
            <Wrapper>
                <Image/>
                <Card>
                    <Logo>Instergram</Logo>
                    <Avater/>
                    <Button>Continue as SamuelOmamuzo</Button>
                    <Register>Not SamuelOmamuzo? <Span>Switch accounts</Span></Register>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default SignUp;

const Span = style.div`
    color: skyblue;
    margin-left:10px;
`

const Register = style.div`
    display:flex;
    font-weight:bold;
    font-size:16px;
    color:lightgrey;
    margin-top:25px;
`

const Button = style.div`
    width:70%;
    height:40px;
    background-color:skyblue;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    color:white;
    margin-top:20px;
`

const Avater = style.div`
    width:100px;
    height:100px;
    background-color:grey;
    border-radius:50%;
    margin-top:20px;
`

const Logo = style.div`
    font-size:40px;
    font-weight:bold;
`

const Card = style.div`
    width:45%;
    border:1px solid lightgrey;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:40px 0px 40px 0px;
    border-radius:2px;
`

const Image = style.div`
    width:50%;
    height:100%;
    background-color:lightgrey;
`

const Wrapper = style.div`
    width:65%;
    height:95%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const Container = style.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`