import IStoriesItem from './IStoriesItem';

export default interface IStories {
	available: number;
	collectionURI: string;
	items: IStoriesItem[];
	returned: number;
}
