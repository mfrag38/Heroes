import IMovie from '../movie/IMovie';

export default interface IMoviesResponse {
	Search: IMovie[];
	totalResults: string;
	Response: string;
	Error: string;
}
