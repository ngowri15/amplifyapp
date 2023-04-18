import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
  }, []);

return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
<View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
      <View as="form" margin="3rem 0">
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
                name="image"
                as="input"
                type="file"
                style={{ alignSelf: "end" }}
              />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
     <View>
      <Button>List Notes</Button>
    </View>
    </View>
  );

  };

  export default withAuthenticator(App);


