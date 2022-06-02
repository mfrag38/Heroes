import IData from './IData';

export default interface ICharactersResponse {
	attributionHTML: string;
	attributionText: string;
	code: number;
	copyright: string;
	data: IData;
	etag: string;
	status: string;
}
