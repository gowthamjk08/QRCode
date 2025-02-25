import { useState } from "react"

export default function App(){
  let [img,setImg] = useState("");
    function gen(){    
      let inputValue = document.getElementById('link');
      let sizeValue = document.getElementById('size');    
        setImg(`http://api.qrserver.com/v1/create-qr-code/?data=${inputValue.value}!&size=${sizeValue.value}x${sizeValue.value}`)
    }
    return <div>
    <h1>QR Code Genarator</h1>
    {img && <img src={img}/>}
    <label htmlFor="link">Enter The Value</label>
    <input type="text" id="link"/>
    
    <label htmlFor="size">Enter The Size</label>
    <input type="text" id="size"/>

    <button onClick={gen}> Genarate QR Code</button>
    </div>
}

