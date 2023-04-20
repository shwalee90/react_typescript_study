export default function VariousInputs() {
  return (
    <div>
      <p>Various Input</p>
      <div>
        <input type="text" placeholder="enter text"></input>
        <input type="password" placeholder="enter pwd" />
        <input type="email" placeholder="enter email" />
        <input type="range" />
        <input type="button" value="i am button" />
        <input type="checkbox" value="i am cb" defaultChecked />
        <input type="radio" value="i am radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}
