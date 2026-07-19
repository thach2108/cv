import H1 from "components/H1";
import { MENU } from "utils/constants";

function Overview() {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[1]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[1]?.text}</H1>

      <ul className="list-disc ml-5 md:ml-8">
        <li>
          {new Date().getFullYear() - 2019}
          {new Date().getMonth() > 5 ? "+" : ""} years of experience in Web
          Development.
        </li>
        <li>Have worked on many projects for banks and international clients (Korean, Australia, Thailand, EU, Japan...).</li>
        <li>Have comprehensive knowledge of the web project development process, including Backend, Frontend, DevOps, etc. However, my expertise is stronger in Frontend.</li>
        <li>Have experience as a team leader: assigning tasks, controlling quality, and training new members.</li>
        <li>Have experience developing AI chatbots using the OpenAI API, creating AI Agents, and writing effective prompts.</li>
        <li>Good problem-solving mindset, quick research, and willingness to learn new technologies.</li>
      </ul>
    </section>
  );
}

export default Overview;
