import { Link } from "react-router-dom";
import Contact from "../../../React_Router/src/components/contact/contact";

function ProductCard({ image, name, description }) {
  return (
    <div
      className="
      bg-white 
      rounded-2xl 
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition
      duration-300
      group
      border-2
      w-65
      h-110
      flex flex-col justify-center items-center m-2
      "
    >

      {/* Product Image */}
      <div className="h-64 overflow-hidden bg-gray-100 w-64 p-1  ">

        <img
          src={image}
          alt={name}
          className="
          w-full
          h-full
          object-cover
          group-hover:scale-110
          transition
          duration-500
          rounded-2xl
          
          "
        />

      </div>


      {/* Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-900">
          {name}
        </h2>


        <p className="mt-3 text-gray-600 leading-6">
          {description}
        </p>
          <p className="mt-3 text-gray-600 leading-6">
          Min_Order: 50 Pieces
        </p>

        <button
          className="
          mt-6
          bg-black
          text-white
          px-6
          py-3
          rounded-full
          hover:bg-blue-600
          transition
          cursor-pointer
          "
        >
            <Link to={`/contact?product=${name}`}>
          Request Quote
          </Link>
        </button>

      </div>

    </div>
  );
}

export default ProductCard;