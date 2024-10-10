import { getColor } from "@/app/definitions/utils";
import { Card, CardFace } from "../../definitions/interfaces";
import AutoTextSize from "../autotextsize";
import style from "./CardSplit.module.css";
import ManaParser from "../manaParser/manaParser";

export default function CardSplit({ cards }: { cards: Card }) {

    function hasPower(face: CardFace) {
        if (face.power) {
            return <div className={`${style.power} white`}>{cards.power}/{cards.toughness}</div>;
        } else if (face.loyalty) {
            return <div className={`${style.power} white`}>{cards.loyalty}</div>;
        }
    };

    function renderSplit() {
        const faces = [];
        for (const face of cards.card_faces) {
            faces.push(
                <div className={`${style.half}`}>
                    <div className={`${style.titleSplit} white`}>
                        <div className={style.left}> <AutoTextSize text={face.name} /> </div>
                        <div className={style.right}>
                        <p> {ManaParser(face.mana_cost)} </p>
                        </div>
                    </div>
                    <div className={`${style.typeSplit} white`}><AutoTextSize text={face.type_line} /></div>
                    <div className={`${style.ruleSplit} white`}><AutoTextSize text={face.oracle_text} />
                    {hasPower(face)}
                    </div>
                </div>
            )
        }
        return faces
    }

    let colors:string = getColor(cards.color_identity);
    return (
            <div className="card_cut">
                <div className={`playtest ${colors}`}>
                    <div className={`${style.rotateContainer}`}>
                        {renderSplit()}
                    </div>
                </div>
            </div>
    );
}