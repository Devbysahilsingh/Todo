import React from 'react'

const Navbar = () => {
  return (
    <div>
    {/* =======Main nav div starting ========*/}
      <div className='w-screen h-[70px] bg-violet-600 flex justify-center items-center relative'>
        {/* inner div starting which contains logo and navigation */}
        <div className='w-[90%] h-[90%]  flex  justify-between items-center text-white ps-[2rem] pe-[1rem]'>
            <h1 className='font-myfont text-3xl hover:border-b-4 tablet:text-4xl'>iTask</h1>

            <ul className='hidden tablet:flex gap-x-4 text-3xl'>
            <li className='hover:border-b-4 border-transparent hover:border-white '><a href='#'>Home</a></li>
            <li className='hover:border-b-4 border-transparent hover:border-white'><a href='#'>About</a></li>
            <li className='hover:border-b-4 border-transparent hover:border-white'><a href='#'>Contact</a></li>
            <li className='hover:border-b-4 border-transparent hover:border-white'><a href='#'>Tasks</a></li>
          </ul>
          {/* div for bar icon */}
          <div className='text-[2rem] tablet:hidden'>
          <i className="fa-solid fa-bars"></i>
          </div>{/*bar icon ends here*/}

        </div>{/*inner div ends here*/}
        {/* slidebar's div starts here */}
        <div className=' slidebar w-screen h-[50vh] bg-violet-600 absolute top-[0px] z-50 flex flex-col  items-center justify-center rounded-b-[50px] translate-[-50vh] tablet:hidden '>
            <ul className='text-4xl flexflex flex-col  items-center gap-y-[1rem] text-white tablet:hidden'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Tasks</a></li>

            </ul>
            <i className="fa-solid fa-xmark absolute text-[2.5rem] text-white  top-[4px] right-[10px] "></i>
        </div>{/* slidebar's div ends here */}
      </div> {/*Main nav div ending */}
    </div>
  )
}

export default Navbar 