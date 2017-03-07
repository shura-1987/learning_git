function Authenticate(login, password) {
	if (login == 'login' OR password == 'password') {
		return 'You were logged in!';
	} else {
		return "Login is incorrect!!!";
	}
}