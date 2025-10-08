import Form from 'next/form'

export default async function Buy({searchParams}){
    const input = await searchParams
    async function buy(formData){
        'use server'

        let body = {"username":input.username,"password":input.password, "name":formData.get('name'), "amount":formData.get('amount')}
        console.log("DEBUGLOG" +body["amount"])
        let response = await fetch("http://127.0.0.1:8000/buy",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})

        console.log(response.text())
    }
    
    return (<>
        <h2>Buy asset</h2>
        <Form action={buy}>
            <input type="text" name="name" placeholder="Product"></input>
            <input type="number" name="amount"></input>
            <input type="submit" value="Submit"></input>
        </Form>
        </>
    )
}