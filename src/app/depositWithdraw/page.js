import Form from 'next/form'
import { redirect } from 'next/navigation'

export default async function DepositWithdraw({searchParams}){
    const input = await searchParams
    
    async function transact(formData){
        'use server'
        if (formData.get('deposit/withdraw')=="Withdraw"){
        let body = {"username":input.username,"password":input.password,"amount":formData.get('amount')}
        let response = await fetch("http://127.0.0.1:8000/withdraw",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
        redirect('http://localhost:3000/depositWithdraw?'+'username='+input.username+'&password='+input.password+'&res='+ await response.text());
}

        else{
            let body = {"username":input.username,"password":input.password, "amount":formData.get('amount')}
        let response = await fetch("http://127.0.0.1:8000/deposit",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
        redirect('http://localhost:3000/depositWithdraw?'+'username='+input.username+'&password='+input.password+'&res='+ await response.text());
        }
    }

    if (input.res){
        return (<><h3>{input.res}</h3></>)
    }

    return (<>
        <h2>Deposit or Withdraw cash</h2>
        <Form action={transact}>
            <input type="number" name="amount"></input>
            <select name='deposit/withdraw' id='deposit/withdraw'>
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
            </select>
            <input type="submit" value="Submit"></input>
        </Form>
        </>
    )
}