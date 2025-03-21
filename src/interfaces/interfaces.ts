export interface IButtonProps {
    name: string,
    link: string,
    backGroundColor?: string,
    style?: string
}

export interface IGenre {
    id: number,
    name: string
}

export interface ISingleMovie {
    adult: boolean,
    backdrop_path: null,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string 
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IMovieDetails {
    budget: number
    genres: Array<{
        id: number
        name: string
    }>
    id: number
    imdb_id: string
    origin_country: Array<string>
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: Array<{
        id: number
        logo_path: string
        name: string
        origin_country: string
    }>
    production_countries: Array<{
        iso_3166_1: string
        name: string
    }>
    release_date: string
    runtime: number
    spoken_languages: Array<{
        english_name: string
        iso_639_1: string
        name: string
    }>
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface MovieItemProps {
    movieID: number
}

export interface ITrailer {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}

//Interfaces für Übergabe Context

export interface ISetPageContext {
    page: number
    setPage: (page: number)=> void
}

export interface ISearchBarFetchContext {
    movieGenreList: IGenre[]
    setMovieGenreList: (movieGenreList: IGenre[]) => void
    movieDataList: ISingleMovie[]
    setMovieDataList: (movieDataList: ISingleMovie[]) => void
    page: number
    setPage: (page: number)=> void
}

export interface IFetchAllMoviesAndGenreContext {
    page?: number,
    movieDataList: ISingleMovie[]
    setMovieDataList: (movieDataList: ISingleMovie[]) => void
}