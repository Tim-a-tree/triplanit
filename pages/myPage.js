import Head from 'next/head'
import TopBar from '../components/topbar';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import TopBarLoggedIn from '../components/topbar_loggedin';


export default function MyPage() {
    const { data: session } = useSession();
    const [gender, setGender] = useState('male');
    const [birth, setBirth] = useState(new Date());
    const [btnclick, setBtnClick] = useState(false);



    const btnClicked = () => {
        setBtnClick(!btnclick);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handleNameChange = (e) => {
        session.user.name = e.target.value;
    }
    return (
        <>
            <div>
                <Head>
                    <title>My page</title>
                </Head>
                <TopBarLoggedIn />
            </div>


            <div className='m-10'>
                <div className='h-1/3'>
                    <div className='grid grid-cols-6 gap-4'>
                        <div className='col-start-1 col-span-2 m-12 p-10'>
                            <Image
                                src="/profileTemp.jpg"
                                alt="profile image"
                                width={400}
                                height={450}
                            />
                            <div className="p-4">
                                {btnclick ? 
                                    <button onClick={() => btnClicked()} className="w-full h-10 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-blue-500 hover:text-white" 
                                    type='submit' value="modify">확인</button> :
                                    <button onClick={() => btnClicked()} className="w-full h-10 px-6 text-black-700 transition-colors duration-150 bg-blue-200 rounded-lg focus:shadow-outline hover:bg-blue-500 hover:text-white" 
                                    type='submit' value="modify">정보 수정하기</button> }
                            </div>
                        </div>
                        
                        {btnclick ?
                            <div className='col-start-3 pt-28'>
                                <div className='font-bold text-2xl'>이름</div>
                                <input required type="text" id="user_name" name="user_name" onChange={handleNameChange} className="mt-2 mb-5 w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"></input><br />

                                <div className='font-bold text-2xl'>이메일</div>
                                <div className='text-xl'>{session && session.user.email}</div><br />

                                <div className='font-bold text-2xl'>성별</div>
                                <div className='text-xl mb-5'>
                                <input
                                    value="male"
                                    name="gender"
                                    type="radio"
                                    checked={gender === "male"}
                                    onChange={handleGenderChange} />
                                    <label>남</label>
                                <input
                                    className='mx-3'
                                    value="female"
                                    name="gender"
                                    type="radio"
                                    checked={gender === "female"}
                                    onChange={handleGenderChange} />
                                    <label>여</label>
                                </div>


                                <div className='font-bold text-2xl'>생년월일</div>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    InputProps={{ style: { height: 40 } }}
                                    value={birth}
                                    onChange={(newValue) => {
                                        setBirth(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                    inputFormat={"yyyy-MM-dd"}
                                    mask={"____-__-__"}
                                />
                                </LocalizationProvider>

                            </div>

                            : <div className='col-start-3 pt-28'>
                                <div className='font-bold text-2xl'>이름</div>
                                <div className='text-xl'>{session && session.user.name}</div><br />

                                <div className='font-bold text-2xl'>이메일</div>
                                <div className='text-xl'>{session && session.user.email}</div><br />

                                <div className='font-bold text-2xl'>성별</div>
                                <div className='text-xl'>{gender=='male'?'남':'여'}</div><br />

                                <div className='font-bold text-2xl'>생년월일</div>
                                <div className='text-xl'>{birth.toLocaleDateString()}</div><br />
                            </div>}


                    </div>
                </div>

                <div className='h-2/3'>
                    <div>
                        <div className="text-2xl font-bold mb-5 ml-5 p-2">
                            <h1>나의 여행 계획</h1>
                        </div>
                        <div className='m-7'>
                            <div className="grid grid-cols-4 gap-5 justify-items-center">
                                <div><Image className="" src='/others1.png' alt="" width={500} height={350} /><p>여름 제주 드라이브 코스</p></div>
                                <div><Image className="" src='/others2.png' alt="" width={500} height={350} /><p>부모님과 함께하는 퐝 여행</p></div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="text-2xl font-bold mb-5 ml-5 p-2">
                            <h1>내가 찜한 여행</h1>
                        </div>
                        <div className='m-7'>
                            <div className="grid grid-cols-4 gap-5 justify-items-center">
                                <div><Image className="" src='/others1.png' alt="" width={500} height={350} /><p>여름 제주 드라이브 코스<FontAwesomeIcon icon={faHeart} size='lg' className='ml-3 text-red-400' /></p></div>
                                <div><Image className="" src='/others2.png' alt="" width={500} height={350} /><p>부모님과 함께하는 퐝 여행<FontAwesomeIcon icon={faHeart} size='lg' className='ml-3 text-red-400' /></p></div>
                                <div><Image className="" src='/others3.png' alt="" width={500} height={350} /><p>노잼 아닌 유잼 대전여행<FontAwesomeIcon icon={faHeart} size='lg' className='ml-3 text-red-400' /></p></div>
                                <div><Image className="" src='/others4.png' alt="" width={500} height={350} /><p>전주에서 맛집 탐방<FontAwesomeIcon icon={faHeart} size='lg' className='ml-3 text-red-400' /></p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}