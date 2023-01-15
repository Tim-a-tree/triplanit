import Head from 'next/head'
import { useRouter } from 'next/router';

// components
import TopBar from '../components/topbar';
import MyTrip from '../components/mytrip';
import Others from '../components/Others';

// auth
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import TopBarLoggedIn from '../components/topbar_loggedin';

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  <Head>
    <title>HomePage</title>
  </Head>
  if (session) {
    return (
      <div>

        <TopBarLoggedIn/>
        <MyTrip />
        <Others />
        {/* <Mapscreen /> */}
      </div>
    );

  } else {
    return (
      <div>

        <TopBar />
        <MyTrip />
        <Others />
        {/* <Mapscreen /> */}
      </div>
    );
  }
  
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: { session },
  }
}