import { Img } from "assets/img";
import H1 from "components/H1";
import Layout from "components/Layout";
import { MENU } from "utils/constants";

function Examples() {
  return (
    <Layout className="example">
      <section>
        <H1>{MENU[2]?.text}</H1>
        <ul>
          <li className="mb-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/react-count-down/"
              className="underline underline-offset-2 text-green-500"
            >
              React Count Down Animation Library
            </a>
          </li>
          <li className="mb-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/two-factor-auth/"
              className="underline underline-offset-2 text-green-500"
            >
              React Two-Factor Authentication example
              <div className="flex gap-4">
                <img alt="2 fa auth" className="cover-img" src={Img.twoFAUrl} />
                <img
                  className="cover-img"
                  alt="2 fa auth unit test"
                  src={Img.twoFAUnitestUrl}
                />
              </div>
            </a>
          </li>
          <li className="mb-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/canvas-game/"
              className="underline underline-offset-2 text-green-500"
            >
              Canvas Game example
              <img
                alt="Canvas Game"
                className="cover-img"
                src={Img.canvasGameUrl}
              />{" "}
            </a>
          </li>
          <li className="mb-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/html5-game/"
              className="underline underline-offset-2 text-green-500"
            >
              HTML5 Game example
              <img
                className="cover-img"
                src={Img.html5GameUrl}
                alt="HTML5 Game example"
              />{" "}
            </a>
          </li>
          <li className="mb-5">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/fundiin/"
              className="underline underline-offset-2 text-green-500"
            >
              Fundiin
              <img
                src={Img.fundiinUrl}
                className="cover-img"
                alt="Fundiin landing page"
              />{" "}
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default Examples;
