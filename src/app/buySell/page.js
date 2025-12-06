import Form from 'next/form'
import { redirect } from 'next/navigation'

export default async function BuyOrSell({searchParams}){
    const input = await searchParams
    async function buy(formData){
        'use server'

        if (formData.get('buy/sell')=="Buy"){
        let body = {"username":input.username,"password":input.password, "name":formData.get('name'), "amount":formData.get('amount')}
        console.log("DEBUGLOG" +body["amount"])
        let response = await fetch("http://127.0.0.1:8000/buy",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})

        redirect('http://localhost:3000/buySell?'+'username='+input.username+'&password='+input.password+'&res='+ await response.text());
    }

        else{
            let body = {"username":input.username,"password":input.password, "name":formData.get('name'), "amount":formData.get('amount')}
        console.log("DEBUGLOG" +body["amount"])
        let response = await fetch("http://127.0.0.1:8000/sell",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
        redirect('http://localhost:3000/buySell?'+'username='+input.username+'&password='+input.password+'&res='+ await response.text());
        }
    }

    if (input.res){
        return (<><h3>{input.res}</h3></>)
    }
    
    return (<>
        <h2>Buy or Sell asset</h2>
        <Form action={buy}>
            <input type="text" name="name" placeholder="Product"></input>
            <input type="number" name="amount" placeholder="Amount"></input>
            <select name='buy/sell' id='buy/sell'>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
            </select>
            <input type="submit" value="Submit"></input>
        </Form>
        </>
    )
}