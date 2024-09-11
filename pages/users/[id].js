
import { useRouter } from 'next/router'

function userId() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)  
    function showUserIdHandler(){
        // router.push('/users/sama')
        router.push({
            pathname: '/users/[id]',
            query : {id:'sama'},
        })
    }
    return (
        <div>
            <h2>userId </h2>
            <button onClick={showUserIdHandler}> Show user id </button>
        </div>
    )
}

export default userId