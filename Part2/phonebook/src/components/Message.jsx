import React from 'react'
import "./Message.css"

const Message=({message, type})=> {
   if(message===null){
       return null;
   }else if(type==="error"){
      return <p className={type}>{message}</p>
   }else if(type==="success"){
    return <p className={type}>{message}</p>
   }
}

export default Message
