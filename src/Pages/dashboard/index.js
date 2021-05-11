import React from "react";
import Header from "../../Components/Header";
import Helmet from "react-helmet";
class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Helmet title="Панель управления" />
        <Header />
      </>
    );
  }
}

export default Dashboard;
