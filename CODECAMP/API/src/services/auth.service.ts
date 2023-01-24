async function login(login:string , password:string) {
    const axios = require('axios');
    const authUrl = 'https://auth.etna-alternance.net/identity';
    
    const authData = {
      login: login,
      password: password
    };
    
    const dom = {
      domain: 'localhost'
    }
    axios.post(authUrl, authData, dom)
      .then((response: { headers: { [x: string]: any; }; }) => {
        // Récupérer le cookie dans la réponse
        const QueryResult = response.headers['set-cookie'];
    
        if (QueryResult === null ) {
          return 'something went wrong';
      }
      return QueryResult;
      })
      .catch((error: any) => {
        // Afficher l'erreur dans la console
        return error;
      });
}

export default login;