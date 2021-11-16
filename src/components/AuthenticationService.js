
class AuthenticationService {
    regisgerSuccesslogin(username, password) {
        sessionStorage.setItem('authenticationUser', username);
    }

}
export default new AuthenticationService();