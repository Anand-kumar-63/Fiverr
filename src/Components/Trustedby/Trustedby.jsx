import React from 'react';
import cn from '../../utils/cn';
const Trustedby = () => {
  const trust = ["Netflix","Google","Amazon","Meta","Ebay","P&G"];
    return (
    <div className='bg-gray-50 h-20 w-full flex flex-row gap-6 justify-center items-center'>
    {
     trust.map((items , index)=>{
        return (
        
        <>
        {/* <span  key={index} className= "font-klaika text-gray-400" >{items}</span>  */}
          <span key={index} className={cn('font-light text-gray-400 text-4xl' , items=="Netflix"&& "font-serif", items=="Google"&&'font-serif' , items=="Amazon"&&'font-light',items=="P&G"&&'font-bodoni',  items=="Meta"&& 'font-sans',items=="Ebay" && 'font-Arial-md')}>{items}</span>
          </>     
     )})
    }
    </div>
  )
}

export default Trustedby