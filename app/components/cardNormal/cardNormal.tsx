import { Card } from "../../definitions/interfaces";
import { getColor } from "../../definitions/utils";
import AutoTextSize from "../autotextsize";
import "./cards.css";
import RulesParser from "../rulesParser";
import ManaParser from "../manaParser/manaParser";

export default function CardNormal({ cards }: { cards: Card }) {

    function hasPower(power: string, loyalty: string) {
        if (power) {
            return <div className={`power white`}>{cards.power}/{cards.toughness}</div>;
        } else if (loyalty) {
            return <div className={`power white`}>{cards.loyalty}</div>;
        }
    };

    let colors:string = getColor(cards.color_identity);
    // try{
    //     if(cards.colors) {colors = cards.colors.join('');}
    //     else {colors = cards.color_identity.join('');}
    // }catch{
    //     colors = cards.color_identity.join('');
    // }
    // if(colors.length > 2){
    //     colors = "GOLD";
    // }
    return (
            <div className="card_cut">
            <div className={`playtest ${colors}`}>
                <div className={`title white`}>
                    <div className={`left`}> <AutoTextSize text={cards.name} /> </div>
                    <div className={`right`}> <p> {ManaParser(cards.mana_cost)} </p> </div>
                </div>
                <div className={`image white`}> </div>
                <div className={`type white`}><AutoTextSize text={cards.type_line} /></div>
                <div className={`rules white content-center`}><AutoTextSize text={RulesParser(cards.oracle_text)} /></div>
                {hasPower(cards.power, cards.loyalty)}
            </div>
            </div>
    );
}