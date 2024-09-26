import './button.css'


function Button(props){

  return  (
    <button onClick={ () => {
      props.muda(props.inicia+props.valor)
    }
  }>
      {props.valor}
    </button>
  )
}
  export default Button