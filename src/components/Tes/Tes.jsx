import React from "react";
import Tesdata from "../Tesdata";
import { Link } from "react-router-dom";

const Tes = React.forwardRef((props, ref) => {
  return (
    <section className="mt-8 mb-12 max-w-screen-xl mx-auto" ref={ref}>
      <div className="grid place-items-center">
        <div>
          <h1 className="lg:text-4xl text-3xl mb-6 text-center font-mono font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Our Courses
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          {Tesdata.map((item, index) => (
            <div key={index} className="grid gap-4 px-10 shadow-xl py-4 items-stretch">
              <div className="grid place-items-center">
                <img
                  className="rounded-md float-left w-[600px] h-[400px] object-cover"
                  src={item.src}
                  alt={item.title}
                />
              </div>
              <div className="flex justify-between gap-2">
                <div className="flex gap-2">
                  <p className="p-2 shadow rounded-md bg-slate-200 text-sm">
                    {item.time}
                  </p>
                  <p className="p-2 shadow rounded-md bg-slate-200 text-sm">
                    {item.level}
                  </p>
                </div>
                <div>
                  <p className="p-2 shadow rounded-md bg-slate-200 text-sm">
                    By {item.instructor}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p>{item.desc}</p>
                <Link className="" to="/CoursesCard">
                  <button className="py-3 text-xl bg-slate-200 text-center w-full">Get it Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Tes;
