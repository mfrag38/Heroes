import axios from 'axios';

export const get = async (url: string, options: any) => {
	axios
		.get(url)
		.then((response) => {
			if (options.success) {
				options.success(response.data);
			}
		})
		.catch((error) => {
			console.warn('[Get Error]:', error);
			if (options.error) {
				options.error(error);
			}
		});
};
