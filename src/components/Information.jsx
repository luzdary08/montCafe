import { MapPin } from 'lucide-react'
import '../styles/information.css'
import InformationItem from './InformationItem'
import { informations } from '../helper/utils'

export default function Information() {
  return (
    <div className="information ">
      <div className="container">
        <div className="information__body">

          {
            informations.map((item,i) => (
              <InformationItem key={i} title={item.title} description={item.description} Icon={item.Icon} />
            ))
          }
      
        </div>
      </div>
    </div>
  )
}
