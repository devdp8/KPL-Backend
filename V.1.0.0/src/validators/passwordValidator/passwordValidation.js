const bcrypt = require('bcrypt-nodejs');

module.exports.hash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports.validate = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}