import React from 'react'
import { useParams } from 'react-router'

const Message = () => {
    const param = useParams();
    console.log(param);
  return (
    <div>Message no:{param.messageId}</div>
    
  )
}

export default Message