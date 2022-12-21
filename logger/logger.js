import { Logger } from 'tslog';

const logger = new Logger({
	type: 'pretty',
	displayInstanceName: false,
	displayLoggerName: false,
	displayFilePath: 'hidden',
	displayFunctionName: false,
});

export const logInfo = (obj) => {
	logger.info(obj);
};

export const errorLog = (message) => {
	logger.warn(message);
};
