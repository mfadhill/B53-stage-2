import React from "react"

const AddTransaction = () : React.JSX.Element => {
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
         <div className="md:w-1/3 max-w-sm">
                <h1 className="text-2xl font-bold text-blue-600 mb-4 ">Add Transaction</h1>
                <span className="text-blue-700 mb-3"> <p>Amount</p></span>
                <input className="text-sm w-full px-2 py-2 border border-solid border-blue-700 rounded bg-blue-50 mb-3" type="text" placeholder="0" />
                <span className="text-blue-700 mb-3"> <p> Date</p></span>
                <input className="text-sm w-full px-2 py-2 border border-solid border-blue-700 rounded bg-blue-50 mb-3" type="date"/>
                <span className="text-blue-700"> <p> Category</p></span>
                <input className="text-sm w-full px-2 py-2 border border-solid border-blue-700 rounded bg-blue-50 mb-3" type="text" placeholder="Category" />
                <span className="text-blue-700"> <p>Note</p></span>
                <input className="text-sm w-full px-2 py-2 border border-solid border-blue-700 rounded bg-blue-50 mb-3" type="text" placeholder="Note" />
         <div className="mt-4 flex justify-between font-semibold text-sm">
        </div>
        <div className="text-center w-full">
        <button className="bg-blue-400 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
             Submit
        </button>
        </div>
        <div className="mt-4 pl-16 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account ? Klik <span className="font-bold font-blue">Here</span> 
        </div>
      </div>
    </section>
    )
  }
  export default AddTransaction