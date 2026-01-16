const Navbar = () => {
  return (
    <div className="h-16 w-full flex justify-between items-center px-10">
        <div>
            <img className="h-12 w-12 rounded-xl" src="https://pngimg.com/uploads/infinity_symbol/infinity_symbol_PNG102471.png" alt="" />
        </div>
        <div className="space-x-4">
            <button >Home</button>
            <button >About Us</button>
            <button className="font-bold">Property List</button>
            <button >Contact Us</button>
        </div>
        <div>
            <button className="bg-green-900 p-2 rounded-lg font-medium">Explore Properties</button>
        </div>
    </div>
  )
}

export default Navbar