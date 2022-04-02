import React from "react";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import NoItem from "../../components/NoItem/NoItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useGlobalContext } from "../../context";
import "./Home.css";

const Home = () => {
  const { hotels } = useGlobalContext();
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const mapHotels = () => {
    return hotels.map((item) => {
      return <Card key={item.id} {...item} />;
    });
  };

  return (
    <>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          inner={<SearchBar size={"mobile"} />}
        />
      ) : null}
      <>
        <div className="app-search">
          <div className="app-search-bar">
            <SearchBar />
          </div>
          <button className="app-search-modal" onClick={openModal}>
            Search
          </button>
        </div>
        {hotels.length === 0 ? (
          <h2 className="section-title">
            <NoItem item="No Hotels found please search something else 🗑️" />
          </h2>
        ) : (
          <section className="section">
            <div className="linehead" />
            <div className="hotel-center">{mapHotels()}</div>
          </section>
        )}
      </>
    </>
  );
};

export default Home;
