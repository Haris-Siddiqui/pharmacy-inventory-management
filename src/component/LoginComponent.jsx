import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const [selectedComponent, setSelectedComponent] = useState("user");
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("@role", selectedComponent);
    navigate(`/dashboard`);
  };
  console.log(selectedComponent);
  return (
    <>
      <div className="w-full h-screen bg-[#F3F4F6] flex justify-center items-center">
        <div className="w-[35%] h-[45%] flex justify-between items-center flex-col bg-white shadow-md rounded-lg p-7">
          <div className="flex w-full justify-start flex-col">
            <h1 className="text-3xl font-semibold ">Pharmacy POS Login</h1>
            <h2 className="text-lg  mt-1 text-[#87888A]">
              Entrer your credentials to access the system
            </h2>
            <div className="flex gap-20 mt-2 ">
              <h1
                className={`font-semibold cursor-pointer ${
                  selectedComponent ==="user" ? " text-[#87888A]  border-b-2  border-[#E8E8E8]  " : ""
                } `}
                onClick={() => setSelectedComponent("user")}
              >
                User
              </h1>
              <h1
                 className={`font-semibold cursor-pointer ${
                    selectedComponent=== "admin" ? " text-[#87888A]   border-b-2  border-[#E8E8E8] " : ""
                  } `}
                onClick={() => setSelectedComponent("admin")}
              >
                Admin
              </h1>
            </div>
          </div>
          <div className="w-full flex  flex-col gap-5">
            <input
              type="text"
              className=" w-full rounded-lg p-3 placeholder:text-[#87888A] placeholder:font-semibold border  border-[#E8E8E8]"
              placeholder="Username"
            />
            <input
              type="password"
              className=" w-full rounded-lg p-3 placeholder:text-[#87888A] 
              placeholder:font-semibold border border-[#E8E8E8]"
              placeholder="Password"
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <button className="py-3 px-4 border-[#E8E8E8] border rounded-lg  font-semibold">
              Cancel
            </button>
            <button
              className="py-3 px-4 bg-black text-white rounded-lg font-semibold"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
