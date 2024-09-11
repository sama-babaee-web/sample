import { useRouter } from 'next/router'

function userPost() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div> 
        <h2>userPost </h2>
    </div>
  )
}

export default userPost