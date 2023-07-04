import H1 from "components/H1";
import Layout from "components/Layout";
import { MENU } from "utils/constants";

function AttendedProjects() {
  return (
    <Layout>
      <section>
        <H1>{MENU[2]?.text}</H1>
        <table>
          <thead>
            <tr>
              <th>Period</th>
              <th>Position</th>
              <th>Company</th>
              <th className="text-center">Project Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center" colSpan={4}>
                The following list of projects does not include enough all of
                projects which I have done
              </td>
            </tr>
            <tr>
              <td>06/2023-Now</td>
              <td></td>
              <td>My own project</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project:</b> react-count-down-animation
                  </li>
                  <li>
                    <b>Project description:</b> A NPM react library about some
                    count-down animation
                  </li>
                  <li>
                    <b>Github: </b>
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://github.com/thach2108/react-count-down-animation"
                    >
                      thach2108/react-count-down-animation
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="text-red-400">06/2022- 03/2023</td>
              <td>Front-end developer</td>
              <td>CMC Global</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project:</b> SCG Smart-Campus
                  </li>
                  <li>
                    <b>Client:</b> Thai - SCG
                  </li>
                  <li>
                    <b>Project description:</b> The Smart Campus project is a
                    web-based management system for a factory that aims to
                    streamline and automate the various processes involved in
                    the factory's operations. The system provides an easy-to-use
                    interface for factory workers
                  </li>
                  <li>
                    <b>Company:</b>{" "}
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://cmcglobal.com.vn/"
                    >
                      CMC Global
                    </a>
                  </li>
                  <li>
                    <b>Responsibilities:</b>
                    <ul>
                      <li>
                        ✓ Define folder structure, common components, layout of
                        the UI
                      </li>
                      <li>✓ Do codding new features, fix bug</li>
                      <li>✓ Review source code of team members </li>
                      <li>✓ Help other members in finding solution</li>
                    </ul>
                  </li>
                  <li>
                    <b>Technologies used:</b> ReactJS, redux, tailwind, material
                    UI, react-query, arcgis (google map library)
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="text-red-400">08/2021- 05/2022</td>
              <td>Front-end developer</td>
              <td>Niteco</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project: </b> T1 –{" "}
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://www.electrolux.co.uk/"
                    >
                      Electrolux
                    </a>
                  </li>
                  <li>
                    <b>Client: </b> EU
                  </li>
                  <li>
                    <b>Project description: </b> this is a big website of
                    Electrolux company. The user can find company’s products,
                    see detail of them, then order them
                  </li>
                  <li>
                    <b>Company: </b>
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://niteco.com/"
                    >
                      Niteco
                    </a>
                  </li>
                  <li>
                    <b>Responsibilities: </b> Front-end developer
                  </li>
                  <ul>
                    <li>✓ Do coding new features, fix bug</li>
                    <li>✓ Discuss with customer about feature activity flow</li>
                    <li>✓ Review source code of team members</li>
                  </ul>
                  <li>
                    <b>Technologies used: </b> JavaScript, CSS, html, Vue, .net
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>08/2021- 12/2021</td>
              <td></td>
              <td>Freelancer</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project: </b> ICS
                  </li>
                  <li>
                    <b>Client: </b> Australia
                  </li>
                  <li>
                    <b>Project description: </b> Health, Insurance
                  </li>
                  <li>
                    <b>Responsibilities: </b>
                    <ul>
                      <li>
                        ✓ Restructure file/folder and functions, cleaning code
                      </li>
                      <li>✓ Remove unuse libraries for improve performance</li>
                      <li>✓ Remake CSS</li>
                    </ul>
                  </li>
                  <li>
                    <b>Technologies used: </b> ReactJS, redux, ant design
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>05/2021- 07/2021</td>
              <td></td>
              <td>Freelancer</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project: </b> CSGoBig
                  </li>
                  <li>
                    <b>Project description: </b> by the using coin in this
                    website, we can buy or sell the gun, clothes or something in
                    CS Go game
                  </li>
                  <li>
                    <b>Responsibilities: </b>
                    <ul>
                      <li>✓ Handle whole FE part in project</li>
                    </ul>
                  </li>
                  <li>
                    <b>Technologies used: </b> ReactJS, redux, tailwind
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>11/2019- 04/2021</td>
              <td>Front-end developer</td>
              <td>VSEC</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project:</b> Vadar, SafeSAI
                  </li>
                  <li>
                    <b>Project description:</b> We collect security logs in
                    devices (pc or mobile), analyze and detect the risk of
                    attack early. summary the information then displays it in
                    chart and notify user as soon as possible.
                  </li>
                  <li>
                    <b>Company:</b>{" "}
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://vsec.com.vn/"
                    >
                      VSEC
                    </a>
                  </li>
                  <li>
                    <b>Responsibilities:</b>
                    <ul>
                      <li>✓ Do coding and unit testing</li>
                      <li>
                        ✓ Define the folder structure and common components
                      </li>
                      <li>
                        ✓ Discuss with my team to define the UI/UX, find the
                        solution
                      </li>
                      <li>✓ Estimate and planning</li>
                      <li>✓ Deploy to Dev/UAT environment</li>
                    </ul>
                  </li>
                  <li>
                    <b>Technologies used:</b> bootstrap, angular 8, angular 10,
                    .net core
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>02/2020- 08/2020</td>
              <td></td>
              <td>Freelancer</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project: </b>{" "}
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://iot.dacovasystems.com/"
                    >
                      tch_Iot
                    </a>
                  </li>
                  <li>
                    <b>Client: </b> Japan
                  </li>
                  <li>
                    <b>Project description: </b> my client has many devices.
                    When they are running, we collect the sound or picture of
                    them, then we training by some AI model to detect exception
                    early to fix them before devices are in break
                  </li>
                  <li>
                    <b>Company: </b> Agile Tech
                  </li>
                  <li>
                    <b>Responsibilities: </b>
                    <ul>
                      <li>✓ Handle whole FE part in project</li>
                    </ul>
                  </li>
                  <li>
                    <b>Technologies used: </b> bootstrap, ReactJS, redux, python
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>06/2019- 10/2019</td>
              <td>Front-end developer</td>
              <td>VSEC</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Project: </b>
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://vsec.com.vn/"
                    >
                      Vsec’s website
                    </a>
                  </li>
                  <li>
                    <b>Project description: </b> company’s website
                  </li>
                  <li>
                    <b>Company: </b>
                    <a
                      className="underline underline-offset-2 text-green-500"
                      href="https://vsec.com.vn/"
                    >
                      VSEC
                    </a>
                  </li>
                  <li>
                    <b>Responsibilities: </b>
                    <ul>
                      <li>✓ Do coding new feature, fix bug</li>
                      <li>
                        ✓ Discuss with my team to define the UI/UX, find the
                        solution
                      </li>
                      <li>✓ Estimate and planning</li>
                      <li>✓ Deploy to the Dev/UAT environment</li>
                    </ul>
                  </li>
                  <li>
                    <b>Technologies used: </b> bootstrap, angular 8, .net core
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>02/2019- 06/2019</td>
              <td>Front-end developer</td>
              <td>3F</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>Do many Project such as: </b> Educa (some mini game to
                    help the children learn English.), website of the company, …
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>01/2018- 02/2019</td>
              <td>Front-end developer</td>
              <td>3F</td>
              <td>
                <ul className="list-disc ml-6">
                  <li>
                    <b>In Training time</b>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
}

export default AttendedProjects;
