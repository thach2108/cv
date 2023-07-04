import { Img } from "assets/img";
import H1 from "components/H1";
import Layout from "components/Layout";
import { MENU } from "utils/constants";

function Home() {
  return (
    <Layout>
      <section className="relative">
        <div
          id={MENU[0]?.children?.[0]?.path.replace("/#", "")}
          className="absolute"
          style={{ top: "-85px" }}
        ></div>
        <H1>{MENU[0]?.children?.[0]?.text}</H1>
        <div className="flex gap-16">
          <img
            className="border border-blue-500 h-40"
            src={Img.avatarUrl}
            alt="avatar"
          />
          <ul className="list-disc font-semibold">
            <li>Full name: DO DANG THACH</li>
            <li>Gender: male</li>
            <li>Mobile: 0384946866</li>
            <li>Date of birth: 03/10/1996</li>
            <li>Email: thachdd.fe@gmail.com</li>
          </ul>
        </div>
      </section>

      <section className="relative">
        <div
          id={MENU[0]?.children?.[1]?.path.replace("/#", "")}
          className="absolute"
          style={{ top: "-85px" }}
        ></div>
        <H1>{MENU[0]?.children?.[1]?.text}</H1>

        <ul className="list-disc ml-10">
          <li>4+ years experience in Web Development.</li>
          <li>
            HTML5, CSS3 (font-face, animation, keyframes, …), JavaScript,
            responsive (support most of devices: mobile, tablet, desktop, mobile
            first), cross browser compatibility , RESTful API, Socket IO,
            ReactJS, Angular 2+, Vue, AngularJS, TypeScript, Git, Git Flow,
            Agile/Scrum, Test automation (unit test, e2e test), python (Tornado,
            SpeechRecognition, Pytorch, YOLOv8-Ultralytics), PHP (Laravel), c#
            (.net, .net core), Nodejs (Express), MySQL, SQL Server, bash script,
            Nginx, Apache, XAMPP, Docker Desktop and CI/CD.
          </li>
          <li>
            I can handle whole parts in the FE project such as: define folder
            structure, define common components, do coding the login flow, CRUD,
            display the screen follow the role of the user, drag-drop items, …
          </li>
          <li>
            Good problem-solving mindset, quick research, and willingness to
            learn new technologies.
          </li>
        </ul>
      </section>

      <section className="relative">
        <div
          id={MENU[0]?.children?.[2]?.path.replace("/#", "")}
          className="absolute"
          style={{ top: "-85px" }}
        ></div>
        <H1>{MENU[0]?.children?.[2]?.text}</H1>
        <ul className="list-disc ml-10">
          <li>HA NOI UNIVERSITY OF INDUSTRY: 2015-2019</li>
          <li>Major: Computer science</li>
          <li>
            Related coursework: C++, AI basic, Data Structure & Algorithms, SQL
            Server, Web programming, Project management (water fall), Test
            automation (selenium), WinForms C# …
          </li>
          <li>GPA: 3.16/4</li>
        </ul>
      </section>

      <section className="relative">
        <div
          id={MENU[0]?.children?.[3]?.path.replace("/#", "")}
          className="absolute"
          style={{ top: "-85px" }}
        ></div>
        <H1>{MENU[0]?.children?.[3]?.text}</H1>
        <ul className="list-disc ml-10">
          <li>Vietnamese: native language</li>
          <li>English: basic (read, write)</li>
        </ul>
      </section>

      <section className="relative">
        <div
          id={MENU[0]?.children?.[4]?.path.replace("/#", "")}
          className="absolute"
          style={{ top: "-85px" }}
        ></div>
        <H1>{MENU[0]?.children?.[4]?.text}</H1>
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Company</th>
              <th>Job Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/218 - 06/2019</td>
              <td>3F (This company has been dissolved)</td>
              <td>Front-end</td>
            </tr>
            <tr>
              <td>06/2019 - 04/2021</td>
              <td>
                <a
                  className="underline underline-offset-2 text-green-500"
                  href="https://vsec.com.vn/"
                >
                  VSEC - Công ty Cổ phần An Ninh Mạng Việt Nam
                </a>
              </td>
              <td>Front-end</td>
            </tr>
            <tr>
              <td>05/2021 - 05/2022</td>
              <td>
                <a
                  className="underline underline-offset-2 text-green-500"
                  href="https://niteco.com/"
                >
                  Niteco
                </a>
              </td>
              <td>Front-end</td>
            </tr>
            <tr>
              <td>06/2022 - 06/2023</td>
              <td>
                <a
                  className="underline underline-offset-2 text-green-500"
                  href="https://www.cmcglobal.com/"
                >
                  CMC Global
                </a>
              </td>
              <td>Front-end</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
}

export default Home;
