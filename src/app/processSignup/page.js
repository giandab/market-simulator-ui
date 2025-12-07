import {Link} from "next/link"

export default async function SignupRequest({ searchParams }) {
  const input = await searchParams

  let body = {"username":input.username,"password":input.password}

  let response = await fetch("http://127.0.0.1:8000/signup",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})

  return <div>
    <h3>{await response["message"].text()} </h3>
    <Link href="/">
    <button>You can now login!</button>
    </Link>
        </div>
}