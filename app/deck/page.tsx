'use client'
import { Card, layout } from "../definitions/interfaces";
import CardNormal from "../components/cardNormal/cardNormal";
import CardSplit from "../components/cardSplit/cardSplit";
import CardFlip from "../components/cardFlip/cardFlip";
import useSWR from 'swr'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import ManaParser from "../components/manaParser/manaParser";
import RulesParser from "../components/rulesParser";

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function FetchCards(cardName: string) {
  const { data, error, isLoading } = useSWR(`https://api.scryfall.com/cards/named?exact=${cardName}`, fetcher);
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  return data
}

function GetCards() {
  const searchParams = useSearchParams()
  const out: any[] = [];
  let cards: any[] = [];

  const lines: string[] = searchParams.get('cardLists')!.split('$/');
  let counter:number = 0; // counting cards to delimit page

  for (const sample of lines) {
    counter++;
    const card: Card = FetchCards(sample.toLocaleLowerCase());

    switch (card.layout) {
      case layout.PROTOTYPE:
      case layout.PLANAR:
      case layout.SAGA:
      case layout.CASE:
      case layout.CLASS:
      case layout.MELD: // back side is not printed automatically it needs to be added to the list
      case layout.NORMAL: { cards.push(<CardNormal cards={card}></CardNormal>); break; }
      case layout.SPLIT: { cards.push(<CardSplit cards={card}></CardSplit>); break; }
      case layout.ADVENTURE: //colors do not always match
      case layout.MODALDFC:
      case layout.TRANSFORM:
      case layout.FLIP: { cards.push(<CardFlip cards={card}></CardFlip>); break; }
      default: {
        console.log("error printing", card);
      }
    }

    if(counter === 9){
      out.push(<div className="page"> {cards} </div>);
      cards = [];
      counter = 0;
    }
  }

  if(cards.length !== 0){
    out.push(<div className="page"> {cards} </div>);
  }

  return (<>{out}</>)
}


export default function Page() {
/* TEST CARDS
    1 lightning bolt
    1 Aarakocra Sneak
    1 Aardwolf's Advantage
    1 Ajani, Adversary of Tyrants
    1 Personal Decoy
    1 Alive
    1 Warrant
    1 Budoka Gardener
    1 Curse of the Fire Penguin
    1 Monster
    1 Aberrant Researcher
    1 Aetherblade Agent
    1 Ajani, Nacatl Pariah
    1 Azusa's Many Journeys
    1 Rowan, Scholar of Sparks
    1 Agadeem's Awakening
    1 Blightstep Pathway
    1 Argoth, Sanctum of Nature
    1 Titania, Voice of Gaea
    1 Titania, Gaea Incarnate
    1 Brisela, Voice of Nightmares
    1 Urza, Planeswalker
    1 Blacksmith's Talent
    1 Druid Class
    1 Case of the Burning Masks
    1 Case of the Gateway Express
    1 A Golden Opportunity
    1 Accident-Prone Apprentice
    1 Beluna Grandsquall
    1 Bant
*/
  return (
    <main>
      <link href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css" rel="stylesheet" type="text/css" />
      {/* <div className="page"> */}
        <Suspense>
          <GetCards></GetCards>
        </Suspense>
      {/* </div> */}
    </main>
  );
}