import { useEffect, useState } from "react";
import Card from "./components/Card";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import Add from "./components/Add";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function getProducts() {
      try {
        const res = await axios.get("/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }
    useEffect(()=>{getProducts()},[]);
    
 

  return (
    <div className="min-h-screen flex flex-col w-screen overflow-auto text-sm bg-gray-600 border">
      <button className=" border rounded-full right-[1%] top-[2%] fixed bg-white" onClick={()=>{navigate("/add")}}><Plus /></button>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col justify-center gap-4 p-4">
              {products.map((product, index) => (
                <Card {...product} key={product._id || index} refresh={getProducts} setProducts={setProducts} products={products}/>
              ))}
            </div>
          }
        />
        <Route path="/add" element={<Add refresh={getProducts}/>} />
      </Routes>
    </div>
  );
}

export default App;
