import { useEffect } from "react";
import { useState } from "react";
import { getDataFormLocalStorage } from "../../ustilise";

const Products = () => {
  const [products, setProducts] = useState(getDataFormLocalStorage());
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  console.log(selectedGender);
  const handelSubmit = (e) => {
    e.preventDefault();
    const inputValues = {};
    const elements = [...e.target.elements];
    elements.forEach((element) => {
      inputValues[element.name] = element.value;
      element.value = "";
    });
    inputValues["gender"] = selectedGender;
    setProducts([...products, inputValues]);
    elements.name = "";
  };

  //set localStorage
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    console.log(products);
  }, [products]);

  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <h1 className="text-3xl text-center">Add your product & Details</h1>

        <form
          className="grid md:grid-cols-4 py-5 items-center px-5 "
          onSubmit={handelSubmit}
        >
          <label>
            Enter product name
            <input
              required
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              name="productName"
              type="text"
              placeholder="Enter product name"
            />
          </label>
          <label>
            Enter product price
            <input
              required
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              name="ProductPrice"
              type="text"
              placeholder="Enter product price"
            />
          </label>
          <label>
            Enter product description
            <input
              required
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              name="productDescription"
              type="text"
              placeholder="Enter product description"
            />
          </label>
          {/* <label>
                    <input className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 " type="text" placeholder="Enter product image" />
                </label> */}
          <label>
            nter product category
            <input
              required
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              name="productCatagory"
              type="text"
              placeholder="Enter product category"
            />
          </label>
          <label>
            Enter product brand
            <input
              required
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              name="productBrand"
              type="text"
              placeholder="Enter product brand"
            />
          </label>
          <label>
            Enter product stock
            <input
              required
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              name="productStock"
              type="text"
              placeholder="Enter product stock"
            />
          </label>
          <label>
            Enter product discount
            <input
              required
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              name="discountPrice"
              type="text"
              placeholder="Enter product discount"
            />
          </label>

          <label>
            Color
            <br />
            <select
              className=""
              name="Color"
            >
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option
                value="alfa"
                selected
              >
                Cyan
              </option>
            </select>
          </label>

          <label className="">
            <input
              className=""
              type="radio"
              name="gender"
              value="parts"
              checked={selectedGender === "parts"}
              onChange={handleGenderChange}
            />
            Parts
          </label>
          <label className="">
            <input
              className=" "
              type="radio"
              name="gender"
              value="hardware"
              checked={selectedGender === "hardware"}
              onChange={handleGenderChange}
            />
            Hardware
          </label>
          <label>
            <input
              className=" "
              type="radio"
              name="gender"
              value="other"
              checked={selectedGender === "other"}
              onChange={handleGenderChange}
            />
            Other
          </label>
          <label>
            trams and condition
            <input
              className="border border-x-cyan-950 w-80 mb-3 bg-[#192a56] border-none py-3 pl-5 "
              required
              type="checkbox"
              value="Submit"
            />
          </label>
          <button
            className=" bg-[#192a56] py-2 px-5 font-bold text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <>
        <div className="table-responsive">
          <table className="border-collapse border border-slate-400">
            <thead>
              <tr className="">
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  product Name
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  Product Price
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  product Description
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  Product catagory
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  product Brand
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  product Stock
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  discount Price
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  Color
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  Gender
                </th>
                <th className="border px-2 bg-[#164863] text-white uppercase py-3 border-slate-300">
                  Delet
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => {
                return (
                  <tr key={i}>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.productName}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.ProductPrice}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.productDescription}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.productCatagory}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.productBrand}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.productStock}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.discountPrice}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.Color}
                    </td>
                    <td className="border bg-[#DDF2FD] px-1 py-2 capitalize border-slate-300">
                      {product.gender}
                    </td>
                    <button
                      type="button"
                      className="align-middle text-center border bg-[#DDF2FD] px-2 py-2 capitalize border-slate-300 text-red-500"
                      onClick={() => {
                        setProducts(
                          products.filter(
                            (p) => p.productName !== product.productName
                          )
                        );
                      }}
                    >
                      Delete
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
};

export default Products;
