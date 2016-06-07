var sum = 0;
for(p in process.argv) {
  if(p > 1) {
    //console.log(parseInt(process.argv[p]));
    sum += parseInt(process.argv[p]);
  }
}
console.log(sum);
