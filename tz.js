const yargs = require('yargs');
const moment = require('moment-timezone');

const command = yargs.argv._[0];
const params = yargs.argv;

moment.tz.setDefault('America/New_York');

let targetTimezone;

if (Object.keys(params).length < 2) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  targetTimezone = command;
  if (params.format) {
    console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
    process.exit(1);
  }
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
}
