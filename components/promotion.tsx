import type { NextPage } from 'next'


const promotion: NextPage = () => {

  return (
    <div className="bg-white">
      <div className=" mx-auto lg:max-w-7xl lg:px-8 ">

        <h2 className="text-2xl font-extrabold text-gray-900">Promotion</h2>
        
        {/* Image gallery */}

        {/* bg-orange-300 */}
        <div className="mt-6 mb-24">
          <div className="flex h-[500px] ">
            <div className="w-1/2 ">
              <img
                  src="/images/promotion/promotion_1.png"
                  alt="promotion_1.png"
                  className="rounded-lg"
                />
            </div>
            <div className="w-1/2 ">
              <div className="h-1/2 ">
              <img
                  src="/images/promotion/promotion_2.png"
                  alt="promotion_2.png"
                  className="rounded-lg"
                />
              </div>
              <div className="h-1/2 ">
              <img
                  src="/images/promotion/promotion_3.png"
                  alt="promotion_3.png"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

          {/* <div className="flex flex-row">
            <div >
              <img
                src="/images/promotion/promotion_3.png"
                alt="promotion_3.jpg"
                className=""
              />
              </div>
            <div >
              <img
                  src="/images/promotion/promotion_2.png"
                  alt="promotion_2.jpg"
                />
            </div>
            <div>
              <img
                  src="/images/promotion/promotion_1.png"
                  alt="promotion_1.jpg"
                />
            </div>
          </div> */}

          {/* <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src="/images/promotion/promotion_3.png"
              alt="promotion_3.jpg"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="/images/promotion/promotion_2.png"
                alt="promotion_2.jpg"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="/images/promotion/promotion_1.png"
                alt="promotion_1.jpg"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div> */}
          

      </div>
    </div>
  )
}

export default promotion
