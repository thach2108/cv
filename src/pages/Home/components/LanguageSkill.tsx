import H1 from "components/H1";
import { MENU } from "utils/constants";

const LanguageSkill = () => {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[3]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[3]?.text}</H1>
      <ul className="list-disc ml-5 md:ml-8">
        <li>Vietnamese: native language</li>
        <li>English: basic (read, write)</li>
      </ul>
    </section>
  );
};

export default LanguageSkill;
