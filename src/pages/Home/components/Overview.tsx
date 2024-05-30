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
        <li>JavaScript, Jquery,</li>
        <li>Agile/Scrum,</li>
        <li>
          HTML5, CSS3 (font-face, animation, keyframes, SEO, responsive, …),
        </li>
        <li>ReactJS, Angular 2+, Vue, AngularJS, TypeScript,</li>
        <li>Perfect pixel, Cross browser compatibility,</li>
        <li>Photoshop, Figma,</li>
        <li>Test automation (unit test - jest, e2e test - protractor, ),</li>
        <li>Git, SVN, Git Flow, Sourcetree</li>
        <li>RESTful API, Socket IO,</li>
        <li>
          PHP (Laravel), C#, Nodejs (Express), Python (SpeechRecognition,
          Pytorch)
        </li>
        <li>bash script, Nginx, Apache, XAMPP, Docker Desktop and CI/CD.</li>
        <li>MySQL, SQL Server,</li>
        <li>
          Good problem-solving mindset, quick research, and willingness to learn
          new technologies.
        </li>
      </ul>
    </section>
  );
}

export default Overview;
