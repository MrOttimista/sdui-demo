import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import SchemaRenderer from "./SchemaRenderer";

import "./App.css";

const App = () => {
  const [uiSchema, setUiSchema] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, "layout");
        const querySnapshot = await getDocs(collectionRef);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Collection data:", data);
        setUiSchema(data);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchData();
  }, []);

  console.log(
    "tq",
    uiSchema,
    uiSchema.find((item) => item.id === "home")
  );
  return (
    <div className="App App-header">
      <h1>Server-Driven UI Demo</h1>
      <SchemaRenderer
        schema={uiSchema?.find((item) => item.id === "home")?.sections ?? []}
      />
    </div>
  );
};

export default App;
