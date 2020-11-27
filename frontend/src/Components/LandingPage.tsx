import { Text, PrimaryButton, IconButton, Stack, initializeIcons, TextField, ITextField } from 'office-ui-fabric-react';
import * as React from 'react'
import { source, gamesitry, Stages, Stage } from './Utils';

interface LandingPageState {
  stage: number,
  currentLat: number,
  currentLong: number,
  distanceToNextStage: number
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
      distanceToNextStage: undefined,
      password: undefined
    }
  }

  private updateCurrentLocation = () => {
  const updatePosition = (position) => {
    this.setState({currentLat: position.coords.latitude, currentLong: position.coords.longitude})
    this.getDistanceFromLatLonInKm()
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(updatePosition,
    (reason)=> {
      alert(reason)
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  }

  private getDistanceFromLatLonInKm = () : void => {
    
    let distanceToNextStage = this.calculateDistanceToNextStage()

    if (distanceToNextStage < 1) {
      this.setState({stage: this.state.stage + 1}, () => {
        let distanceToNextStage = this.calculateDistanceToNextStage()
        alert(`you reached ${Stages[this.state.stage].name}! unlocking next level ...`)
        this.setState({distanceToNextStage: distanceToNextStage})
      })
    } else {
      this.setState({distanceToNextStage: distanceToNextStage})
    }
  }

  private calculateDistanceToNextStage = () : number => {
    const nextStage = Stages[this.state.stage + 1]
    if (!nextStage) {
      return undefined
    }

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
    return d
  } 
  

  private submitPassword = () : void => {
    const filteredPassword = this.state.password.trim().toLowerCase()
    if (Stages[this.state.stage + 1].password === filteredPassword) {
      this.setState({stage: this.state.stage + 1, password: undefined}, () => {
        alert(`you reached ${Stages[this.state.stage].name}! unlocking next level ...`)
      })
    } else {
      alert("incorrect password")
    }
  }
  
  private deg2rad(deg: number) : number {
    return deg * (Math.PI/180)
  }

  private getStageElement(): JSX.Element {
    if (this.state.stage === -1) {
      return source
    } else if (this.state.stage === Stages.length) {
      return gamesitry
    }
    return Stages[this.state.stage].element
  }

  render() {
    return (
      <>
      <h1 className="title"> Bubble's day out! </h1>
      <div style={{padding: 10, height: "60vh", overflowY: "scroll"}}>
      {this.getStageElement()}
      </div>
      <Stack tokens={{childrenGap: 5}} styles={{root: {width: 300, padding: 10}}}>
      {this.state.stage !== Stages.length - 1 && 
      <>
      <Stack horizontal tokens={{childrenGap: 5}} verticalAlign="center">
        <Text>
          Are you at the right place?
        </Text>
        <IconButton iconProps={{iconName: "CompassNW"}} onClick={this.updateCurrentLocation}/>
      </Stack>
      {
      this.state.currentLat && this.state.currentLong && 
      <Text>You are in a {this.state.distanceToNextStage?.toFixed(2)} km radius of the location!</Text>
      }
      <TextField onChange={(event, newValue) => this.setState({password: newValue})}/>
      <PrimaryButton text="submit password" onClick={this.submitPassword}/>
      </>
      }
      </Stack>
      </>
    )
  }

}
