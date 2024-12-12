import React, { useState } from 'react'
import "../Css/Weather.css"


export default function Weather() {
    let[city,setcity]=useState("Bangalore")
    let[weatherinfo,setweatherinfo]=useState(null)
    let fetchApi=async()=>{
        let apiKey="0135c0a7a5199009d87f7fcf4cd208b9";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=metric`

        try{
            let data=await fetch(apiUrl);
            let finaldata=await data.json()
            if(finaldata.cod==200){
                setweatherinfo(finaldata)
                console.log(finaldata)
            }
            else{
                console.log("hey please enter correct city name")
            }
        }
        catch(err){
            console.log(err)
        }
    }
  
  return (
    <div className='mm'>
    <div className='main'>
        <div className='inpu'>
            <div className='one'>
            <input  type="text" 
          placeholder='enter your city'
          className='demo'
          onChange={(e)=>setcity(e.target.value)}/>
    
        
        <button onClick={fetchApi} className='demo1'>Get Weather</button>
        
            </div>
       
        <div className='winfo'>
            {weatherinfo && (<>
            <h1>Cityname:{weatherinfo.name}</h1>
            <h2>Temperature:{weatherinfo.main.temp}</h2>
            <h2>Country:{weatherinfo.sys.country}</h2>
            <h2>{weatherinfo.weather[0].description}</h2>
            </>)}
            <div>
                <img src="" alt="" />
            </div>
            </div>
        </div>
        </div>
    </div>
      

  )
}