import React, { PureComponent } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row, Button } from 'reactstrap';
import HeaderComponent from "../Header/HeaderComponent";
import './MapComponent.css';
import { NavLink, Navigate } from 'react-router-dom';

const mapStyle = {
    width: '100%',
    height: 600
}

const mapboxApiKey = 'pk.eyJ1IjoicGVkcm9sdWl6bm9ndWVpcmEiLCJhIjoiY2t2c3ZnM2EyMDBjcDJ1bzZhN29mZWNxMSJ9.NXKHYyTqaV3KF2YXtOFUAA'

const params = {
    country: "br"
}

const CustomMarker = ({index, marker}) => {
  return (
    <Marker
      longitude={marker.longitude}
      latitude={marker.latitude}>
      <div className="marker">
        <span><b>{index + 1}</b></span>
      </div>
    </Marker>
  )
};


class MapComponent extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 45.50884,
        longitude: -73.58781,
        zoom: 15
      },
      tempMarker: null,
      markers:[]
    };

  }

  onSelected = (viewport, item) => {
      this.setState({
        viewport,
        tempMarker: {
          name: item.place_name,
          longitude: item.center[0],
          latitude: item.center[1]
        }
      })
  }

  add = () => {
    var { tempMarker } = this.state

    this.setState(prevState => ({
        markers: [...prevState.markers, tempMarker],
        tempMarker: null
    }))
  }

  render() {
    const { viewport, tempMarker, markers } = this.state;
    return(
      <>
        <HeaderMap />
        <div clssName="content">
        <Container fluid={true} >
        <Row>
          <Col></Col>
        </Row>
        <Row className="py-4">
          <Col className="input" xs={2}>
            <Geocoder className="input-geo"
                mapboxApiAccessToken={mapboxApiKey}
                onSelected={this.onSelected}
                viewport={viewport}
                hideOnSelect={true}
                value=""
                queryParams={params}
            />
          </Col>
          <Col className="input">
           <Button className="button" color="primary" onClick={this.add}>Add</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...viewport}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
              { tempMarker &&
                <Marker
                  longitude={tempMarker.longitude}
                  latitude={tempMarker.latitude}>
                  <div className="marker temporary-marker"><span></span></div>
                </Marker>
              }
              {
                this.state.markers.map((marker, index) => {
                  return(
                    <CustomMarker
                      key={`marker-${index}`}
                      index={index}
                      marker={marker}
                    />
                  )
                })
              }
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
        </div>
        </>
   );
  }
}

export function HeaderMap() {

  function handleOnClick() {
    window.sessionStorage.clear();
    <Navigate to="/login" />
  }

  return(
    <div className="navbar">
        <NavLink className="content-header" to='/home'>
          Home
        </NavLink>
        <NavLink className="content-header" to='/map'>
          Map
        </NavLink>
        <NavLink className="content-header" to='/mapview'>
          Mapview
        </NavLink>
        <NavLink className="content-header" to='/login'>
          Login
        </NavLink>
        <NavLink className="content-header" to='/cadastro'>
          Cadastro
        </NavLink>
        <NavLink className="content-header" to='/login' onClick={handleOnClick}>
          Logout
        </NavLink>
      </div>
  );
}

export default MapComponent;