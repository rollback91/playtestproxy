export default function RulesParser(text: string) {
    console.log("rules", text);
    text = text.toString();
    const symbols = text.match(/(?<=\{)(.*?)(?=\})/g);

    let ms:string;
    symbols?.map((symbol) =>{
        if(symbol === "T") ms = "tap"
        else ms = symbol.split('/').join('');
        
        text = text.replace(
            `\{${symbol}\}`, 
            `<i class="ms ms-cost ms-${ms.toLowerCase()}" style="font-size: 0.8em;"></i>`
        );
    });

    text = text.replace('\n',`<br\>`);

    const obj = {__html:text};
    return (
        <div dangerouslySetInnerHTML={obj} />
    )
}