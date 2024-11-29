import { useState } from "react";
const Frontset = () => {
    const [state, setState] = useState(false);
    const showInvo = () => {
        setState(!state);
      };
  return (
    <div>
      <div className="h-[520px] -mt-[200px] bg-gradient-to-br from-purple-600 to-purple-700">
        <nav className="container  mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-white text-2xl font-bold">Invoice</span>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white">Pricing</a>
              <a href="#" className="text-white">Login</a>
              <a
                href="#"
                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Invoice Generator - Free Online Invoice Maker
              </h1>
              <button
                onClick={showInvo}
                className="bg-red-500 text-white px-8 py-4 rounded-md hover:bg-red-600 transition-colors"
              >
                Create Your First Invoice
              </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative bg-purple-900 rounded-lg p-4">
                <div className="aspect-video bg-gray-800 rounded-lg">
                  <video
                    src="VID-20241129-WA0000.mp4"
                    autoPlay
                    muted
                    loop
                    className="w-full h-full rounded-lg"
                  ></video>
                </div>
                <p className="text-white text-center mt-4">See Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontset
