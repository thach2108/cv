import H1 from "components/H1";
import { MENU } from "utils/constants";
import { data } from "./data";

export const AttendedProjectsTable = ({ data }: { data: any }) => {
  return (
    <table className="even">
      <thead>
        <tr>
          <th>Period</th>
          <th>Company</th>
          <th>Project Detail</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            {row.map((col: any, j: number) => {
              if (col.tag === "th")
                return (
                  <th key={j} colSpan={col.colSpan || 1}>
                    {col.text}
                  </th>
                );

              return (
                <td key={j} colSpan={col.colSpan || 1}>
                  {col.text}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const AttendedProjects = () => {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[6]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[6]?.text}</H1>
      <AttendedProjectsTable data={data} />
    </section>
  );
};

export default AttendedProjects;
