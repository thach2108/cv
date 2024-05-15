import H1 from "components/H1";
import { MENU } from "utils/constants";
import { data } from "./data";

export const TechnicalSkillsTable = ({
  data,
  className,
}: {
  data: any;
  className?: string;
}) => {
  return (
    <table className={className}>
      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            {row.map((col: any, j: number) => {
              if (col.tag === "th")
                return (
                  <th key={j} rowSpan={col.rowSpan || 1}>
                    {col.text}
                  </th>
                );

              return (
                <td key={j} rowSpan={col.rowSpan || 1}>
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

const TechnicalSkills = () => {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[5]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[5]?.text}</H1>
      <TechnicalSkillsTable data={data} className="even" />
    </section>
  );
};

export default TechnicalSkills;
