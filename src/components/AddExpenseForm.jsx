import React, { useRef } from "react";

const AddExpenseForm = ({  setExpense, setDisplayExpenseForm }) => {
  const title = useRef();
  const amount = useRef();
  const date = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { 
        title: title.current.value,
        amount: amount.current.value,
        date: date.current.value
       };
       setExpense(prev => [...prev, data]);

    setDisplayExpenseForm(false);
  };
  const cancelHandler = () => {
    setDisplayExpenseForm(false);
  };

  return (
    <>
      <div className="bg-green-500 pt-4 pl-3 mt-10 mb-10 rounded-xl">
        <form onSubmit={submitHandler}>
          <div className="">
            <div className="inline-block mr-4">
              <label className="block font-bold mb-1">Title</label>
              <input type="text" className="border rounded-md pl-2 pr-3 py-1 w-72" ref={title} required />
            </div>
            <div className="inline-block pr-20">
              <label className="block font-bold mb-1">Amount</label>
              <input type="number" className="border rounded-md pl-2 pr-3 py-1 w-72" ref={amount} required />
            </div>
            <label className="block font-bold mb-1 mt-4">Date</label>
            <input type="date" className="border rounded-md pl-2 pr-3 py-1 w-72" ref={date} required />
          </div>
          <div className="flex justify-end gap-3 text-white pr-8 py-5">
            <button onClick={cancelHandler} className="bg-button px-7 py-4 rounded-xl">
              cancel
            </button>
            <button type="submit" className="bg-button px-7 py-4 rounded-xl">
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpenseForm;
