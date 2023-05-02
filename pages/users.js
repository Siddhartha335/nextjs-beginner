import User from "@/components/user";

const UserData = (props)=> {
  return (
    <>
      <h1>List of users</h1>
      {props.users.map((user)=> {
        return (
          <div>
            <User user={user}/>
          </div>
        )
      })}
    </>
  )
}

export default UserData;
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  
  return {
    props:{
      users:data
    }
  }
}