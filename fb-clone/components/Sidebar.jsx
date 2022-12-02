import React from 'react'
import { 
    ChevronDownIcon,
    ShoppingBagIcon,
} from '@heroicons/react/outline'
import { 
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from '@heroicons/react/solid'
import SideBarIcon from './SideBarIcon'
import Viwed from './Viwed'

const SideBar = () => {
  
  

  return (
    <div className='xl:inline'>
    <div className='p-5 pt-7 max-w-[100px] xl:min-w-[370px] lg:bg-white xl:h-[45%] rounded-b-md'>
        <SideBarIcon/>
        
        <SideBarIcon Icon={UsersIcon} title="Friends" />
        <SideBarIcon Icon={ShoppingBagIcon} title="Marketplace" />
        <SideBarIcon Icon={DesktopComputerIcon} title="Stream" />
        <SideBarIcon Icon={ClockIcon} title="Memories" />
        <SideBarIcon Icon={ChevronDownIcon} title="See More" />
    </div>

    <div className='hidden xl:block p-5 pt-7 max-w-[600px] xl:min-w-[370px] lg:bg-white mt-4 xl:h-[50%] rounded-md'>
      <Viwed/>
    </div>
    </div>
  )
}

export default SideBar