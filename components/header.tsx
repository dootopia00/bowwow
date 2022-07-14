import type { NextPage } from 'next'

const header: NextPage = () => {
  return (
    <div>
      
      <div className="text-center h-12 ">text text text text text </div>
      <div className="flex justify-center">
        <img className="rounded-full w-32 h-32" src="/images/bow5.jpg" alt="" />
      </div>

      <div className="flex bg-cl bg-orange-300">
        <div className="flex-none w-1/6"></div>
        <div className="flex grow h-14 w-4/6 ">
          <div className="m-auto font-semibold ">New Arrival</div>
          <div className="m-auto font-semibold ">All</div>
          <div className="m-auto font-semibold ">Event</div>
          <div className="m-auto font-semibold ">Community</div>
        </div>
        <div className="flex-none w-1/6"></div>
      </div>
      
    </div>    

  )
}

export default header
