import ISeriesItem from './ISeriesItem';

export default interface ISeries {
	available: number;
	collectionURI: string;
	items: ISeriesItem[];
	returned: number;
}
