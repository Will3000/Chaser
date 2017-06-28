import React from 'react';
import ReactDOM from 'react-dom';
import Map from 'google-maps-react';
import Marker from 'google-maps-react/dist/components/Marker';
import InfoWindow from 'google-maps-react/dist/components/InfoWindow';
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent';

export class Container extends React.Component {
  constructor(props){
    super(props);
    // const{lat, lng} = this.props.initialCenter
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }
  onMarkerClick(props, marker, e){
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render() {
    const style = {
      position: 'fixed',
      width: '100%',
      height: '100%'
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div style={style}>
        <Map google={this.props.google} disableDefaultUI={true} zoom={13} center={this.props.initialCenter} onClick={this.onMapClicked.bind(this)}>
        {this.props.busJson.map((e, i)=>
          (
            <Marker onClick={this.onMarkerClick.bind(this)}
            title={e.RouteNo}
            name={e.RouteNo+' '+e.Direction}
            recordedTime={e.RecordedTime}
            destination={e.Destination}
            position={{lat: e.Latitude, lng: e.Longitude}}
            icon={{
              url: `../public/images/Bus${e.Direction=="SOUTH"||e.Direction=="EAST"?1:2}.png`,
              // anchor: new google.maps.Point(32,32),
              scaledSize: new google.maps.Size(32,32)
            }} />
          )
        )}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
              <div>Destination:{this.state.selectedPlace.destination}</div>
              <div>RecordedTime:{this.state.selectedPlace.recordedTime}</div>
            </div>
        </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo',
  libraries: ['places']
})(Container)
