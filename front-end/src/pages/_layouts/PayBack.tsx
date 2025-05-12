
import { SiteHeader } from '@/components/site-header'
import { SolarProvider } from '@/context/SolarContext'
import { Outlet } from 'react-router-dom'



export function PrivateRoute() {

  return (
    <SolarProvider>
      <div className=''>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <SiteHeader />
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </SolarProvider>

  )
}
