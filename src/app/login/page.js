
 
export default async function SearchPage({ searchParams }) {
  const input = await searchParams

  return <div>
    <h3>Username : {searchParams.username}
        </h3>
        <h3>Password : {searchParams.password} </h3>
        </div>
}