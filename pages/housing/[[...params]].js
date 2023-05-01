import { useRouter } from 'next/router'

function Housing() {
    const router = useRouter()
    const {params=[]} = router.query
    console.log(params)
    if(params.length==2) {
        return <h1>You are viewing the page of housing with min price {params[0]} and maximum price {params[1]}</h1>
    }

    return <h1>Housing home page</h1>
}

export default Housing