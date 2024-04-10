import { Img } from "assets/img";
import H1 from "components/H1";
import Layout from "components/Layout";
import { MENU } from "utils/constants";

function Examples() {
  return (
    <Layout className="cert">
      <section>
        <H1>{MENU[3]?.text}</H1>
        <ul className="list-disc ml-10">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-green-500"
              href="https://www.hackerrank.com/certificates/0295b14882b1"
            >
              Frontend Developer (React) Certificate
            </a>
            <img src={Img.feReactCertUrl} alt="Frontend Developer (React) Certificate" />
            <br />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-green-500"
              href="https://www.hackerrank.com/certificates/19c3450fce76"
            >
              Sql intermediate certificate
            </a>
            <img src={Img.sqlInterCertUrl} alt="Sql intermediate certificate" />
            <br />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-green-500"
              href="https://www.hackerrank.com/certificates/8e142ba6c3a7"
            >
              React basic certificate
            </a>
            <img src={Img.reactBasicUrl} alt="React basic certificate" />
            <br />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-green-500"
              href="https://www.hackerrank.com/certificates/a2fa2f82f1cf"
            >
              Sql basic certificate
            </a>
            <img src={Img.sqlBasicCertUrl} alt="Sql basic certificate" />
            <br />
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 text-green-500"
              href="https://www.hackerrank.com/certificates/db824e7247ae"
            >
              CSS certificate
            </a>
            <img src={Img.cssCertUrl} alt="CSS certificate" />
            <br />
          </li>
        </ul>
      </section>
    </Layout>
  );
}

export default Examples;
