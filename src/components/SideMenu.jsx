
import React from 'react'
import { Link } from 'react-router-dom';

const SideMenu = () => {
    const routes = [
        {path:'/what-we-do', element: 'What we do'},
        {path:'/projects', element: 'Projects'},
        {path:'/tutorials', element: 'Company'},
        {path:'/contacts', element: 'Contacts'},
    ]
    const social = ['Linkedin', 'Behance', 'Dribble', 'Instagram', 'YouTube', 'Twitter', 'GitHub'];

  return (
    <div className='sideMenu w-full lg:w-[50%] -right-[100%] h-screen fixed top-0 z-30  bg-white flex items-center px-[50px] '>
        <div className='flex items-start lg:gap-[100px] '>
            <div className='hidden lg:block'>
                <h1 className='mb-8 text-[22px] opacity-[.7]'>Social</h1>
                {social.map((data, index) => {
                    return (
                        <div key={index} className='sideMenuElem w-[200px] h-[26px] overflow-hidden cursor-pointer mb-3'>
                            <div className='social leading-[1.1]'>
                                <h1 className='socialOption text-[24px]'>{data}</h1>
                                <h1 className='text-[24px]'>{data}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <div>
                    <h1 className='menuOption opacity-[.7] text-[22px] mb-8'>Menu</h1>
                </div>
                <div>
                    {routes.map((data, index) => {
                        return (
                            <div key={index+10} className='sideMenuElem w-fit h-[65px] cursor-pointer leading-[1.1] overflow-hidden mb-4'>
                                <Link to={data.path}>
                                    <div  className='social menuClick'>
                                        <h1 className='socialOption2 text-[58px] font-normal '>{data.element}</h1 >
                                        <h1  className='text-[58px] font-normal '>{data.element}</h1 >
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideMenu