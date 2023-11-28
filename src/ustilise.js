export const getDataFormLocalStorage=()=>{
    const data=localStorage.getItem('products');
    console.log(data);
   if(data){
    return JSON.parse(data);
   }
   return []
}