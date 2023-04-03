import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import WorkIcon from '@mui/icons-material/Work'
import React, { useEffect, useState } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostService'
import { useFetching } from '../../components/hooks/useFetching'
import Loader from '../../components/UI/Loader/Loader'

const UserProfile = () => {
	const params = useParams()
	const [user, setUser] = useState({});
	const [fetchUserById, isUserLoading, userError] = useFetching(async (id) => {
    const response = await PostService.getUsersById(id);
    setUser(response.data);
  });

  useEffect(() => {
    fetchUserById(params.id);
  }, [])
	return (
		<div className='grid h-screen place-items-center overflow-hidden'>
			{isUserLoading
				? 
					<Loader />
				:	
				<div className="flex items-center flex-col justify-center max-w-xl p-6 shadow-xl rounded-xl sm:px-12 dark:bg-[#222222] dark:text-zinc-400">
						<MdAccountCircle
							className="text-[#a3b5c5] mr-2 w-32 h-32"
						/>
						<div className="space-y-4 text-center divide-y divide-zinc-400">
							<div className="mt-2 space-y-1">
								<h2 className="text-xl font-semibold sm:text-2xl">{user.name}</h2>
							</div>
							<div className="inline-block justify-center items-center">
								<div className='flex items-center'>
									<ul className='userInfo  border-b-2 border-zinc-400 pb-10'>
										<li className='userText mt-10 text-2xl text-zinc-400'>
											<AlternateEmailIcon className='-translate-y-0.5 mr-1' />:{' '}
											{user.email}
										</li>
										<li className='userText mt-10 text-2xl text-zinc-400 '>
											<PhoneInTalkIcon className='-translate-y-0.5 mr-1' />:{' '}
											{user.phone}
										</li>
										<li className='userText mt-10 text-2xl text-zinc-400 '>
											<LocationCityIcon className='-translate-y-0.5 mr-1' />:{' '}
											{user.address && user.address.city}
										</li>
										<li className='userText mt-10 text-2xl text-zinc-400 '>
											<WorkIcon
											className='-translate-y-0.5 mr-1' />:{' '}
											{user.company && user.company.name}
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
			}
			
		</div>
  );
}

export default UserProfile