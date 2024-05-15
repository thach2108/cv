import H1 from "components/H1";
import { AttendedProjectsTable } from "pages/Home/components/AttendedProjects";
import { data as projects } from "pages/Home/components/AttendedProjects/data";
import { TechnicalSkillsTable } from "pages/Home/components/TechnicalSkills";
import { data as skills } from "pages/Home/components/TechnicalSkills/data";
import { MENU } from "utils/constants";

import Education from "pages/Home/components/Education";
import LanguageSkill from "pages/Home/components/LanguageSkill";
import Overview from "pages/Home/components/Overview";
import PersonalDetail from "pages/Home/components/PersionalDetail";
import WorkingHistory from "pages/Home/components/WorkingHistory";
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
      <PersonalDetail layoutClass="flex" />
      <Overview />
      <Education />
      <LanguageSkill />
      <br />
      <br />
      <br />
      <WorkingHistory />
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
