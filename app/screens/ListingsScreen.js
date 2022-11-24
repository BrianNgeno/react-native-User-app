import React from "react";
import { FlatList } from "react-native";
import { Card } from "../components/Card";
import { Screen } from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Nairobi Nyeri Highway",
    location: "Makutano",
    image: require("../assets/background.jpeg"),
  },
  {
    id: 2,
    title: "Nairobi Nakuru Highway",
    location: "Gilgil",
    image: require("../assets/background.jpeg"),
  },
];
function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) => 
          <Card
            title={item.title}
            subTitle={item.location}
            image={item.image}
          />
        }
      />
    </Screen>
  );
}

export default ListingsScreen;
