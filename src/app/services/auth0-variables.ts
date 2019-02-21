interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '2iMS8o0JVji3WlO5kOa453Rzm47tz1KZ',
  domain: 'yapanss.auth0.com',
  // callbackURL: 'http://localhost:3000/login'
  callbackURL: 'https://myvotingapp.herokuapp.com/login'
};
