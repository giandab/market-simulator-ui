

export default async function Home({searchParams}){

    let body = {"username":searchParams.username,"password":searchParams.password}

    let response = await fetch("http://127.0.0.1:8000/getPositions",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
    
    
    let message = await response.text()
    console.log(message)
    message = JSON.parse(message)
    return (<>
        <h2>Welcome home {body.username}</h2>
        <h3>{message["message"]}</h3>
        </>
    )
}