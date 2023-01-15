import Link from 'next/link';
import Image from 'next/image'
import Logo from '../public/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/router';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';

export default function TopBarLoggedIn() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className='bg-blue-200 pt-6 pl-6w-full'>
      <div className="grid grid-cols-12  grid-rows-2 ml-5 zf:grid-cols-4 ">

        <div className='col-start-1 col-span-2 ml-3'>
          <Link href='/'>
            <Image src={Logo} alt="logo" height={30} width={150} />
          </Link>
        </div>



        <div className='col-start-3 col-span-3'>
          <form>
            <input type="text" id="search" name="search" required minLength="1"
              placeholder=" 🔎 검색" style={{ width: 350, height: 30 }} />


          </form>
        </div>
        <div>
          
          <div className='p-4'>
            
          </div>
        </div>

          <div className="col-start-10 col-span-2 zf:col-start-3 text-center"> 
            <p className="text-right pr-5">안녕하세요, {session.user.name}님</p>
          </div>

          <div className="col-start-12 rounded-[5px] bg-white text-center w-9/12 mb-5 zf:hidden"> 
          <button type='submit' onClick={() => signOut("google", { callbackUrl: "/" })}>로그아웃</button>
          </div>


        <div className='col-start-1  ml-3 hover:cursor-pointer' >
          <Link href='/travelRegister'>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} size='lg' className='mr-2' />
              여행 등록
            </div>
          </Link>
        </div>

        <div className='col-start-2 ml-3 hover:cursor-pointer'>
          <Link href='/recommendation'>
            <div>
              <FontAwesomeIcon icon={faLocationDot} size='lg' className='mr-2' />
              여행지 추천
            </div>
          </Link>
        </div>
        
        <div className='col-start-3 col-span-2 ml-5 hover:cursor-pointer'>
        {session? <Link href='/myPage'><div>
              <FontAwesomeIcon icon={faUser} size='lg' className='mr-2' />
              내 정보
            </div>
          </Link>:<Link href='/login'><div>
              <FontAwesomeIcon icon={faUser} size='lg' className='mr-2' />
              내 정보
            </div>
          </Link>
          }
        </div>

      </div>
    </div>

  );
}
