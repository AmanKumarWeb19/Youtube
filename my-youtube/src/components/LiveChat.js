import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    let i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(25) + " " + "🚀",
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  const handleLiveMessgae = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Siddharth",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div>
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-50 rounded-lg overflow-y-scroll no-scrollbar flex flex-col-reverse">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={handleLiveMessgae}
      >
        <input
          type="text"
          className="px-2 w-96 border border-black"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-200 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
