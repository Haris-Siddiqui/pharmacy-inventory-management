import React, { useEffect, useRef, useState } from "react";
import { FaCross, FaEye, FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const GenerateInvoiceComponent = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [allItem, setAllItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [editableItemIndex, setEditableItemIndex] = useState(null);
  const [customerName, setCustomerName] = useState();
  const [isModal, setIsModal] = useState(false);
  const editableRefs = useRef([]);
  const navigate = useNavigate();

  const addItem = () => {
    if ((name && quantity > 0, customerName)) {
      setAllItem((prev) => [
        ...prev,
        { name, quantity, price: parseFloat(price) },
      ]);
      toast("Item added ");
      setName("");
      setPrice(0);
      setQuantity(1);
    } else {
      toast("Please fill all input fields correctly", {
        bodyClassName: "text-red-500",
      });
    }
  };

  useEffect(() => {
    const total = allItem.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [allItem]);

  const handleQuantityChange = (e, index) => {
    const newQuantity = e.target.value;
    setAllItem((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleEditClick = (index) => {
    setEditableItemIndex(index);
  };

  const handleDeleteClick = (index) => {
    setAllItem((prev) => prev.filter((_, i) => i !== index));
    toast("Item deleted");
    setIsModal(false);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        editableItemIndex !== null &&
        !editableRefs.current.includes(event.target)
      ) {
        setEditableItemIndex(null); // Save the changes by exiting edit mode
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editableItemIndex]);
  const handleClick = () => {
    setCustomerName("");
    // Calculate total values
    const subtotal = allItem.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const printWindow = window.open("", "", "width=600,height=800");
    printWindow.document.write(`
      <html>
        <head>
          <style>
              .print{
              width :300px}
              
              
            .setWidth { width: 10%; }
            table { width: 100%; border-collapse: collapse; }
            th { border: 1px solid #ccc; padding: 6px; text-align: center; }
            // th { background-color: #f1f1f1; }
          </style>
          <title>POS Pharmacy</title>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="flex justify-center ">
          
        
        <div class="bg-white print text-gray-800 flex justify-center flex-col ">
          <div class="text-center">
            <h1 class="bg-blue-800 p-2 text-white  font-bold">Siddiqui Medical Store</h1>
          </div>
          <div class="w-4/5 flex  justify-between mt-5">
            <div class="flex flex-col items-start">
              <h1 class="text-md font-bold">53- Gulberg III Near Sui Gas Office Guru Mangat Road Opposite SNGPL Office Lahore </h1>
              <h1 class="text-sm font-bold">Phone# </h1>
              <h1 class="text-sm font-bold">03364214916,03114572734</h1>
              <div class="flex">
                <h1 class="text-sm font-bold flex gap-1">License :<span>490-B/GT/10/2016</span></h1>
              </div>
            </div>
          </div>
  
          <div class="flex flex-col mt-5 ">
            <div class="flex items-center gap-1">
              <h2 class="text-md font-bold">Customer Name :</h2>
              <h3 class="text-gray-500 font-semibold">${
                customerName?.charAt(0)?.toUpperCase() + customerName?.slice(1)
              }</h3>
            </div>
          </div>

          <div>
          <table class=" border-collapse w-full">
          <tr class="flex w-full">
          <td class="flex justify-start w-1/2 p-1  border border-collapse ">Invoice</td>
          <td class="flex justify-end  border p-1 w-1/2 border-collapse ">#234</td>
          </tr>
          <tr class="flex w-full">
          <td class="flex justify-start w-1/2 p-1 border border-collapse ">Date</td>
          <td class="flex justify-end  border p-1 w-1/2 border-collapse ">Invoice</td>
          </tr>
          </table>
          </div>
          
          <div class="mt-6 border">
            <table >
              <thead>
                <tr>
                  <th class="text-sm  setWidth">Sr#</th>
                  <th class="text-sm  w-3/5">ITEM</th>
                  <th class="text-sm  setWidth">QTY</th>
                  <th class="text-sm  setWidth">UNIT PRICE</th>
                  <th class="text-sm  setWidth">Total</th>
                </tr>
              </thead>
              <tbody>
                ${allItem
                  .map(
                    (item, i) => `
                    <tr>
                      <th class="setWidth bg-white">${i + 1}</>
                      <td class="text-sm text-start font-bold">${
                        item.name.charAt(0)?.toUpperCase() + item.name?.slice(1)
                      }</td>
                      <td class="setWidth text-center">${item.quantity}</td>
                      <td class="setWidth text-center">${item.price}</td>
                      <td class="setWidth text-center">${
                        item.price * item.quantity
                      }</td>
                    </tr>
                  `
                  )
                  .join("")}
              </tbody>
            </table>
            
            <div class="mt-4 w-full flex flex-col gap-1 items-end">
              <div class="flex flex-col w-44 h-24 border border-b-0 ">
              <div class="h-1/2 w-full flex border-b justify-center  text-center items-center">
                <strong class="w-1/2">Subtotal</strong> <span class="w-1/2">${subtotal}</span>
              </div>
                 <div class="h-1/2 w-full flex  justify-center  text-center items-center">
                <strong class="w-1/2">Grand Total</strong> <span class="w-1/2">${subtotal}</span>
              </div>
              </div>
            </div>
          </div>
            
          <div class="flex  flex-col gap-4 mt-24">
          <h1 class="font-bold text-sm">FRIDGE ITEM & IHALER & LOOSE MEDICINE NON RETRUNABLE </h1>
             <h1 class="font-bold text-sm">
             (Computer Software Developed By ConsoleDot <small><i>(all right reserved)</i></small> Ph# 03321639988)
              </h1>
           </div>
        </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="w-full h-screen  p-5 bg-[#FFFFFF]">
      <div className=" flex justify-between">
        <h1 className="text-2xl font-bold">Generate Invoice</h1>

        {/* <div>
          <button className="bg-black py-2 px-3 flex justify-center items-center gap-2 text-white rounded-lg  hover:scale-105 hover:opacity-50 "
          onClick={()=>navigate(`/view-all-invoices`)}>
            <FaEye /> View All
          </button>
        </div> */}
      </div>

      <div className="flex gap-5 w-full">
        <div className="flex gap-2 w-1/2 items-center mt-5">
          <h1 className="text-lg font-semibold">Customer Name :</h1>
          <input
            type="text"
            className="border border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg w-[70%]"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-1/2 items-center mt-5">
          <h1 className="text-lg font-semibold">Discount:</h1>
          <input
            type="text"
            className="border border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg w-[70%]"
            placeholder="Customer Name"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
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
          <h1 className="font-semibold">price</h1>
          <input
            type="number"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="Price"
            value={[price]}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <button
        className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
        onClick={addItem}
      >
        + Add Item
      </button>

      <div className="w-full mt-10">
        <div className="flex border-b border-[#E8E8E8]">
          <div className="w-[20%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Medicine</h1>
          </div>
          <div className="w-[20%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Quantity</h1>
          </div>
          <div className="w-[20%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Price</h1>
          </div>
          <div className="w-[20%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Total</h1>
          </div>
          <div className="w-[20%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Action</h1>
          </div>
        </div>
        {allItem.length > 0 ? (
          allItem.map((item, index) => (
            <div key={index} className="flex border-b border-[#E8E8E8]">
              <div className="w-[20%] p-3 ">
                <div className="w-full">
                  <h1 className="font-semibold w-full">{item.name}</h1>
                </div>
              </div>
              <div className="w-[20%] p-3">
                {editableItemIndex === index ? (
                  <input
                    ref={(el) => (editableRefs.current[index] = el)}
                    type="number"
                    className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, index)}
                  />
                ) : (
                  <h1 className="font-semibold">{item.quantity}</h1>
                )}
              </div>
              <div className="w-[20%] p-3">
                <h1 className="font-semibold">{item.price.toFixed(2)}</h1>
              </div>
              <div className="w-[20%] p-3">
                <h1 className="font-semibold">
                  {(item.price * item.quantity).toFixed(2)}
                </h1>
              </div>
              <div className="w-[20%] p-3 flex gap-4">
                <FaRegPenToSquare
                  className="cursor-pointer"
                  onClick={() => handleEditClick(index)}
                />
                <FaTrashAlt
                  className="cursor-pointer"
                  onClick={() => setIsModal(true)}
                />
              </div>
              {isModal && (
                <div className="fixed flex w-full top-0 h-screen justify-center items-center">
                  <div
                    className="w-full h-screen right-0   fixed top-0 bg-black opacity-10"
                    onClick={() => setIsModal(false)}
                  ></div>
                  <div className="absolute top-[40%] rounded-lg w-1/4 h-36 bg-white">
                    <div className="flex flex-col gap-3 justify-center items-center w-full h-full">
                      <h1 className="text-2xl font-semibold">
                        Are you sure<span>?</span>
                      </h1>
                      <div className="flex justify-center gap-4 w-full items-center">
                        <button
                          className="px-5 w-[30%] hover:opacity-90 hover:scale-105 py-2 bg-green-500 rounded-lg text-white"
                          onClick={() => handleDeleteClick(index)}
                        >
                          Yes
                        </button>
                        <button
                          className="px-5 w-[30%] hover:opacity-90 hover:scale-105 py-2 bg-red-500 rounded-lg text-white "
                          onClick={() => setIsModal(false)}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <h1 className="text-center mt-10 text-3xl text-[#7A8085]">
            No Items
          </h1>
        )}
      </div>

      <div
        className={`w-full flex items-center  mt-5 
          "justify-end"
        `}
      >
        <h1 className="font-bold text-lg flex items-center gap-1">
          Total: <span>Rs</span> <span>{totalPrice.toFixed(2)}</span>
        </h1>
      </div>

      <div>
        <button
          className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
          onClick={handleClick}
        >
          Generate Invoice
        </button>
      </div>
    </div>
  );
};
