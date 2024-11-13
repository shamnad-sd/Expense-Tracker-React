import React from "react";

const ExpenceList = ({ title, amount, date }) => {
  const NewDate = new Date(date);
  const monthName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const [dayDate, month, year] = [NewDate.getDate(), monthName[NewDate.getMonth()], NewDate.getFullYear()];

  return (
    <div>
      <div className="bg-black pr-4 pl-4 py-5 text-white ">
        <div className="bg-result flex rounded-xl text-center text-white">
          <div className="size-20 ms-2 my-2 py-2 border-2 rounded-xl bg-neutral-800">
            <p className="">
              <p className="font-bold text-sm ">{month}</p>
              <p className="text-sm">{year}</p>
              <p className="text-xl font-bold">{dayDate}</p>
            </p>
          </div>
          <div className="content-center font-bold ms-4 text-2xl">
            <p className="">{title}</p>
          </div>
          <div className="content-center ms-auto me-2 font-bold">
            <p className="bg-button border-2 rounded-xl px-5 py-1.5">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenceList;
