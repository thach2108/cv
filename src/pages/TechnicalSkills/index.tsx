import H1 from "components/H1";
import Layout from "components/Layout";
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

const TechnicalSkillsChild = () => {
  return (
    <section>
      <H1>{MENU[1]?.text}</H1>
      <TechnicalSkillsTable data={data} className="even" />
    </section>
  );
};

function TechnicalSkills() {
  return (
    <Layout>
      <TechnicalSkillsChild />
    </Layout>
  );
}

export default TechnicalSkills;
