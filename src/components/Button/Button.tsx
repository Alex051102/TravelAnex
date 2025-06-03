
import "./Button.css"

const Button:React.FC<{type:string,text:string,color:string}>=({type,text,color})=>{

  function chooseColor(color:string,type:string){
    if(color=="red"){
      return "button button--red "+type
    }
    if(color=="white"){
      return "button button--white "+type
    }
    if(color=="black"){
      return "button button--black "+type
    }
  }

  return (
    <>
    <button className={chooseColor(color,type)}>
        {text}
    </button>
    </>
  )
}
export default Button