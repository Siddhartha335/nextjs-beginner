import { useRouter } from 'next/router'

function ProductInfo() {
    const router= useRouter()
    const productId = router.query.productid
    return (
        <>
            <h1>Description about product {productId}</h1>
        </>
    )
}

export default ProductInfo