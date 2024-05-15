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
        <li>
          HTML5, CSS3 (font-face, animation, keyframes, SEO, responsive, perfect
          pixel, …),
        </li>
        <li>JavaScript, Jquery</li>
        <li>Cross browser compatibility,</li>
        <li>ReactJS, Angular 2+, Vue, AngularJS, TypeScript,</li>
        <li>RESTful API, Socket IO,</li>
        <li>Git, SVN, Git Flow, Sourcetree,</li>
        <li>Agile/Scrum,</li>
        <li>Test automation (unit test, e2e test),</li>
        <li>
          python (Tornado, SpeechRecognition, Pytorch, YOLOv8-Ultralytics),
        </li>
        <li>PHP (Laravel), C# (.net, .net core), Nodejs (Express),</li>
        <li>MySQL, SQL Server,</li>
        <li>bash script, Nginx, Apache, XAMPP, Docker Desktop and CI/CD.</li>
        <li>
          Good problem-solving mindset, quick research, and willingness to learn
          new technologies.
        </li>
      </ul>
    </section>
  );
}

export default Overview;
