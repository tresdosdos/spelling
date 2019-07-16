export let environment: any;

if (process.env.NODE_ENV === 'development') {
  environment = {
    X_RAPID_API_KEY: '9ec6cd292fmshe41bc26150b1206p1d7e5ejsn142267af27d0',
    X_RAPID_HOST: 'wordsapiv1.p.rapidapi.com',
  };
} else {
  environment = {
    X_RAPID_API_KEY: '9ec6cd292fmshe41bc26150b1206p1d7e5ejsn142267af27d0',
    X_RAPID_HOST: 'wordsapiv1.p.rapidapi.com',
  };
}
