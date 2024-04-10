import H1 from "components/H1";
import Layout from "components/Layout";

function Examples() {
  return (
    <Layout>
      <section>
        <H1>Examples</H1>
        <ul className="list-disc ml-10">
          <li>
            <a
              className="underline underline-offset-2 text-green-500"
              href="/react-count-down/"
            >
              React Count Down Animation example
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-2 text-green-500"
              href="/two-factor-auth/"
            >
              React Two-Factor Authentication example
            </a>
          </li>
          <li>
            <a className="underline underline-offset-2 text-green-500" href="/canvas-game/">
              Canvas Game example
            </a>
          </li>
          <li>
            <a className="underline underline-offset-2 text-green-500" href="/html5-game/">
              HTML5 Game example
            </a>
          </li>
        </ul>
        <H1>Old Projects</H1>
        <ul className="list-disc ml-10">
          <li>
            <a
              className="underline underline-offset-2 text-green-500"
              href="https://thach2108.github.io/fundiin/"
            >
              Fundiin
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default Examples;
