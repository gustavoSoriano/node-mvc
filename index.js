const app = require('./config/express')()
const config = require('./config/config.json')
const consign = require('consign')
http = require('http').createServer(app)

require('./config/database')(config.mongo_connect + config.db_name)
consign({ cwd: 'app' }).include('models').then('controllers').then('middlewares').then('routes').then('graphql').into(app)
http.listen(app.get('port'), () => console.log(`Server escutando na porta ${app.get('port')}`))
