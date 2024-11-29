import  { useState } from "react";
import { IoArrowDownCircle } from "react-icons/io5";
const Navbar = ({ onGenerateInvoice }) => {
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState([{ description: "", price: 0, quantity: 1 }]);
  const [invoiceDate, setInvoiceDate] = useState("");
  const [state, setState]=useState(false)


  const handleChangeItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { description: "", price: 0, quantity: 1 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateInvoice({ customerName, items, invoiceDate });
  };
 
  const show =()=>{
    setState(true)
  }
  return (
    <>
    
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg mt-[220px] mb-11">
      <h2 className="text-2xl font-bold mb-4">Invoice Form</h2>
      
      <label className="block mb-2">Customer Name:</label>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <label className="block mb-2">Invoice Date:</label>
      <input
        type="date"
        value={invoiceDate}
        onChange={(e) => setInvoiceDate(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        required
      />

      <div>
        {items.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={item.description}
                onChange={(e) => handleChangeItem(index, "description", e.target.value)}
                placeholder="Item Description"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                value={item.price}
                onChange={(e) => handleChangeItem(index, "price", e.target.value)}
                placeholder="Price"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleChangeItem(index, "quantity", e.target.value)}
                placeholder="Quantity"
                className="w-full p-2 border rounded-md"
              />
            </div>
            {index > 0 && (
              <button
                type="button"
                onClick={() => removeItem(index)}
                className="text-red-500 mt-2"
              >
                Remove Item
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Add Item
        </button>
      </div>

      <button
      onClick={show}
        type="submit"
        className="w-full bg-green-500 text-white py-2 mt-4 rounded-md"
      >
        Generate Invoice
      </button>
      {state ? <div className="flex gap-4 mt-4 text-[20px] duration-700">
       Invoice Generated <IoArrowDownCircle />
      </div>:""}
    </form>
  
    </>
  );
};

export default Navbar;
