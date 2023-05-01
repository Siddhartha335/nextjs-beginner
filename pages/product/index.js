import Link from 'next/link'

function Product() {
    return (
        <>
        <Link href='/' style={{color:'red'}}>
            Go back to homepage
        </Link>
        <Link href='/product/1'><h2>Product 1</h2></Link>
        <Link href='/product/2' replace><h2>Product 2</h2></Link>
        <Link href='/product/3'><h2>Product 3</h2></Link>
        </>
    )
}

export default Product