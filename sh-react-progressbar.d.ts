import {Component,ReactElement} from 'react'; 

declare module "sh-react-progressbar" {
    export interface ProgressbarProps{
        max?:number;
        min?:number;
        className?:string;
        value:number; 
        formatLabel?:(val:number,originalValue:number,min:number,max:number)=>string|ReactElement<any>;
    }

    export interface ProgressbarState{
        
    }

    export class Progressbar extends Component<ProgressbarProps,ProgressbarState>{

    }
}

