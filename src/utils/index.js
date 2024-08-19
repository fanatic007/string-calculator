export function add(input) {
  if(input?.trim()===''){
    return 0;
  }
  if(!isNaN(input)){
    return +input; 
  }
}