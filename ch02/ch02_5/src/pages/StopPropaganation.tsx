import type {SyntheticEvent} from 'react'

export default function StopPropaganation() {
  const onDivClick = (e: SyntheticEvent) => console.log('click event bubble on <div>')
  const onButtonClick = (e: SyntheticEvent) => {
    console.log('mouse click occurs on <button> and call stoppropagation')
    // e.stopPropagation()
  }
  return (
    <div onClick={onDivClick}>
      <p>stoppropagation</p>
      <button onClick={onButtonClick}>Click me stop event propa</button>
    </div>
  )
}
