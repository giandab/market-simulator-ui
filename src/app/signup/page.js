import Form from 'next/form'

export default function Signup() {
    return(
        <div>
      <h1>Signup</h1>
      <Form action="/processSignup">
        <input name="username" type="text" placeholder="username"></input>
        <input name="password" type="password" placeholder="password"></input>
        <input type="submit" value="Signup"></input>
      </Form>
    </div>
    );
}