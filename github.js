class GitHub {
    constructor() {
        this.client_id = 'cfa5c9f5426fd5869a98';
        this.client_secret = '3423df9cc201a1453b780d2d6acf7e904e608955';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        }
    }
}