import IEventsItem from './IEventsItem';

export default interface IEvents {
	available: number;
	collectionURI: string;
	items: IEventsItem[];
	returned: number;
}
