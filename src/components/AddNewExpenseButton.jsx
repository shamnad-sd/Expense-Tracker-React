import React from "react";

const AddNewExpenseButton = ({ setDisplayExpenseForm }) => {
  const addNewExpenseHandler = () => {
    setDisplayExpenseForm(true);
  };
  return (
    <>
      <div className="bg-green-500 px-60 py-5 mt-10 rounded-xl text-white mb-10">
        <button onClick={addNewExpenseHandler} className="bg-button px-8 py-4 rounded-xl hover:bg-hover">
          Add New Expense
        </button>
      </div>
    </>
  );
};
export default AddNewExpenseButton;
