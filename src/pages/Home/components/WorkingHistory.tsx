import H1 from "components/H1";
import { MENU } from "utils/constants";

const WorkingHistory = () => {
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

export default WorkingHistory;
