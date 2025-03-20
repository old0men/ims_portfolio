import Links from "next/link"
import "./globals.css"
import Link from "next/link";


export default function Home() {
  return (
      <div className={"home_page"}>
          <h1>victor</h1>
          <h1>Pesci</h1>

          <b>
              <Link href="/about_me" className={"button"}>Go to About</Link> <br />
              <Link href="/project_list" className={"button"}>View Projects</Link>
          </b>

      </div>
  );
}
