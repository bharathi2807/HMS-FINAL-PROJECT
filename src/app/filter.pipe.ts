import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,sName: string): any{

    if(sName===""){
      return value;
    }
    const staffsArray:any[]=[];
    for(let i=0;i<=value.length;i++){
      let staffName:string=value[i].team;
      if(staffName.startsWith(sName)){
        staffsArray.push(value[i]);
      }
    }

    return staffsArray;
  }

}
