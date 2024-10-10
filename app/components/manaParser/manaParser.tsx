export default function ManaParser(text: string) {

    let regex = /([^{}]+)/g;
    // console.log(text.toString())s
    const splittedTexts = text.toString().match(/([^{}]+)/g);
    let res = [];
    if (splittedTexts !== null) {
        for (let splitted of splittedTexts) {
            // console.log(splitted)
            res.push(
                <i className={`ms ms-cost ms-${splitted.replace('/', '').toLowerCase()}`}></i>
            )
        }
    }
    // console.log(text, splittedTexts);
    return (
        <>{res}</>
    )
}