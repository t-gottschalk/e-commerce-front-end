import React from 'react';
// import { Route } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInAndSignUpPage.scss';

const SignInAndSignUpPage = () => {
	return(
		<div className='sign-in-and-sign-up-page'>
				<SignIn />
				<SignUp />
		</div>
	);
}

export default SignInAndSignUpPage;
