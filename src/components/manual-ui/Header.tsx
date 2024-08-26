import Link from "next/link";
import Nav from "./MdNav";
import Buttonui from "../ui/buttonui";
import SmNav from "./SmNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-12 sticky top-0 bg-primary backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/">
          <h1 className="text-2xl font-semibold cursor-pointer">
            Rahul Jadvani <span className="text-accent-hover">47</span>
          </h1>
        </Link>

        {/* Navigation for medium to large screens */}
        <nav className="hidden lg:flex items-center gap-8" role="navigation">
          <Nav />
          <Link href="/contact">
            <Buttonui title="Hire Me" />
          </Link>
        </nav>

        {/* Navigation for small screens */}
        <div className="lg:hidden">
          <SmNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
