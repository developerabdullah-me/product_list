import React from 'react';

const Product = ({product}) => {
    return (
        <div>
              <tr >
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
        </div>
    );
};

export default Product;