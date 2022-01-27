
//browser console logger
//email
//db logger

//Interface
export interface ILogger{
    Log();
}
//base class
export class BaseLogger implements ILogger{
    Log(){
       
    }
}
//Console Logger--Dervied class from base class
export class ConsoleLogger extends BaseLogger{
    Log(){
        console.log("Using Console Logger");
    }
}
//DB Logger--Dervied class from base class
export class DbLogger extends BaseLogger{
    Log(){
        console.log("Using Db Logger");
    }
}
//File Logger--Dervied class from base class
export class FileLogger extends BaseLogger{
    Log(){
        console.log("Using File Logger");
    }
}

