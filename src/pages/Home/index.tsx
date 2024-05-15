import Layout from "components/Layout";
import AttendedProjects from "pages/Home/components/AttendedProjects";
import TechnicalSkills from "pages/Home/components/TechnicalSkills";
import Education from "./components/Education";
import LanguageSkill from "./components/LanguageSkill";
import Overview from "./components/Overview";
import PersonalDetail from "./components/PersionalDetail";
import WorkingHistory from "./components/WorkingHistory";

function Home() {
  return (
    <Layout>
      <PersonalDetail />
      <Overview />
      <Education />
      <LanguageSkill />
      <WorkingHistory />
      <TechnicalSkills />
      <AttendedProjects />
    </Layout>
  );
}

export default Home;
