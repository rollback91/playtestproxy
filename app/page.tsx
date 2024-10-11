'use client'
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Home() {
  const router = useRouter()
  // const [isLoading, setIsLoading] = useState<boolean>(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)

    const samples: string[] = [];
    // let cards: any[] | Card = [];
    const data = formData.get('cardList');
    if (data !== null) {
      const lines: string[] = (data as string).split('\n');

      for (const line of lines) {
        console.log(line);
        const splitted = line.trim().split(' ');
        const [number, ...name] = splitted;
        for (let i = 0; i <  parseInt(number); i++) {
          samples.push(name.join(" "));
        }
      }
      console.log(samples);
      // setIsLoading(true); // Set loading to true when the request starts
      router.push(`/deck?cardLists=${samples.join('$/')}`);
      // setIsLoading(true); // Set loadi}
    }
  }

  return (
    <main>
      <div className="center">
      <form onSubmit={onSubmit}>
        <label htmlFor="cardList">Insert card list</label>
        <br />
        <textarea id="cardList" name="cardList" rows={10} cols={50}>
        </textarea>
        <br />
        <button type="submit">SUBMIT
          {/* {isLoading ? 'Loading...' : 'Submit'} */}
        </button>
      </form>
      </div>
    </main>
  );
}

