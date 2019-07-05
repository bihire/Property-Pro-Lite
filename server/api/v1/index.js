const routes = require('./routes/auth');

module.exports = (app) => {
app.use('/api/v1', routes);
};