import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MalioboroImage from "../assets/malioboro.jpg";
import "./AllDestinasi.css";
import Footer from "./Footer";
import { NavbarVisibilityContext } from "../App";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -7.7956,
  lng: 110.3695,
};

export default function Malioboro() {
  const navigate = useNavigate();
  const { setNavbarVisible } = useContext(NavbarVisibilityContext);

  useEffect(() => {
    // Hide navbar when this component is mounted
    setNavbarVisible(false);

    // Show navbar when this component is unmounted
    return () => setNavbarVisible(true);
  }, [setNavbarVisible]);

  return (
    <>
      <div
        className="destination"
        style={{ backgroundImage: `url(${MalioboroImage})` }}
      ></div>
      <div className="destination-container">
        <div className="info-wrapper">
          <h2>Temukan Pesona Malioboro</h2>
          <p>
            Mulailah perjalanan yang mendebarkan ke Malioboro, salah satu
            destinasi paling ikonik di Indonesia. Saksikan kehidupan malam yang
            ramai dan rasakan kehangatan budaya yang kental di sekitar area ini.
          </p>
          <h3>Pengalaman</h3>
          <h4>Highlight</h4>
          <ul>
            <li>Jelajahi kehidupan malam yang semarak di Malioboro</li>
            <li>
              Pelajari tentang sejarah dan kebudayaan yang kaya di sekitar
              Malioboro
            </li>
            <li>
              Temukan cerita dan legenda yang terkait dengan kawasan Malioboro
            </li>
            <li>Rasakan kehangatan masyarakat lokal yang ramah</li>
          </ul>
          <h4>Deskripsi Lengkap</h4>
          <p>
            Siapkan diri Anda untuk terpesona oleh keramaian dan kehangatan
            Malioboro. Telusuri toko-toko yang berjejer, kedai kopi yang ramai,
            dan berbagai atraksi jalanan yang menarik. Dapatkan wawasan tentang
            sejarah dan kekayaan budaya yang melekat pada setiap sudut
            Malioboro.
          </p>
          <p>
            Telusuri cerita rakyat dan legenda urban yang berkembang di kalangan
            penduduk setempat. Berinteraksi dengan penduduk setempat yang ramah
            dan berpengetahuan luas tentang sejarah dan kehidupan sehari-hari di
            Malioboro.
          </p>
          <p>
            Baik Anda seorang pecinta belanja, pecinta kuliner, atau hanya ingin
            merasakan kehidupan malam yang bersemangat, Malioboro menawarkan
            pengalaman yang tak terlupakan bagi setiap pengunjungnya.
          </p>
        </div>
        <div className="booking-container">
          <h1>Malioboro on Maps</h1>
          <div className="map-container">
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="btn-book"
              onClick={() => navigate("/")}
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
