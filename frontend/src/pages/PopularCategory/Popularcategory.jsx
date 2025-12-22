import React from "react";
const Popularcategory = () => {
  const btn = [
    "Digital Marketing",
    "Web services",
    "Logo Desgin",
    "Social media Marketing",
  ];
  
  // const coursedetais = {
  //   description:"lorem",
  // }
  // const ratingsystem = ()=>{
  // }

  return (
    <div>
      <h1>Explore Popular Categories on Fiverr</h1>
      <section>
        <ul>
          {btn.map((item, index) => {
            return (
              <li key={index}>
                <button>{item}</button>
              </li>
            );
          })}
        </ul>
      </section>
     <section>
      <div>
       <span>
        <img src="" alt="" />
       </span>
        <div>
            <span>
            <img src="" alt="" />
            <h1>username</h1>
            </span>
            {/* rating button */}
            <button id="cardtbns" className="rounded-xl ">
                 
            </button>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Popularcategory;
