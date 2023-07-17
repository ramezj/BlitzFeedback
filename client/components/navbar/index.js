import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Navbar(props) {
    const { data: session } = useSession()
    const signUserIn = async () => {
        signIn('google');
    }
    return (
        <>
        <div className="navbar bg-gray-950">
  <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href='/'>BlitzFeedback</Link>
  </div>
  <div className="flex-none">
    {
        session 
        ? 
        <>
        <div className="dropdown dropdown-end">
        <Link href="/app">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={session.user.image}/>
        </div>
        </label>
        </Link>
        </div>
        </>
        : 
        <>
        <button className="btn +" onClick={signUserIn}>Sign In</button>
        </>
    }
  </div>
</div>
        </>
    )
}