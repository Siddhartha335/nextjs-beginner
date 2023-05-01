import Link from 'next/link';
import {useRouter} from 'next/router'

function Home() {
    const router = useRouter()
    const handleClick = ()=> {
        console.log('Placing your order')
        router.replace('/product')
    }

    return (
        <>
            <h1>Home Page</h1>
            <Link href='/blog'>
                Blog
            </Link> <br/>
            <Link href='/product'>
                Products
            </Link>
            <button onClick={handleClick}>
                Place order
            </button>
        </>
    )
}

export default Home