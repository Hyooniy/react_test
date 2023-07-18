(function(){

function ProImg({color}){
  console.log(color);
  return(
    <img src ={ `../images/${color}.png`} alt = {'${color}'} />
  )
}
function ProColor({colors}){
  function optionColor(){
    return colors.map((item,index) => {
      return(
        <option value={item} key={index}>{item}</option>)}
    )
  }
  return(
    <p className = "form">
      <select id = "color">
        {optionColor()}
      </select>
    </p>
  )
}

function ProSize(){
  return(
    <p className = "form">
      <label htmlFor = "size"> size : </label>
      <button type = "button">
        110
      </button>
    </p>
  )
}

function App(){
  //state
  const [color,setColor] = React.useState('violet')
  const [colors,setColors] = React.useState(window.data.AllColor)
  const [size,setSize] = React.useState('115')
  const [sizes,setSizes] = React.useState(window.data.AllSize)
  return(
    <div className = "custom">
      <div className = "pic">
        <ProImg color={color}/>
      </div>
      <div className ="selector">
        <ProColor 
        color={color}
        colors={colors}
        size={size}
        sizes={sizes}/>
        </div>
        <div className ="button">
          <ProSize 
        color={color}
        colors={colors}
        size={size}
        sizes={sizes}/>
        </div>
    </div> 
  )
}





//export

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>
)
})()
