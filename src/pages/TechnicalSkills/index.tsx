import H1 from "components/H1";
import Layout from "components/Layout";
import { MENU } from "utils/constants";

function TechnicalSkills() {
  return (
    <Layout>
      <section>
        <H1>{MENU[1]?.text}</H1>
        <table>
          <tbody>
            <tr>
              <th rowSpan={6}>Programming Language</th>
              <td>Html, CSS, JavaScript </td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>PHP (Laravel)</td>
              <td>Have experience, Can easy to learn and work in ther</td>
            </tr>
            <tr>
              <td>Python (Tornado)</td>
              <td>Have experience, Can easy to learn and work in ther</td>
            </tr>
            <tr>
              <td>NodeJS (Express)</td>
              <td>Have experience, Can easy to learn and work in ther</td>
            </tr>
            <tr>
              <td>My SQL, SQL Server</td>
              <td>Have experience, Can easy to learn and work in ther</td>
            </tr>
            <tr>
              <td>C#</td>
              <td>Have experience</td>
            </tr>
            <tr>
              <th rowSpan={5}>Programming Tool</th>
              <td> Visual Studio Code</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>Debugger Tool (by Visual Studio Code)</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>Photoshop, Figma (select layer, transform to CSS)</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>
                TransType 4 (convert between .svg, .otf, .tff, .eot, .woff,
                .woff2)
              </td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>
                DIY tools
                <ul>
                  <li>✓ This use Pug, Sass, Webpack, …</li>
                  <li>
                    ✓ This help transform the design files (Photoshop, Figma) to
                    HTML, CSS, JS faster
                  </li>
                </ul>
              </td>
              <th>Very good</th>
            </tr>
            <tr>
              <th>Process</th>
              <td>Agile/Scrum</td>
              <td>Worked in a Agile team in EU</td>
            </tr>
            <tr>
              <th rowSpan={5}>Library</th>
              <td>ReactJS</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>Angular</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>Vue</td>
              <td>Good</td>
            </tr>
            <tr>
              <td>AngularJS</td>
              <td>Have experience</td>
            </tr>
            <tr>
              <td>
                Bootstrap, jQuery, Ant design, Redux, Tailwind, Material UI,
                sortable library, split library, virtual scrolling library, …
              </td>
              <th>Very good</th>
            </tr>
            <tr>
              <th>Os</th>
              <td>Mac Os (hackintosh), Windows 11, Ubuntu</td>
              <th>Very good</th>
            </tr>
            <tr>
              <th rowSpan={4}>Other</th>
              <td>Git</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>Gulp/Grunt, Webpack</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>Test automation (unit test, e2e using Protractor)</td>
              <th>Very good</th>
            </tr>
            <tr>
              <td>Nginx, Bash script, Docker, CI/CD</td>
              <td>Have experience</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
}

export default TechnicalSkills;
