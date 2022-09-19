import React, { useState } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import UserForm from "./components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  const submit = (user) => {    
    setUsers([...users, user]);    
  };

  return (
    <>
      <div style={{ marginTop: "15%" }}>
        <Container>
          <Card>
            <div style={{ padding: 20 }}>
              <UserForm submit={submit} />
            </div>
          </Card>
          {users.length > 0 && (
            <Card>
              <ul style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                {users.map((x) => (
                  <li key={x.email}>{`${x.name} ${x.lastname}: ${x.email}`}</li>
                ))}
              </ul>
            </Card>
          )}
        </Container>
      </div>
    </>
  );
};

export default App;
