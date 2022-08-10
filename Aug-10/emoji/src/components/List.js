import emojiList from "../EmojiList";
import { useState } from 'react';

const List = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <input type="text" onKeyUp={e => setSearch(e.target.value)} />
      <ul>
        {emojiList.filter(element => {
          if(element.description.startsWith(search)) {
            return true;
          }
          return false;
        }).map((element, idx) => {
          return <li key={idx}>{element.emoji} - {element.description}</li>
        })}
      </ul>
    </>
  )
}

export default List