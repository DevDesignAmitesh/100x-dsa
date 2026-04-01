const arr = [5, 4, 3, 2, 1];

function main () {
  const prnt = [] 
  for (let i = arr.length - 1; i >= 0; i--) {
    const elm = arr[i];
    if (!elm) continue
    prnt.push(elm);
  }  
}

main();