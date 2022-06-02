import ICharacter from '../character/ICharacter';

export default interface IData {
	count: number;
	limit: number;
	offset: number;
	results: ICharacter[];
	total: number;
}
