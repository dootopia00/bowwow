import type { NextPage } from 'next'
import Link from 'next/link'

const Product: NextPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:max-w-7xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            <Link href={`/products/1`} key={1}>
              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_1.jpg"
                    alt="product_1.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 20,000</p>
                </div>
              </div>
              </Link>

              <Link href={`/products/2`} key={2}>

              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_2.jpg"
                    alt="product_2.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 20,000</p>
                </div>
              </div>
            </Link>

            <Link href={`/products/3`} key={3}>
              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_3.jpg"
                    alt="product_3.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 20,000</p>
                </div>
              </div>
            </Link>

            <Link href={`/products/4`} key={4}>

              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_4.jpg"
                    alt="product_1.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 20,000</p>
                </div>
              </div>
            </Link>

            <Link href={`/products/5`} key={5}>

              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_5.jpg"
                    alt="product_5.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 18,000</p>
                </div>
              </div>
            </Link>


            <Link href={`/products/6`} key={6}>
              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_6.jpg"
                    alt="product_6.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 15,000</p>
                </div>
              </div>
            </Link>

            <Link href={`/products/7`} key={7}>
            
              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_7.jpg"
                    alt="product_7.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 15,000</p>
                </div>
              </div>
            </Link>


            <Link href={`/products/8`} key={8}>
              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_8.gif"
                    alt="product_8.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 15,000</p>
                </div>
              </div>
            </Link>

            <Link href={`/products/9`} key={9}>
              <div key='' className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src="/images/products/product_9.gif"
                    alt="product_1.jpg"
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href=''>
                        <span aria-hidden="true" className="absolute inset-0" />
                        name
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">color</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">price 15,000</p>
                </div>
              </div>
            </Link>

        </div>
      </div>
    </div>
  )
}

export default Product
