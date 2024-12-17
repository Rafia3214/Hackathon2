import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard() {
  return (
    <div className="min-h-screen w-[#1920px] h-[579px] flex items-center justify-center p-4">
    <div className="flex flex-col md:flex-row items-center justify-center w-[1059] h-[#550px] bg-[#F1F0FF] p-4 md:p-8 lg:p-12 rounded-lg shadow-md">
      {/* Left Section: Image */}
  <div className="md:w-1/3 flex justify-center items-center relative">
             <div className="relative bg-gradient-to-r from-pink-100 to-purple-200 rounded-full p-10 shadow-xl mt-10 mx-auto">
               <Image
                 src="/bsofa.png"
                 alt="Furniture Chair"
                 width={706}
                 height={689}
                 className="object-contain w-[558] h-[550]"
               />
                 
                  </div>
      </div>


      {/* Right Section: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8">
        <h2 className="text-2xl md:text-3xl font-josefinSans font-bold text-indigo-900 mb-4">
          Unique Features Of Latest & Trending Products
        </h2>

        <ul className="space-y-2 mb-6">
          <li className="flex items-start">
            <span className="h-[11px] w-[11px] bg-[#F52B70] rounded-full mt-1 mr-2"></span>
            <p className="text-[#ACABC3]">
              All frames constructed with hardwood solids and laminates
            </p>
          </li>
          <li className="flex items-start">
            <span className="h-[11px] w-[11px] bg-[#2B2BF5] rounded-full mt-1 mr-2"></span>
            <p className="text-[#ACABC3]">
              Reinforced with double wood dowels, glue, screw-nails corner blocks and machine nails
            </p>
          </li>
          <li className="flex items-start">
            <span className="h-[11px] w-[11px] bg-[#2BF5CC] rounded-full mt-1 mr-2"></span>
            <p className="text-[#ACABC3]">
              Arms, backs and seats are structurally reinforced
            </p>
          </li>
        </ul>
        <div className="flex flex-col items-center md:items-start space-y-4">
  {/* Add to Cart Button */}
  <Link
    href="#"
    className="inline-block bg-[#FB2E86] text-white text-sm font-medium py-3 px-6 rounded-md hover:bg-pink-600 transition-all duration-300 text-center"
  >
    Add To Cart
  </Link>

  {/* Product Name */}
  <p className="text-[#151875] font-semibold mb-1 text-center md:text-left">
    B&B Italian Sofa
  </p>

  {/* Price */}
  <p className="text-[#151875] text-sm font-normal text-center md:text-left">
    $32.00
  </p>
</div>
       
      </div>
    </div>
    </div>

  );
}


