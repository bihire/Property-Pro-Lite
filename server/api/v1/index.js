const routes = require('./routes');

module.exports = (app) => {
app.use('/api/v1', routes);
};