import H1 from "components/H1";
import { MENU } from "utils/constants";

const Education = () => {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[2]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[2]?.text}</H1>
      <ul className="list-disc ml-5 md:ml-8 max-w-xl">
        <li>HA NOI UNIVERSITY OF INDUSTRY: 2015-2019</li>
        <li>Major: Computer science</li>
        <li>
          Related coursework:
          <p>
            C++, AI basic, Data Structure & Algorithms, SQL Server, Web
            programming, Project management (water fall), Test automation
            (selenium), WinForms C# …
          </p>
        </li>
        <li>GPA: 3.16/4</li>
      </ul>
    </section>
  );
};

export default Education;
