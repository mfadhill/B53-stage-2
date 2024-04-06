import React from "react";
import Navbar from "../components/navbar";

const LandingPage = () :React.JSX.Element => {
    return (
        <div className="bg-gray-50">
        <Navbar />

        <div className="flex justify-center mt-32">
            <h1 className="text-green-400 text-6xl font-bold mb-4"> Simple Way <br />
            </h1>
        </div>
        <div className="flex justify-center">
        <h1 className="text-green-400 text-6xl font-bold"> <span className="text-blue-500"> to manage </span> personal finance </h1>
        </div>
        
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mx-24 mr-8">
                <div className="relative group overflow-hidden w-80 h-48 rounded-xl bg-white border border-gray-200 shadow-lg">
                   <img className="w-1/2 h-2/3 ml-16" src="/src/assets/images/1.png" />
                   <h1 className="ml-16 mt-4 text-lg text-blue-900 font-semibold"> 100% Secure data</h1>
                </div>
                <div className="relative group overflow-hidden p-8 w-80 h-48 rounded-xl bg-white border border-gray-200 shadow-lg">
                   <img className="w-1/2 h-2/3 ml-16" src="/src/assets/images/2.png" alt="" />
                   <h1 className="ml-16 mt-2 text-lg text-blue-900 font-semibold"> Trusted by users </h1>
                </div>
                <div className="relative group overflow-hidden p-8 w-80 h-48 rounded-xl bg-white border border-gray-200 shadow-lg">
                   <img className="w-1/2 h-2/3 ml-16" src="/src/assets/images/3.png" alt="" />
                   <h1 className="ml-20 mt-2 text-lg text-blue-900 font-semibold"> Easy to use</h1>
                </div>
                <div className="relative group overflow-hidden p-8 w-80 h-48 rounded-xl bg-white border border-gray-200 shadow-lg">
                   <img className="w-1/2 h-2/3 ml-16" src="/src/assets/images/4.png" alt="" />
                   <h1 className="ml-16 text-lg mt-2 text-blue-900 font-semibold"> App of the day</h1>
                </div>
         </div>

   <section className="text-gray-600 body-font">
  <div className="container flex flex-wrap px-5 py-10 mx-auto items-center">
    <div className="md:pr-16 md:py-10 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
         <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden shadow-sm ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <h1 className="text-2xl text-blue-700 font-semibold text-center">Transaction</h1>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-4xl font-bold text-blue-800">05</td>
              <td className="px-6 py-4 whitespace-nowrap text-lg text-blue-500">Friday Agustus 2022 </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-3xl font-bold text-blue-900">-206,000</td>
            </tr>   
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"><img className="h-12 w-12 rounded-full bg-yellow-600" src="/src/assets/images/family.png" alt="" /></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">Family <br /> <span> Jajan Malam Minggu</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 disabled:opacity-50 disabled:pointer-events-none">278,000</button>
              </td>
            </tr>   
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"><img className="h-12 w-12 rounded-full" src="/src/assets/images/burger.png" alt="" /></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">Food % beverages <br /> <span> Ayam geprek mak cik</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 disabled:opacity-50 disabled:pointer-events-none">28,000</button>
              </td>
            </tr>   
          </tbody>
        </table>
            </div>
         </div>
      </div>
      </div>
    </div>
    <div className="flex flex-col md:w-1/2 md:pl-6">
      <h1 className="title-font font-semibold text-blue-800 text-6xl"> <span className="text-green-400">Simple</span> money tracker</h1>
      <p className="text-2xl text-blue-900 mt-3">it takes seconds to record daily Transaction. put them into clear and visualized categories such as Exprense: Food, Shopping or income : Salary, Gift</p>
    </div>
  </div>
</section>


<section className="text-gray-600 body-font">
  <div className="container flex flex-wrap px-5 py-10 mx-auto items-center">
  <div className="flex flex-col md:w-1/2 md:pl-20">
      <h1 className="title-font font-semibold text-blue-800 text-6xl pl-36">Painless <span className="text-green-400">Budgeting </span></h1>
      <p className="text-2xl text-blue-900 mt-3 text-right">One report to give a clear view on your spending patterns. <br /> Understand where ypur money comes and goes with <br /> easy-to-read graphs </p>
    </div>
    
    <div className="md:pl-36 md:py-10 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
         <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden shadow-sm ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <h1 className="text-2xl text-blue-700 font-semibold text-center">Summary Exprense</h1>
          </thead>
          <tbody className="divide-y divide-gray-200">
          
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"><img className="h-12 w-12 rounded-full bg-yellow-600" src="/src/assets/images/family.png" alt="" /></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">Family <br /> <span> Jajan Malam Minggu</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 disabled:opacity-50 disabled:pointer-events-none">278,000</button>
              </td>
            </tr>   
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"><img className="h-12 w-12 rounded-full bg-blue-400" src="/src/assets/images/burger.png" alt="" /></td>
              <td className="px-6 py-4 whitespace-nowrap  text-sm text-blue-800">Food & beverages <br /> <span> Ayam geprek mak cik</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 disabled:opacity-50 disabled:pointer-events-none">28,000</button>
              </td>
            </tr>   
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"><img className="h-12 w-12 rounded-full bg-green-600" src="/src/assets/images/salary.png" alt="" /></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-800">Salary <br /> <span> Gaji Bulan Juli</span></td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 disabled:opacity-50 disabled:pointer-events-none">278,000</button>
              </td>
            </tr>   
          </tbody>
        </table>
            </div>
         </div>
      </div>
      </div>
    </div>
  </div>
</section>

      <h1 className="text-6xl text-blue-800 text-center">See what others have to say</h1>
      <section className   ="text-gray-600 body-font">
      <div className  ="container px-5 py-24 mx-auto">
         <div className   ="flex flex-wrap -m-4">

         <div className   ="p-4 lg:w-1/3 shadow-inner">
            <div className  ="h-full shadow-lg bg-opacity-75 px-8 pt-16 pb-10 rounded-lg overflow-hidden text-center relative">
               <h1 className ="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Perfect app. My wife and use it to track all our expenses and income. We generate our household accounts and budget using this fab app.</h1>
               
               <p className="font-bold text-xl mt-36">Hizamrul Zean</p>
               
            </div>
            </div>

            
            <div className ="p-4 lg:w-1/3 shadow-inner">
            <div className  ="h-full shadow-lg bg-opacity-75 px-8 pt-16 pb-10 rounded-lg overflow-hidden text-center relative">
               <h1 className ="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Perfect app. My wife and use it to track all our expenses and income. We generate our household accounts and budget using this fab app.</h1>
               
               <p className="font-bold text-xl mt-36">Ilham Fathullah</p>
               
            </div>
            </div>



            <div className ="p-4 lg:w-1/3 shadow-inner">
            <div className  ="h-full shadow-lg bg-opacity-75 px-8 pt-16 pb-10 rounded-lg overflow-hidden text-center relative">
               <h1 className ="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Perfect app. My wife and use it to track all our expenses and income. We generate our household accounts and budget using this fab app.</h1>
               
               <p className="font-bold text-xl mt-36">Hilal Akbar</p>
            </div>
            </div>


         </div>
      </div>
      </section>
      <footer>
            <div className="w-full h-16 mx-auto pt-4 shadow-xl">
            <h1 className="text-center text-2xl ">© 2022 DumbKas Co., Ltd. All rights reserved</h1>
            </div>
      </footer>
        </div>
    )
}

export default LandingPage