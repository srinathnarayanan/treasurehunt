import { Text, PrimaryButton, IconButton, IconNames, Stack, initializeIcons, TextField } from 'office-ui-fabric-react';
import * as React from 'react'
import { Stages } from './Utils';

interface LandingPageState {
  stage: number,
  currentLat: number,
  currentLong: number,
  password: string
} 

export class LandingPage extends React.Component<{}, LandingPageState> {
  constructor(props: any) {
    super(props);
    initializeIcons()
    this.state = {
      stage: -1,
      currentLat: undefined,
      currentLong: undefined,
      password: undefined
    }
  }

  componentDidCatch(reason: any) {
    alert(reason)
  }

  private updateCurrentLocation = () => {
  const updatePosition = (position) => this.setState({currentLat: position.coords.latitude, currentLong: position.coords.longitude})
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updatePosition,
    (reason)=> {
      alert(reason)
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  }

  private getDistanceFromLatLonInKm = () : number => {
    const nextStage = Stages[this.state.stage + 1]
    const targetLat = nextStage.targetLat
    const targetLong = nextStage.targetLong

    const currentLat = this.state.currentLat
    const currentLong = this.state.currentLong

    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(targetLat-currentLat);  // deg2rad below
    var dLon = this.deg2rad(targetLong-currentLong); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(currentLat)) * Math.cos(this.deg2rad(targetLat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    if (d < 0.5) {
      this.setState({stage: this.state.stage + 1}, () => alert("you reached destination " + this.state.stage))
      return this.getDistanceFromLatLonInKm()
    }
    return d;
  }

  private submitPassword = () : void => {
    if (Stages[this.state.stage + 1].password === this.state.password) {
      this.setState({stage: this.state.stage + 1, password: undefined}, () => alert("correct password. unlocking " + this.state.stage))
    } else {
      alert("incorrect password")
    }
  }
  
  private deg2rad(deg: number) : number {
    return deg * (Math.PI/180)
  }

  render() {
    return (
      <Stack styles={{root: {width: 300, padding: 10}}}>
      <h1>treasure hunt</h1>
      <Text>stage: {this.state.stage}</Text>
      {this.state.stage !== Stages.length - 1 ? 
      <>
      {this.state.currentLat && <Text>currentLat: {this.state.currentLat}</Text>}
      {this.state.currentLong && <Text>currentLong: {this.state.currentLong}</Text>}
      {this.state.currentLat && this.state.currentLong && <Text>dist to next stage: {this.getDistanceFromLatLonInKm()} kms</Text>}
      <IconButton iconProps={{iconName: "CompassNW"}} onClick={this.updateCurrentLocation}/>
      <TextField onChange={(event, newValue) => this.setState({password: newValue})}/>
      <PrimaryButton text="submit password" onClick={this.submitPassword}/>
      </>
      :
      <Text>Game over! well done</Text>
      }
      </Stack>
    )
  }
}
