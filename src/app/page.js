import Image from "next/image";
import styles from "./page.module.css";
import init, {calculate_value} from "./pkg/portfolio_functions";


export default function Home() {
  return (
    <div>
      <p>wienner</p>
    </div>
  );
}
await init();
console.log(calculate_value(10))
