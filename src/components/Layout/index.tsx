import cx from 'classnames';
import Divider from "components/Divider";
import Header from "components/Header";

export interface Props extends React.PropsWithChildren {
  className?: string;
}

function Layout({ children, className }: Props) {
  return (
    <div className={cx([className, 'px-4 mb-10'])}>
      <div className="sticky z-10 top-0 bg-white">
        <Header />
        <Divider className="-mx-4" />
      </div>
      <div className="max-w-screen-xl m-auto">{children}</div>
    </div>
  );
}

export default Layout;
