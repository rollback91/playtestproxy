export default function RulesParser(text: string) {

    const splittedText = text.split('\n');
    return (
        splittedText.map(text => <>{text} <br /></>)
    )
}