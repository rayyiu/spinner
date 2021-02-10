process.stdout.write('hello from spinner1.js... \rheyyy\n');
const spinners = ["|" , "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;
for (const spinnees of spinners){
  setTimeout(() => {
    process.stdout.write(`\r ${spinnees}`);
  }, delay)
  delay += 200;
}

setTimeout(() => {
  process.stdout.write('\n');}, 1900)
// setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 100);
  
//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 300);
  
//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 500);
  
//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r\\   '); 
//   }, 700);

//   setTimeout(() => {
//     // Need to escape the backslash since it's a special character.
//     process.stdout.write('\r|   '); 
//   }, 900);


//   setTimeout(() => {
//     process.stdout.write('\r/   ');
//   }, 1100);

//   setTimeout(() => {
//     process.stdout.write('\r-   ');
//   }, 1300);

//   setTimeout(() => {
//     process.stdout.write('\r\   ');
//   }, 1500);

//   setTimeout(() => {
//     process.stdout.write('\r|   ');
//   }, 1700);

//   setTimeout(() => {
//     process.stdout.write('\n');}, 1900)
