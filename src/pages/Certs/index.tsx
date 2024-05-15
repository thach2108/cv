import { Img } from "assets/img";
import H1 from "components/H1";
import Layout from "components/Layout";
import { MENU } from "utils/constants";

export const CertChild = () => {
  return (
    <section>
      <H1>{MENU[1]?.text}</H1>
      <ul>
        <li className="mb-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-green-500"
            href="https://www.hackerrank.com/certificates/0295b14882b1"
          >
            Frontend Developer (React) Certificate
            <img
              className="cover-img"
              src={Img.feReactCertUrl}
              alt="Frontend Developer (React) Certificate"
            />
          </a>
        </li>
        <li className="mb-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-green-500"
            href="https://www.hackerrank.com/certificates/19c3450fce76"
          >
            Sql intermediate certificate
            <img
              className="cover-img"
              src={Img.sqlInterCertUrl}
              alt="Sql intermediate certificate"
            />
          </a>
        </li>
        <li className="mb-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-green-500"
            href="https://www.hackerrank.com/certificates/8e142ba6c3a7"
          >
            React basic certificate
            <img
              className="cover-img"
              src={Img.reactBasicUrl}
              alt="React basic certificate"
            />
          </a>
        </li>
        <li className="mb-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-green-500"
            href="https://www.hackerrank.com/certificates/a2fa2f82f1cf"
          >
            Sql basic certificate
            <img
              className="cover-img"
              src={Img.sqlBasicCertUrl}
              alt="Sql basic certificate"
            />
          </a>
        </li>
        <li className="mb-5">
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 text-green-500"
            href="https://www.hackerrank.com/certificates/db824e7247ae"
          >
            CSS certificate
            <img
              className="cover-img"
              src={Img.cssCertUrl}
              alt="CSS certificate"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

function Examples() {
  return (
    <Layout className="cert">
      <CertChild />
    </Layout>
  );
}

export default Examples;
