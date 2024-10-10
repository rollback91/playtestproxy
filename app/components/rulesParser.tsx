export default function RulesParser(text: string) {
    console.log("rules", text);
    const splittedText = text.split('\n');
    return (
        splittedText.map(text => <>{text} <br /></>)
    )
}