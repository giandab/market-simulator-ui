import Image from "next/image";
import styles from "./page.module.css";
import Form from 'next/form'


export default function Home() {
  return (
    <div>
      <h1>Market Simulator</h1>
      <Form action="/login">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="text" placeholder="password"></input>
        <input type="submit" value="Login"></input>
      </Form>
      <h3>Not registered? Click below to Signup</h3>
      <a href="/signup">
    <button>Signup</button>
    </a>
    </div>
  );
}
