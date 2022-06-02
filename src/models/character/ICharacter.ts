import IThumbnail from './IThumbnail';
import IComics from './comics/IComics';
import IEvents from './events/IEvents';
import ISeries from './series/ISeries';
import IUrl from './IUrl';

export default interface ICharacter {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: IThumbnail;
	resourceURI: string;
	comics: IComics;
	series: ISeries;
	events: IEvents;
	urls: IUrl;
}
