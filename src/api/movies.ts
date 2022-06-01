import buildUrl from 'axios/lib/helpers/buildURL';
import { get } from './requestModel';

export const getMovies = (query: string, options: any) => {
	get(
		buildUrl('http://www.omdbapi.com/', {
			ts: 1,
			apikey: '8d424415',
			s: query,
		}),
		options,
	);
};
