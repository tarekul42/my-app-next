import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="grow-1">{children}</div>
          <Footer />
        </div>
  );
};

export default CommonLayout;