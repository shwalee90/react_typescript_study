export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    console.log('onCallDipatchEvent')
    document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: true}))
  }
  const onCallClick = () => {
    console.log('onCallClick')
    document.getElementById('root')?.click()
  }
  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispatchEvent}>call dispatch</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  )
}
