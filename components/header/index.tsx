import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        <Link href="/">MatUrl</Link>
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/api">Api</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
