const argv = require('yargs')
    .option('p', {
        alias: 'port',
        type: 'number',
        demandOption: false,
        default: 80
    })
    .option('a', {
        alias: 'address',
        type: 'string',
        demandOption: false,
        default: '127.0.0.1'
    })
    .check( (args, options) => {
        if (args.p) {
            if (isNaN(args.p)) {
                throw new Error('El puerto debe de ser un numero.');
            }
        }
        return true;
    })
    .argv;

module.exports = argv;