import * as React from 'react'
import { Text } from 'office-ui-fabric-react';
export interface Stage {
    element: JSX.Element
    targetLat: number,
    targetLong: number,
    name: string,
    password: string
}

export const source : JSX.Element = 
<Text>
    <img src="/images/bubbles.png" style={{float: "right", height: 150}}/>
    There once lived a cute, smart, confient, absolutely adorable crime fighting superhero called Bubble.
    She was used to life in Chennai, but time had come for her to move on to a new home.
    Chennai had given her a lot of things, her first job, a car, freedom, a boyfriend...
<br/>
<br/>
<img src="/images/Johnny.gif" style={{float: "left", height: 150, paddingRight: 5}}/>
    Just as Bubble was getting lost in her deep thoughts about her time in Chennai, she got a call on her phone.
    It was her boyfriend, Jhonny Bravo. They had met just a year ago, but soon found that they were a great team!
    They complimented each other so well and it almost seemed too good to be true!
<br/>
<br/>
    Bubble picked up the call, only to hear a panicked Johnny Bravo. "Listen", he said. "Mojo Jojo hs kidnapped me.
    I don't know how much time I have. I will try to send you clues about where he is taking me. Stuff only the 2 
    of us will know. Find me Bubble, before it's too late!". Johnny quickly cut the call, leaving Bubble realing.
    She had to do one more superhero act before leaving the city.
<br/>
<br/>
    As she was gathering her thoughts, the first message arrived: 
    <b>"Separations are hard. This place has seen us separate so many times, but not without tantrums."</b>
</Text>

const alandur : JSX.Element = 
<Text>
    Alandur answer 
    Phoenix Market city Q.
</Text>

const phoenix : JSX.Element = 
<Text>
    Phoenix Market city Answer
    Chaat Chatore Q
</Text>

const chaat : JSX.Element = 
<Text>
    Chaat Chatore Answer
    Kipling Cafe Q
</Text>

const kipling : JSX.Element = 
<Text>
    Kipling Cafe answer
    FBG Q
</Text>

const fbg : JSX.Element = 
<Text>
    FBG Answer
    Sandy's Q
</Text>

const sandys : JSX.Element = 
<Text>
    Sandy's Answer
    Gameistry Q
</Text>

export const gamesitry : JSX.Element = 
<Text>
    Gameistry answer
    Congrats! It was all a prank! happy memories and birthday month!
</Text>

export const Stages : Stage[] = [
    {
        element: alandur,
        targetLat: 13.013326737135838,
        targetLong: 80.20030991110958,
        name: "Alandur Metro Station",
        password: "alandur"
    },
    {
        element: phoenix,
        targetLat: 12.999060675926485,
        targetLong: 80.21745174924656,
        name: "Phoenix Market City",
        password: "phoenix"
    },
    {
        element: chaat,
        targetLat: 12.991653042494033,
        targetLong: 80.22332628636919,
        name: "Chaat Chatore",
        password: "chaat"
    },
    {
        element: kipling,
        targetLat: 12.898165857101775,
        targetLong: 80.25245734857218,
        name: "Kipling Cafe",
        password: "kipling"
    },
    {
        element: fbg,
        targetLat: 13.038640676348663,
        targetLong: 80.26171973024127,
        name: "Fresh Baked Goodness",
        password: "fbg"
    },
    {
        element: sandys,
        targetLat: 13.06749969899111,
        targetLong: 80.24816276460183,
        name: "Sandy's Chocolate Lab",
        password: "sandys"
    },
    {
        element: gamesitry,
        targetLat: 13.074347107705988,
        targetLong: 80.25870707121028,
        name: "Gameistry",
        password: "gameistry"
    },
]
