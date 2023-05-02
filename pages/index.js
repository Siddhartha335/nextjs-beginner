import Link from 'next/link'

function Home() {
  return (
    <>
      <h1>Next-JS pre-rendering</h1>
      <Link href='/users'>
        User's page
      </Link>
      <Link href='/posts'>
        Go to posts
      </Link>
    </>
  )
}

export default Home