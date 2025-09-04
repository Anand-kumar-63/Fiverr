import React from 'react';
const Trustedby = () => {
  const trust = ["Netflix","Google","Amazon","meta","ebay"];
    return (
    <div className='bg-gray-50 h-20 w-full flex flex-row gap-10 justify-center items-center'>
    {
     trust.map((items , index)=>{
        return <span  key={index} className="text-gray-400" >{items}</span> 
     })
    }
    </div>
  )
}

export default Trustedby