import Form from 'next/form'
import LineChart from './LineChart'
import BasicTable from './Table'


export default async function Home({searchParams}){

    let body = {"username":searchParams.username,"password":searchParams.password}
    const username = await searchParams.username
    const password = await searchParams.password

    let response = await fetch("http://127.0.0.1:8000/getPositions",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})

    let balanceOverTime = await fetch("http://127.0.0.1:8000/getBalanceOverTime",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
    
    
    let messagePositions = await response.text()
    messagePositions = JSON.parse(messagePositions)
    if (messagePositions.message == "No Balance history to show yet" || messagePositions.message.length == 0){
            return (<>
        <h2>Welcome home {body.username}</h2>
        <Form action="/buySell">
            <input type="submit" value="Buy or Sell Product"></input>
            <input type='hidden' value={username} name='username'></input>
            <input type='hidden' value={password} name='password'></input>
        </Form>
        <Form action="/depositWithdraw">
            <input type="submit" value="Deposit or Withdraw cash"></input>
            <input type='hidden' value={username} name='username'></input>
            <input type='hidden' value={password} name='password'></input>
        </Form>
        </>
    )
    }

    else{

    function createData(product,amount){
        return {product,amount};
    }
    let positions = []
    for(const row of messagePositions["message"]){
        if(row[1]!=0){
        positions.push(createData(row[2],row[1]))
        }
    }

    let messageBalance = await balanceOverTime.text()
    messageBalance = JSON.parse(messageBalance)
    balanceOverTime = messageBalance["message"]

    let dates = []
    let balance= []

    console.log(balanceOverTime)

    for (const date of Object.keys(balanceOverTime)){
        dates.push(date)
        balance.push(balanceOverTime[date])
    }
    
    return (<>
        <h2>Welcome home {body.username}</h2>
        <div className="homeContainer">
            <div className='homeWidget'>
        <LineChart dates={dates} balance={balance}></LineChart>
        </div>
        <div className='homeWidget' style={{width:"20%"}}>
        <BasicTable positions={positions}></BasicTable>
        </div>
        </div>
        <Form action="/buySell">
            <input type="submit" value="Buy or Sell Product"></input>
            <input type='hidden' value={username} name='username'></input>
            <input type='hidden' value={password} name='password'></input>
        </Form>
        <Form action="/depositWithdraw">
            <input type="submit" value="Deposit or Withdraw cash"></input>
            <input type='hidden' value={username} name='username'></input>
            <input type='hidden' value={password} name='password'></input>
        </Form>
        </>
    )
}
}