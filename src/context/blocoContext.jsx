import { createContext, useEffect, useState } from 'react';
import { Notes as data } from '../data/Notes';

export const BlocoContext = createContext();

function BlocoContextProvider(props) {
  const [notes, setNotes] = useState([]);
  const [keyId, setKeyId] = useState(4);

  function CreateNote(note) {
    setNotes([
      ...notes,
      {
        id: keyId,
        title: note.title,
        description: note.description,
      },
    ]);
  }

  useEffect(() => {
    setNotes(data);
  }, []);

  function DeleteNote(nodeId) {
    setNotes(notes.filter((note) => note.id !== nodeId));
  }

  return (
    <BlocoContext.Provider
      value={{
        keyId,
        setKeyId,
        notes,
        DeleteNote,
        CreateNote,
      }}>
      {props.children}
    </BlocoContext.Provider>
  );
}

export default BlocoContextProvider;
