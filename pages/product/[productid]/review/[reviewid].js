import {useRouter} from 'next/router'

export default function Review() {
    const router = useRouter()
    const {productid,reviewid} = router.query
    return (
        <>
            <h1>Review {reviewid} of product {productid}</h1>
        </>
    )
}