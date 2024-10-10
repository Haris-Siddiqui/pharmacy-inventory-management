import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const SalesReportComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  //   const [categoryData ,setCategoryData]= useState()
  const categorData = ["tablet", "injuction", "capsule"];
  const [isModal, setIsModal] = useState(false);
  const date = new Date(); // assuming 'd' is a date string or timestamp
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: 'numeric'
  });
  const data = [
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",

    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
    {
      name: "wall light",
      categor: "light",
      price: "400",
      stock: "50",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Sales Report</h1>
      


      <div className="w-full mt-5 flex justify-center items-center ">
        <input
          type="search"
          className=" w-1/2 p-2 border focus:outline-none cursor-pointer rounded-lg"
          placeholder="Search..."
        />
      </div>

      <table className={`w-full border  border-black mt-5`}>
        <thead>
          <tr className=" text-start ">
            <th className="pb-2">Customer Name</th>
            <th className="pb-2">Invoice Id</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Price</th>
            <th className="pb-2">Total</th>
            <th className="pb-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="border-t border-[#232323] shadow-slate-50 ">
              <th className="text-base  font-normal ">Jhon </th>
              <th className="text-base  font-normal ">23 </th>
              <th className="text-base  font-normal ">{formattedDate}</th>
              <th className="text-base  font-normal">1321</th>
              <th className="text-base  font-normal">132146</th>
              <th>
                <div className="flex justify-center items-center gap-5 ">
                <FaEye />
                  <BiEdit
                    className="cursor-pointer text-lg hover:text-amber-500 "
                    // onClick={() => edit.setSelectedComponent("editProduct")}
                  />
                 
                  <MdDelete className="cursor-pointer text-lg hover:text-amber-500 " />
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
  
    </div>
  );
};

