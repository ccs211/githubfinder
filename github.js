// class Github {
//     constructor() {
//         this.cliente_id = 'a69f38246412cd8a2f67';
//         this.client_secret = 'c49ae87acaa76d319cbe47392040d7aaac60afa4';
//     }

//     async getUser(user) {
//         const profileResponse = await fetch(`https://api.github.com/users/$
//         {user}?client_id=${this.client_id}&client_secret=$
//         {this.client_secret}`);

//         const profile = await profileResponse.json();

//         return {
//             profile
//         }

//     }
// }

class Github {
    constructor() {
      this.config = {
        headers: {
          Authorization: '79458d6914eaacb1afbea334c209818126cf0e14'
        }
      }
      this.repos_count = 5
      this.repos_sort = 'created: asc'
    }
    async getUser(user) {
      const profileResponse = await fetch(
        `https://api.github.com/users/${user}`,
        this.config
      )
   
      const repoResponse = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
        this.config
      )
   
      const profile = await profileResponse.json();
   
      const repos = await repoResponse.json();
   
      return {
        profile,
        repos
      }
    }
  }