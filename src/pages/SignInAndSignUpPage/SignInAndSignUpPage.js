import React from 'react';
// import { Route } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';

import './SignInAndSignUpPage.scss';

const SignInAndSignUpPage = () => {
	return(
		<div className='sign-in-and-sign-up-page'>
				<SignIn />
		</div>
	);
}

export default SignInAndSignUpPage;
