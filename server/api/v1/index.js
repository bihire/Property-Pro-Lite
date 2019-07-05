const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/property');

module.exports = (app) => {
app.use('/api/v1', authRoutes);
app.use('/api/v1', propertyRoutes);
};