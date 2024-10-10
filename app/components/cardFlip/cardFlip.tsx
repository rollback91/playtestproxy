import { Card, CardFace } from "../../definitions/interfaces";
import AutoTextSize from "../autotextsize";
import style from "./CardFlip.module.css";
import RulesParser from "../rulesParser";
import { getColor } from "@/app/definitions/utils";

export default function CardFlip({ cards }: { cards: Card }) {

    function hasPower(face:CardFace) {
        if (face.power) {
            return <div className={`${style.power} white`}>{face.power}/{face.toughness}</div>;
        } else if (face.loyalty) {
            return <div className={`${style.power} white`}>{face.loyalty}</div>;
        }
    };

    function renderSplit() {
        const faces = [];
        let index = 0;
        for (const face of cards.card_faces) {
            faces.push(
                <div className={index == 0 ? style.half : style.halfbottom}>
                    <div className={`${style.titleSplit} white`}>
                        <div className={style.left}> <AutoTextSize text={face.name} /> </div>
                        <div className={style.right}>
                            <span className="align-middle"> <i className="ms">{face.mana_cost}</i> </span>
                        </div>
                    </div>
                    <div className={`${style.typeSplit} white`}><AutoTextSize text={face.type_line} /></div>
                    <div className={`${style.ruleSplit} white`}><AutoTextSize text={RulesParser(face.oracle_text)} />
                    </div>
                    {hasPower(face)}
                    <br />
                </div>
            )
            index++;
        }
        return faces
    }
    // console.log(cards);
    let colors:string = getColor(cards.color_identity);

    return (
            <div className="card_cut">
                <div className={`playtest ${colors}`}>
                    {renderSplit()}
                </div>
            </div>
    );
}