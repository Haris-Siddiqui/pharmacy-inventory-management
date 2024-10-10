import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export const RetrunInventoryComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [customerName, setCustomerName] = useState();
  //   const [categoryData ,setCategoryData]= useState()
  const categorData = ["tablet", "injuction", "capsule"];
  const [isModal, setIsModal] = useState(false);
  const date = new Date(); // assuming 'd' is a date string or timestamp
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
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
      <h1 className="text-2xl font-bold">Retrun Inventory</h1>

      <div className="flex gap-2 w-full items-center mt-5">
        <h1 className="text-lg font-semibold">Customer Name :</h1>
        <input
          type="text"
          className="border border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg w-[30%]"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div className="w-full grid grid-cols-3 gap-5 mt-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Item</h1>
          <input
            type="text"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="Medicine Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Quantity</h1>
          <input
            type="number"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Invoice ID</h1>
          <input
            type="number"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-3 w-full flex justify-between">
        <div className="border  p-2 rounded-lg">
          <select
            name=""
            id=""
            className=" border-none focus:outline-none  flex items-center"
          >
            <option value="">Choose Category</option>
            {categorData?.map((i) => (
              <>
                <option value="">{i}</option>
              </>
            ))}
          </select>
        </div>
      </div>
      <button
        className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
        // onClick={addItem}
      >
        + Add Item
      </button>

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
            <th className="pb-2">Item</th>
            <th className="pb-2">Quantity</th>
            <th className="pb-2">Category</th>
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
              <th className="text-base  font-normal ">tablet </th>
              <th className="text-base  font-normal ">{formattedDate}</th>
              <th className="text-base  font-normal">1321</th>
              <th className="text-base  font-normal">132146</th>
              <th>
                <div className="flex justify-center items-center gap-5 ">
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
