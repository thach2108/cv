import { Img } from "assets/img";
import H1 from "components/H1";
import { MENU } from "utils/constants";

const PersonalDetail = ({
  layoutClass = "sm:flex",
}: {
  layoutClass?: string;
}) => {
  return (
    <section className="relative">
      <div
        id={MENU[0]?.children?.[0]?.path.replace("/#", "")}
        className="absolute"
        style={{ top: "-110px" }}
      ></div>
      <H1>{MENU[0]?.children?.[0]?.text}</H1>
      <div className={layoutClass}>
        <img
          className="border border-blue-500 h-44 ml-0 md:ml-4 mb-4"
          src={Img.avatarUrl}
          alt="avatar"
        />
        <ul className="list-disc font-medium ml-5 sm:ml-16">
          <li>Full name: DO DANG THACH</li>
          <li>Gender: male</li>
          <li>Mobile: 0384946866</li>
          <li>Date of birth: 03/10/1996</li>
          <li>Email: thachdd.fe@gmail.com</li>
          <li>
            Github:{" "}
            <a className="underline" href="https://github.com/thach2108">
              https://github.com/thach2108
            </a>
          </li>
          <li>
            Own website:{" "}
            <a className="underline" href="https://thach2108.github.io">
              https://thach2108.github.io
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PersonalDetail;
