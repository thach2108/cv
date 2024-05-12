import { Img } from "assets/img";
import H1 from "components/H1";
import Layout from "components/Layout";

function Examples() {
  return (
    <Layout className="example">
      <section>
        <H1>Examples</H1>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/react-count-down/"
              className="underline underline-offset-2 text-green-500"
            >
              React Count Down Animation example
            </a>
            <br />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/two-factor-auth/"
              className="underline underline-offset-2 text-green-500"
            >
              React Two-Factor Authentication example
            </a>
            <div className="flex gap-4">
              <img alt="2 fa auth" className="cover-img" src={Img.twoFAUrl} />
              <img
                className="cover-img"
                alt="2 fa auth unit test"
                src={Img.twoFAUnitestUrl}
              />
            </div>
            <br />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/canvas-game/"
              className="underline underline-offset-2 text-green-500"
            >
              Canvas Game example
            </a>
            <img
              alt="Canvas Game"
              className="cover-img"
              src={Img.canvasGameUrl}
            />
            <br />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/html5-game/"
              className="underline underline-offset-2 text-green-500"
            >
              HTML5 Game example
            </a>
            <img
              className="cover-img"
              src={Img.html5GameUrl}
              alt="HTML5 Game example"
            />
            <br />
          </li>
        </ul>
        <H1>Old Projects</H1>
        <ul>
          <li className="mb-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://thach2108.github.io/fundiin/"
              className="underline underline-offset-2 text-green-500"
            >
              Fundiin
            </a>
            <img
              src={Img.fundiinUrl}
              className="cover-img"
              alt="Fundiin landing page"
            />
            <br />
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default Examples;
