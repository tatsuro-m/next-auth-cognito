import {useSession, signIn, signOut} from "next-auth/client";
import Link from "next/link";

export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return null;
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br/>
        <button onClick={() => signOut()}>Sign Out</button>
        <br/>
        <Link href="/setting">
          <a>設定ページへ</a>
        </Link>
      </>
    );
  }

  return (
    <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
