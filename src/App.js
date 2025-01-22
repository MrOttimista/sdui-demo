import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import SchemaRenderer from "./schemaRenderer";

import "./App.css";

const App = () => {
  const [uiSchema, setUiSchema] = useState([]);

  useEffect(() => {
    // Get last part of URL
    const page = window.location.pathname.split("/").pop();
    const target = page === "" ? "home" : page;

    const fetchData = async () => {
      try {
        // Reference to the specific document by target id
        const docRef = doc(db, "layout", target);

        // Fetch the document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          // Document data
          console.log("Document data:", docSnap.data());
          setUiSchema({ ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App App-header">
      <SchemaRenderer schema={uiSchema?.sections ?? []} />
    </div>
  );
};

export default App;
