import buildUrl from 'axios/lib/helpers/buildURL';
import { get } from './requestModel';

export const getCharacters = (limit: number, offset: number, options: any) => {
	get(
		buildUrl('https://gateway.marvel.com/v1/public/characters', {
			ts: 1,
			apikey: '0076188ab54c48ab190937a7c15555a9',
			hash: '632d7c96b136db1fd2788a08b04c9bb4',
			limit: limit,
			offset: offset,
		}),
		options,
	);
};
