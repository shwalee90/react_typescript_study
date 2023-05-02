import { Div, Title, Avatar } from "../components";
import * as D from "../data";

// <div key={index} className="inline-block w-8 h-8 m-4 bg-pink-300" />
export default function AvatarTest() {
  const avatars = D.range(0, 10).map((index) => (
    <Avatar
      className="inline-block -ml-6 border-4 border-white"
      key={index}
      src={D.randomAvatar()}
    />
  ));
  return (
    <section className="mt-4">
      <Title>AvatarTest</Title>
      <div className="px-12 py-4 m-8 bg-blue-300">{avatars}</div>
    </section>
  );
}
