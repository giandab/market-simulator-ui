import Form from 'next/form'

export default async function Home({searchParams}){

    let body = {"username":searchParams.username,"password":searchParams.password}

    let response = await fetch("http://127.0.0.1:8000/getPositions",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
    
    
    let message = await response.text()
    console.log(message)
    message = JSON.parse(message)
    
    const username = await searchParams.username
    const password = await searchParams.password
    return (<>
        <h2>Welcome home {body.username}</h2>
        <h3>{message["message"]}</h3>
        <Form action="/buySell">
            <input type="submit" value="Buy or Sell Product"></input>
            <input type='hidden' value={username} name='username'></input>
            <input type='hidden' value={password} name='password'></input>
        </Form>
        </>
    )
}