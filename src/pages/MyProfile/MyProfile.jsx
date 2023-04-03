import React, { useContext } from 'react'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import SchoolIcon from '@mui/icons-material/School'
import { AiFillGithub } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { AuthContext } from '../../context/context'

const MyProfile = () => {

	const { userInfo } = useContext(AuthContext)
	return (
		<div className='grid h-screen place-items-center overflow-hidden'>
			<div className="flex items-center flex-col justify-center max-w-xl p-6 shadow-xl rounded-xl sm:px-12 dark:bg-[#222222] dark:text-zinc-400">
						<div>
							<img src={userInfo.avatar} alt="" className="w-32 h-32 rounded-full dark:bg-gray-500 aspect-square mr-2" />
						</div>
						<div className="space-y-4 text-center divide-y-2 divide-zinc-400">
							<div className="mt-2 space-y-1">
								<h2 className="text-xl font-semibold sm:text-2xl">{userInfo.name} {userInfo.surname}</h2>
							</div>
							<div className="inline-block justify-center items-center">
								<div className='flex items-center'>
									<ul className='pb-10'>
										<li className='userText mt-10 text-2xl text-zinc-400'>
											<AlternateEmailIcon className='-translate-y-0.5 mr-1' />:{' '}
											{userInfo.email}
										</li>
										<li className=' mt-10 text-2xl text-zinc-400 '>
											<PhoneInTalkIcon className='-translate-y-0.5 mr-1' />:{' '}
											{userInfo.phone}
										</li>
										<li className=' mt-10 text-2xl text-zinc-400 '>
											<LocationCityIcon className='-translate-y-0.5 mr-1' />:{' '}
											{userInfo.country}
										</li>
										<li className='userText mt-10 text-2xl text-zinc-400 '>
											<SchoolIcon
											className='-translate-y-0.5 mr-1' />:{' '}
											{userInfo.university}
										</li>
									</ul>
								</div>
							</div>
							<div className="flex justify-center pt-2 space-x-4 align-center">
								<a href="https://github.com/Evgen4ikk" aria-label="GitHub" rel="noopener noreferrer" target='_blank' className="p-2 rounded-md hover:text-gray-500">
									<AiFillGithub className="w-7 h-7 fill-current"/>
								</a>
								<a href="https://vk.com/evgen41kkk" aria-label="Vk" rel="noopener noreferrer" target='_blank'  className="p-2 rounded-md  hover:text-gray-500">
									<SlSocialVkontakte className="w-7 h-7 fill-current"/>
								</a>
								<a href="https://t.me/Evgen44ikk" aria-label="Telegram" rel="noopener noreferrer" target='_blank' className="p-2 rounded-md hover:text-gray-500">
									<FaTelegramPlane className="w-7 h-7 fill-current"/>
								</a>
							</div>
						</div>
				</div>	
		</div>
  );
}

export default MyProfile