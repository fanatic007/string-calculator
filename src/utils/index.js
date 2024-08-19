export function add(input) {
  if(input?.trim()===''){
    return 0;
  }
  if(!isNaN(input)){
    return +input; 
  }
  const delim = ',';
  return input?.replaceAll('\n',delim)?.split(delim)?.reduce((total, num)=> total + +num, 0);
}