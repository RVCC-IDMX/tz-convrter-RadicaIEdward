const yargs = require('yargs');

console.log(yargs.argv);

const command = yargs.argv._[0];
const params = yargs.argv;

// if (command === 'fly') {
//   console.log('flying');
// } else if (command === 'drive') {
//   if (params.speed && params.car) { console.log(`driving ${params.car} at ${params.speed} mph`); } else {
//     console.log('driving');
//   }
// }

const moment = require('moment-timezone');

moment.tz.setDefault('America/New_York');

let targetTimezone;

if (yargs.argv.length < 3) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  targetTimezone = yargs.argv._[0];
}

console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
