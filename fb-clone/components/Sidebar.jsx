import React from 'react'
import { 
    ChevronDownIcon,
    ShoppingBagIcon,
    PlayIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
import { 
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
    HomeIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'
import SideBarIcon from './SideBarIcon'
import Viwed from './Viwed'

const SideBar = () => {
  
  

  return (
    <div className='xl:inline'>
    <div className='p-1 xl:p-5 pt-7 max-w-[95px] xl:min-w-[370px] lg:bg-white xl:h-[45%] rounded-b-md'>
        <SideBarIcon/>
        <div className='xl:hidden'>
        <SideBarIcon active Icon={HomeIcon} />
        <SideBarIcon Icon={ViewGridIcon}/>
        <SideBarIcon Icon={PlayIcon}/>
        <SideBarIcon Icon={ShoppingCartIcon} />
        </div>
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