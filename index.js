import request from './servives/services.js';

request('https://jsonplaceholder.typicode.coasdasm/posts', {
	title: 'foo',
	body: 'bar',
	userId: 1,
});
