import { Img } from "assets/img";
import H1 from "components/H1";
import Layout from "components/Layout";
import { MENU } from "utils/constants";

export const S1 = () => {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[0]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[0]?.text}</H1>
      <div className="sm:flex">
        <img
          className="border border-blue-500 h-44 ml-0 md:ml-4 mb-4"
          src={Img.avatarUrl}
          alt="avatar"
        />
        <ul className="list-disc font-medium ml-5 sm:ml-16">
          <li>Full name: DO DANG THACH</li>
          <li>Gender: male</li>
          <li>Mobile: 0384946866</li>
          <li>Date of birth: 03/10/1996</li>
          <li>Email: thachdd.fe@gmail.com</li>
          <li>Github: https://github.com/thach2108</li>
          <li>Own website: https://thach2108.github.io</li>
        </ul>
      </div>
    </section>
  );
};

export const S2 = () => {
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
        <li>Git, SVN, Git Flow,</li>
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
};

export const S3 = () => {
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

export const S4 = () => {
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

export const S5 = () => {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[4]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[4]?.text}</H1>
      <table className="even">
        <thead>
          <tr>
            <th>Period</th>
            <th>Company</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08/2023 - NOW</td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://fptsoftware.com/"
                className="underline underline-offset-2 text-green-500"
              >
                FPT Software
              </a>
            </td>
            <td>Front-end</td>
          </tr>
          <tr>
            <td>06/2022 - 06/2023</td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.cmcglobal.com/"
                className="underline underline-offset-2 text-green-500"
              >
                CMC Global
              </a>
            </td>
            <td>Front-end</td>
          </tr>
          <tr>
            <td>05/2021 - 05/2022</td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://niteco.com/"
                className="underline underline-offset-2 text-green-500"
              >
                Niteco
              </a>
            </td>
            <td>Front-end</td>
          </tr>
          <tr>
            <td>07/2019 - 04/2021</td>
            <td>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://vsec.com.vn/"
                className="underline underline-offset-2 text-green-500"
              >
                VSEC - Công ty Cổ phần An Ninh Mạng Việt Nam
              </a>
            </td>
            <td>Front-end</td>
          </tr>
          <tr>
            <td>07/2018 - 06/2019</td>
            <td>3F (This company has been dissolved)</td>
            <td>Front-end</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

function Home() {
  return (
    <Layout>
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <S5 />
    </Layout>
  );
}

export default Home;
