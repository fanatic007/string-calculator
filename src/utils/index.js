export function add(input) {
  if(!input){
    return 0;
  }
  if(!isNaN(+input) && +input>0){
    return +input; 
  }
  input = input.split('');
  const delim = ((input[0] + input[1] === '//')? 
    input?.splice(0,4)?.slice(2,3)
  : [',']
  )[0];

  return input?.join('')?.replaceAll('\n', delim)?.split(delim)?.reduce((total, num)=> {
    if(isNaN(+num))
      throw new Error(`Invalid number ${num}`);
    if(Math.sign(+num)<0)
      throw new Error(`Negative numbers not allowed ${num}`);    
    return total + +num;
  }, 0);
}