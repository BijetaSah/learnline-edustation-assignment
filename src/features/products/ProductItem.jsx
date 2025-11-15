import { formatCurrency } from "../../helpers";

function ProductItem({ product }) {
  const { image, name, price, category } = product;

  return (
    <div className="shadow-lg rounded-xl flex flex-col bg-white hover:translate-y-1 trasnition-translate duration-200 ">
      <img
        src={image}
        alt={`Image of ${name}`}
        className="w-[10rem] h-[10rem] self-center py-2"
      />

      <div className="flex justify-between px-4 py-2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="bg-indigo-50 text-indigo-600 text-sm px-4 py-1 lowercase rounded-full">
          {category}
        </span>
      </div>
      <p className="text-xl font-semibold text-indigo-600 px-4 py-3">
        {formatCurrency(price)}{" "}
      </p>
      <button className="bg-green-600 text-white py-3 hover:bg-green-700 font-semibold cursor-pointer">
        Add to cart
      </button>
    </div>
  );
}

export default ProductItem;
