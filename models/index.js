var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
let env;
let userArg = process.argv[2];
const configFileName = 'config.json';
let config;
var db = {};


switch (userArg) {
    case 'james':
        env = 'james';
        break;
    case 'caroline':
        env = 'caroline';
        break;
    case 'evgheni':
        env = 'evgheni';
        break;
    case 'dale':
        env = 'dale';
        break;
    case 'trevor':
        env = 'trevor';
        break;
    case 'devserver':
        env = 'devserver';
        break;
    default:
        env = 'devserver';
}


config = require(__dirname + '/../config/' + configFileName)[env];
console.log(env);

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.env = env;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
