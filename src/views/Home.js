import React from "react";

import CardList from "../components/CardList";

const Home = (props) => {
  return <CardList data={props.data} />;
};

export default Home;
