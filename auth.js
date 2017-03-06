function Authenticate(login, password) {
	if (login == 'login' AND password == 'password') {
		return 'You were logged in!';
	} else {
		return "Incorrect login/password";
	}
}