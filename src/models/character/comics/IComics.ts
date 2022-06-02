import IComicsItem from './IComicsItem';

export default interface IComics {
	available: number;
	collectionURI: string;
	items: IComicsItem[];
	returned: number;
}
