import React from "react";
const landing = () => {
  return (
    <>
      <div className="w-full h-[85vh] flex justify-center items-center flex-col">
        <div
          className="w-[98%] h-[100%] rounded-[20px] relative overflow-hidden"
          style={{ zIndex: "2" }}
        >
          <img
            src="/lbg.png"
            className="rounded-[20px] "
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "block",
              zIndex: "-3",
            }}
          />
          <div className="h-full w-full bg-gradient-to-b from-transparent from-[25%] via-black/50 via-[45%] to-black/60">
            <div>
              <div
                className="text-[110px] font-bold sans-serif flex justify-center align-center mt-[10%] font-[Irish Grover, system-ui]"
                style={{ color: "#F9FB6B" }}
              >
                Web Wizard
              </div>
              <div className="text-xl text-white w-1/2 mx-auto">
                Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling
                monohönera pora bebinera, pack. Prelig ode, monogt serar.
                Hoholedes{" "}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="px-4 py-3 rounded-lg mt-5 bg-[#E7A4ED] text-[#3B1C63] hover:bg-purple-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default landing;
