import H1 from "components/H1";
import { AttendedProjectsTable } from "pages/AttendedProjects";
import { data as projects } from "pages/AttendedProjects/data";
import { S1, S2, S3, S4, S5 } from "pages/Home";
import { TechnicalSkillsTable } from "pages/TechnicalSkills";
import { data as skills } from "pages/TechnicalSkills/data";
import { MENU } from "utils/constants";

import "../../App.scss";
import "../../index.scss";

function CollectContent() {
  return (
    <div
      style={{
        width: 694,
        pageBreakAfter: "always",
      }}
      className="max-w-screen-xl m-auto"
    >
      <S1 />
      <S2 />
      <S3 />
      <S4 />
      <br />
      <br />
      <br />
      <S5 />
      <section>
        <H1>{MENU[1]?.text}</H1>
        <TechnicalSkillsTable data={skills.slice(0, 12)} />
        <br />
        <br />
        <br />
        <div style={{ paddingBottom: "0.75rem" }}></div>
        <br />
        <br />
        <TechnicalSkillsTable data={skills.slice(12, 22)} />
      </section>
      <section>
        <H1>{MENU[2]?.text}</H1>
        <AttendedProjectsTable data={projects.slice(0, 3)} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AttendedProjectsTable data={projects.slice(3, 6)} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AttendedProjectsTable data={projects.slice(6, 9)} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AttendedProjectsTable data={projects.slice(10, 14)} />
      </section>
    </div>
  );
}

export default CollectContent;
