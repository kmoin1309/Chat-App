import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chat from "@/components/chat";
import Login from "@/components/login";

function App() {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="/chat" />
              // isAuth ? (
              //   <Navigate to="/chat" />
              // ) : (
              //   <Login
              //     setUser={setUser}
              //     setSecret={setSecret}
              //   />
              // )
            }
          />
          <Route
            path="/chat"
            element={
              <Chat
                  user={user}
                  secret={secret}
                />
              // isAuth ? (
              //   <Chat
              //     user={user}
              //     secret={secret}
              //   />
              // ) : (
              //   <Navigate to="/" />
              // )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
