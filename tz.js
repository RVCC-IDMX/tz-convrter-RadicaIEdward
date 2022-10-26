const yargs = require('yargs');
const moment = require('moment-timezone');

const commandArray = yargs.argv._;
const command = yargs.argv._[0];
const params = yargs.argv;

moment.tz.setDefault('America/New_York');
const defaultTime = ('America/New_York');
const allTimezones = moment.tz.names();
let targetTimezone;

if (commandArray.length === 0) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  targetTimezone = command;
  if (allTimezones.includes(targetTimezone) === false) {
    console.log('This timezone does not exist in our database. Please try again.');
    process.exit(2);
  } else if (params.format) {
    console.log(`The time here is: ${moment().tz(defaultTime).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
    console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
    process.exit(0);
  }
  console.log(`The time here is: ${moment().tz(defaultTime).format()}`);
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
}
