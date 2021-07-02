class GitHub {
    constructor() {
        this.client_id = 'cfa5c9f5426fd5869a98';
        this.client_secret = '3423df9cc201a1453b780d2d6acf7e904e608955';
        this.repos_count = 5; 
        this.repos_sort = 'Created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profileData = await profileResponse.json();
        const repos = await reposResponse.json();


        return {
            profile: profileData,
            repos: repos
        } 
    }
}