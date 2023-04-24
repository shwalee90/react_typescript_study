import {Icon} from '../components'

export default function UsingIconWithCSSClass() {
  return (
    <div>
      <h3>UsingIconwithCssClass</h3>
      <Icon name="home" className="text-blue"></Icon>
      <Icon name="check_circle_outline" className="text-red" style={{fontSize: '50px'}} />
    </div>
  )
}
