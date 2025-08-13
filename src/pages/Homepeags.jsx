

import { Home } from './Home'
import { Login } from './Login'
import { Gellryhome } from './Gellryhome'
import FlightSearchForm from './FlightSearchForm'
import FlightDetails from './FlightDetails'
// import CountrySearch from '../comonents/CountrySearch'



export const Homepeags = () => {
  return (
    <div>
<Home />

<FlightSearchForm/>
<FlightDetails/>
<Login/>
{/* <CountrySearch/> */}
<Gellryhome/>
{/* <Topolidy/> */}
{/* <Bookingthe/> */}

    </div>
  )
}
