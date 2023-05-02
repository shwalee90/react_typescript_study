import { Title } from "../components";

export default function DisplayNoneTest() {
  return (
    <section className="mt-4">
      <Title>DisplayNoneTitle</Title>
      <div className="mt-4">
        <p className="visible"> visivility: visible text</p>
        <p className="invisible"> visivility: hidden text</p>
        <p className="hidden"> visivility: none text</p>
      </div>
    </section>
  );
}
