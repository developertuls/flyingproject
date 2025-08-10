

import { Home } from './Home'
import { Login } from './Login'
import { Gellryhome } from './Gellryhome'
import { Topolidy } from './Topolidy'
import { Bookingthe } from './Bookingthe'
import FlightSearchForm from './FlightSearchForm'
import FlightDetails from './FlightDetails'



export const Homepeags = () => {
  return (
    <div>
<Home/>

<FlightSearchForm/>
<FlightDetails/>
<Login/>
<Gellryhome/>
{/* <Topolidy/> */}
{/* <Bookingthe/> */}

    </div>
  )
}
