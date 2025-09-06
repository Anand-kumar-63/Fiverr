import React from "react";

const Featured = () => {
  const tags = ["web desgin", "word press", "Ai services", "Web development"];
  return (
    <div className="w-auto h-auto bg-white p-10 m-10 rounded-2xl flex flex-row justify-around items-center">
        {/* serach bar and navigations */}
      <section className="flex flex-col gap-4 mb-10">
        <h1 className="text-5xl font-semibold">
          Find the perfect <i><span className="font-light">Freelance</span></i> Project <br />
          for you Bussiness
        </h1>

        <span className="flex flex-row">
          <input
            className="outline-0 px-56 border-b-2 border-t-2 border-l-2 rounded-l-sm"
            type="text"
            placeholder="try to make a real time app"
          />
          <button className="border-b-2 border-t-2 border-r-2 px-10 py-1 rounded-r-sm ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYOXO8PRzZwjdoTPqAj5UxjSJG4bvrhHuKg&s"
              alt="serach image"
              height={20}
              width={30}
            />
          </button>
        </span>

        <span className="flex flex-row gap-4">
          <h1 className="text-sm">popular :</h1>
          <ul className="flex flex-row gap-5">
            {tags.map((items , index) => {
              return <li key={index} className="border-2 px-2 rounded-2xl text-sm">{items}</li>;
            })}
          </ul>
        </span>
      </section>
      {/* profile image section */}
      <section>
          <span>
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile image"  height={0} width={400}/>
          </span>
          <h1>Robert Downy jr.</h1>
      </section>
    </div>
  );
};

export default Featured;
