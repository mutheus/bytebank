export class Authentication {
  static login(user, password) {
    if (Authentication.isAuthenticated(user)) {
      return user.authenticate(password);
    }
    
    return false;
  }
  
  static isAuthenticated(user) {
    return 'authenticate' in user && user.authenticate instanceof Function;
  }
}