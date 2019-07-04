const bcrypt = require('bcryptjs')
const argv = require('yargs')

argv
    .command('generate [password] [salt]', 'Generate hashed passwds', (yargs) => {
        yargs
            .option('password', { describe: 'Password string', type: 'string' })
	    .option('salt', { describe: 'Salt value, default is set to 10 if not specified', type: 'number' })
    }, async (argv) => {
        console.log(argv.password)
        let hash = await bcrypt.hash(argv.password, argv.salt ? parseInt(argv.salt) : 10)
        console.log('hashed pass:', hash)
    })
    .demandCommand(1, 'you need at least one command')
    .help()
    .argv

