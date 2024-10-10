export function getColor(mtgColor:string[]){

    let colors:string;
    if(mtgColor.length > 2){
        colors = "GOLD";
    }else if(mtgColor.length === 0) {
        colors = "ARTIFACT"
    }else{
        colors = mtgColor.join('');
    }

    return colors
    
}