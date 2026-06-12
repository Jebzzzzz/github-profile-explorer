export interface GitHubUser {
    login: string,
    name: string | null,
    avatar_url: string,
    bio: string | null,
    public_repos: number,
    followers: number,
    following: number,
    html_url: string,
}

export interface GitHubRepo {
    id: number,
    name: string,
    description: string | null,
    language: string | null,
    stargazers_count: number,
    forkkks_count: number,
    html_url: string,
    updated_at: string,
}

export type SortKey = 'stars' | 'forks' | 'updated';
export type FilterLanguage = string | 'all'; 
