import React from "react";

type Props = {};

interface Nachricht {
  id: number;
  body: string;
}

const Chat = async (props: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "default",
  });
  const nachrichten: Nachricht[] = await res.json();
  return (
    <div className="w-1/2 mx-auto">
      {nachrichten.map((nachricht) => (
        <>
          {nachricht.id % 2 ? (
            <div className="chat chat-start">
              <div className="chat-bubble text-blue-950 bg-amber-500">
                {nachricht.body}
              </div>
            </div>
          ) : (
            <div className="chat chat-end">
              <div className="chat-bubble text-fuchsia-900 bg-lime-400">
                {nachricht.body}
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Chat;
