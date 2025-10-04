import { redirect } from "next/navigation"

 
export default async function SearchPage({ searchParams }) {
  const input = await searchParams

  let body = {"username":searchParams.username,"password":searchParams.password}

  let response = await fetch("http://127.0.0.1:8000/login",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
  
  let message = await response.text()
  message = JSON.parse(message)

  if (message["message"]=="logged in successfully"){
    let url ="/home?username="+searchParams.username+"&password="+searchParams.password 
    redirect(url)
  }
  else{
  return <div>
    <h3>{message} </h3>
    <a href="/">
    <button>Back to Login</button>
    </a>
    <a href="/signup">
    <button>Go to signup</button>
    </a>
        </div>
}}