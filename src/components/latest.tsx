import Image from "next/image";

export default function Latest() {
  return (
    <div
      id="Latestt"
      className="container mx-auto px-4 py-8"
      style={{ backgroundColor: "white" }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>

 
      <div className="flex justify-center space-x-8 text-[#151875]">
        <a href="#" className="text-[#FB4997] font-semibold">
          New Arrival
        </a>
        <a href="#" className="hover:text-[#FB4997]">Best Seller</a>
        <a href="#" className="hover:text-[#FB4997]">Featured</a>
        <a href="#" className="hover:text-[#FB4997]">Special Offer</a>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
 
     <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <Image
            src="/brown.png"
            alt="Comfort Handy Craft"
            layout="responsive"
            width={360}
            height={270}
            objectFit="cover"
            quality={100}
            className="rounded-t-lg mb-4"
          />
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <Image
            src="/yellow.png"
            alt="Comfort Handy Craft"
            layout="responsive"
            width={360}
            height={270}
            objectFit="cover"
            quality={100}
            className="rounded-t-lg mb-4"
          />
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

    
     <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <Image
            src="/wChair.png"
            alt="Comfort Handy Craft"
            layout="responsive"
            width={360}
            height={270}
            objectFit="cover"
            quality={100}
            className="rounded-t-lg mb-4"
          />
    <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$77.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <Image
            src="/white.png"
            alt="Comfort Handy Craft"
            layout="responsive"
            width={360}
            height={270}
            objectFit="cover"
            quality={100}
            className="rounded-t-lg mb-4"
          />
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <Image
            src="/latest5.png"
            alt="Comfort Handy Craft"
            layout="responsive"
            width={360}
            height={270}
            objectFit="cover"
            quality={100}
            className="rounded-t-lg mb-4"
          />
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
          <Image
            src="/image-3.png"
            alt="Comfort Handy Craft"
            layout="responsive"
            width={360}
            height={270}
            objectFit="cover"
            quality={100}
            className="rounded-t-lg mb-4"
          />
          <div className="bg-white p-4 rounded-b-lg">
            <h2 className="text-lg font-semibold mb-2">Comfort Handy Craft</h2>
            <div className="flex items-center">
              <span className="text-pink-500 font-bold mr-2">$42.00</span>
              <span className="text-gray-400 line-through">$65.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}