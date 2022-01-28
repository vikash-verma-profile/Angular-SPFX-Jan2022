import {PipeTransform,Pipe } from '@angular/core';
import {User} from './app.model';

@Pipe({
    name:'filter',
    pure:false // if true then its pure if false then its inpure
})

export class FilterPipe implements PipeTransform{
    transform(users: User[], serchItem:string) {
        if(!users || !serchItem){
            return users;
        }
    return users.filter(user=>user.name.toLowerCase().indexOf(serchItem.toLowerCase())!==-1);
    }
}