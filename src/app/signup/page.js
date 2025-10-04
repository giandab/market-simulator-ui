import Form from 'next/form'

export default function Signup() {
    return(
        <div>
      <h1>Signup</h1>
      <Form action="/processSignup">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="text" placeholder="password"></input>
        <input type="submit" value="Submit"></input>
      </Form>
    </div>
    );
}