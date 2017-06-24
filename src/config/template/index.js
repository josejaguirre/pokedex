import nunjucks from 'nunjucks'
import nunjucksDate from 'nunjucks-date'
import moment from 'moment'


export default (app) => {

	if (process.env.NODE_ENV === 'prod') {
		var env = nunjucks.configure('views', { express: app, noCache: false });
	} else {
		var env = nunjucks.configure('views', { express: app, noCache: true });
	}

	// Filter for date
	nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');
	nunjucksDate.install(env, 'date');
	env.addFilter('date', nunjucksDate);

	env.addFilter('fromnow', function(str, locale) {
		moment.locale(locale);
		return moment(str).fromNow();
	})

	app.engine('html', nunjucks.render);
	app.set('view engine', 'html');

};
