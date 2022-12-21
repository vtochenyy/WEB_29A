import { logInfo, errorLog } from '../logger/logger.js';

const getRequest = async (url) => {
	try {
		let result = await fetch(url).then((data) => data.json());
		logInfo('The query was succesfully completed');
		logInfo(result);
		return result;
	} catch (err) {
		errorLog(err);
	}
};

const postRequest = async (url, params) => {
	try {
		let result = await fetch(url, {
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			method: 'POST',
			body: JSON.stringify(params),
		}).then((data) => data.json());
		logInfo('The query was succesfully completed', result);
		logInfo(result);
		return result;
	} catch (err) {
		errorLog(err);
	}
};

const sendRequest = async (url, params, requestType) => {
	if (url && !params) {
		return await getRequest(url);
	} else if (url && params && !requestType) {
		return await postRequest(url, params);
	} else if (url && params && requestType) {
		try {
			let result = await fetch(url, {
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				method: requestType.toUpperCase(),
				body: JSON.stringify(params),
			});
			logInfo('The query was succesfully completed', result);
			logInfo(result);
			return result;
		} catch (err) {
			errorLog(err);
		}
	}
};

export default sendRequest;
