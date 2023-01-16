import {ChatEngine} from "react-chat-engine"
import './App.css';
import ChatFeed from "./Components/ChatFeed"
import LoginForm from "./Components/LoginForm";

function App() {
  if(!localStorage.getItem("username"))
  return <LoginForm />
  return (
    <div>
      <ChatEngine 
      height ="100vh"
      projectID = "1e2e0858-67ff-465b-b2ba-1690443e5613"
      userName = {localStorage.getItem("username")}
      userSecret = {localStorage.getItem("password")}
      renderChatFeed ={(chatAppProps) => < ChatFeed {... chatAppProps} /> } 
      />
    </div>
  );
}

export default App;
