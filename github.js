class Github {
    constructor() {
        this.cliente_id = 'a69f38246412cd8a2f67';
        this.client_secret = 'c49ae87acaa76d319cbe47392040d7aaac60afa4';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/$
        {user}?client_id=${this.client_id}&client_secret=$
        {this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }

    }
}