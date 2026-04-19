import Form from 'next/form'
import { redirect } from 'next/navigation'
import Navbar from '@/components/shadcn-studio/blocks/navbar-component-01/navbar-component-01'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default async function BuyOrSell({searchParams}){
    const input = await searchParams
    const username = await searchParams.username
    const password = await searchParams.password

        const navigationData = [
  {
    title: 'Home',
    href: '/home?username='+username+"&password="+password
  },
  {
    title: 'Buy/Sell',
    href: '/buySell?username='+username+"&password="+password
  },
  {
    title: 'Deposit/Withdraw',
    href: '/depositWithdraw?username='+username+"&password="+password
  },
  {
    title: 'Transactions',
    href: '#'
  }
]
    async function buy(formData){
        'use server'

        if (formData.get('buy/sell')=="Buy"){
        let body = {"username":input.username,"password":input.password, "name":formData.get('name'), "amount":formData.get('amount')}

        let response = await fetch("http://127.0.0.1:8000/buy",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})

        redirect('/buySell?'+'username='+input.username+'&password='+input.password+'&res='+ await response.text());
    }

        else{
            let body = {"username":input.username,"password":input.password, "name":formData.get('name'), "amount":formData.get('amount')}

        let response = await fetch("http://127.0.0.1:8000/sell",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
        redirect('/buySell?'+'username='+input.username+'&password='+input.password+'&res='+ await response.text());
        }
    }

    if (input.res){
        return (<><h3>{input.res}</h3></>)
    }
    
    return (
        <div flex flex-col>
        <Navbar navigationData={navigationData}></Navbar>
    <br/><br/>
    <div className='flex flex-1 flex-col items-center'>
     <div className="flex flex-1 flex-col gap-6" style={{width:"20%"}}>
          <Card>
            <CardHeader>
              <CardTitle>Buy or sell Product</CardTitle>
              <CardDescription>
                Type a ticker name and select whether you want to buy or sell
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form action={buy}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Ticker</FieldLabel>
                    <Input name="name" id="name" required />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Amount</FieldLabel>
                    </div>
                    <Input name="amount" id="amount" type="number" required />
                  </Field>
                  <Field>
                    <Select
        name="buy/sell"
      >
        <SelectTrigger
          id="form-rhf-select-language"
          className="min-w-[120px]"
        >
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectItem value="Buy">Buy</SelectItem>
          <SelectItem value="Sell">Sell</SelectItem>
        </SelectContent>
      </Select>
                  </Field>
                  <Field>
                    <Button type="submit">Execute</Button>
                    <br></br>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
        </div>
        </div>
    )
}