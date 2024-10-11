import React, { useRef, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

export const CreateUserComponent = () => {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [allItem, setAllItem] = useState([]);
  const [name, setName] = useState();
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="w-full h-screen  p-5 bg-[#FFFFFF]">
      <div className=" flex justify-between">
        <h1 className="text-2xl font-bold">Create User</h1>
      </div>
      <div className="w-full grid grid-cols-3 gap-5 mt-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">User Name </h1>
          <input
            type="text"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Email</h1>
          <input
            type="text"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Phone No</h1>
          <input
            type="text"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Password</h1>
          <input
            type="text"
            className="border w-full border-[#E8E8E8] p-2 placeholder:text-[#87888A] font-semibold text-sm rounded-lg"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Role</h1>
          <div className="border pr-2 rounded-lg">
            <select
              name=""
              id=""
              className="w-full p-2 rounded-lg focus:outline-none"
            >
              <option value="">User</option>
              <option value="">Admin</option>
            </select>
          </div>
        </div>
      </div>
      <button
        className="p-2 mt-5 bg-black text-white font-semibold rounded-lg"
        // onClick={addItem}
      >
        + Add User
      </button>

      <div className="w-full mt-10">
        <div className="flex border-b border-[#E8E8E8]">
          <div className="w-[20%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Name</h1>
          </div>
          <div className="w-[20%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Email</h1>
          </div>
          <div className="w-[15%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Phone No</h1>
          </div>
          <div className="w-[15%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Password</h1>
          </div>
          <div className="w-[15%] p-3">
            <h1 className="font-semibold text-[#7A8085]">Role</h1>
          </div>
          <div className="w-[15%] p-3">
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
                <h1 className="font-semibold">{item.quantity}</h1>
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
                <FaRegPenToSquare className="cursor-pointer" />
                <FaTrashAlt
                  className="cursor-pointer"
                  onClick={() => setIsModal(true)}
                />
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center mt-10 text-3xl text-[#7A8085]">No User</h1>
        )}
      </div>
    </div>
  );
};
