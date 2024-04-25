const LoginButton = ({loggedIn}) => {
  return (
    <div>{LoginButton ? <button>SAIR</button> : <button>ENTRAR</button>}</div>
  )
}

export default LoginButton
