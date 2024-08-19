export function add(input) {
  if(input?.trim()===''){
    return 0;
  }
  if(!isNaN(input)){
    return +input; 
  }
  input = input.split('');
  const delim = ((input[0] + input[1] === '//')? 
    input?.splice(0,4)?.slice(2,3)
  : [',']
  )[0];
  return input?.join('')?.replaceAll('\n', delim)?.split(delim)?.reduce((total, num)=> total + +num, 0);
}