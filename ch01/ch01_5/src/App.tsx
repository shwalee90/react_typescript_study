import * as D from './data'

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()},{D.randomJobTitle()},{D.randomdayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </div>
  )
}
