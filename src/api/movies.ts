import buildUrl from 'axios/lib/helpers/buildURL';
import { get } from './requestModel';

export const getMovies = (query: string, page: number, options: any) => {
	get(
		buildUrl('http://www.omdbapi.com/', {
			ts: 1,
			apikey: '8d424415',
			page: page,
			s: query,
		}),
		options,
	);
};
