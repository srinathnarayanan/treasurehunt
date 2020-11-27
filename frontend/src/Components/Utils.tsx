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
    Chennai had given her a lot of things - her first job, a car, freedom, a boyfriend...
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
    Bubble knew immediately what this place was. She was already there. She had just missed Johnny.
    <img src="/images/Johnny.gif" style={{float: "left", height: 150, paddingRight: 5}}/>
    <br/>
    <br/>
    She knew she had to hurry. As bubble was searching the metro station, she tried to not be too conscpicuous.
    She tried to think where Johnny might have left the next clue. It was then that she spotted a ticket vending machine,
    with something off about it. The ticket had been dispersed but had not been pciked up. She took a look at it.
    Just as she had suspected, it was not just a ticket. It was the next clue.
    <br/>
    <br/> The back of the ticket had this printed : 
    <b> "We always stood by each other, come what may. This was one such day. We will always rise from the ashes.
        PS: thanks for making me smell so good!"</b>
</Text>

const phoenix : JSX.Element = 
<Text>
    Next stop was Phoenix Market City. As memories of that roller coaster of a day flashed before Bubble's eyes, 
    she made her way to the mall. The last time they were here, she had driven her car. Now that was a memory she 
    actively tried to suppress.
    <img src="/images/Johnny.gif" style={{float: "left", height: 150, paddingRight: 5}}/>
    <br/>
    <br/>
    As Bubble tried to enter the mall, she was asked to write an entry in a book kept at the entrance that was
    used to contact trace folks who visited the mall and ended by testing positive for COVID-19. She was writing 
    her name, and it was then that she spotted an intriguing name written a few rows above. It simply read 
    <b>"Bubl"</b>, and the address line read <b>"F.W.Orks, No 2010, Keep customers for life Lane"</b>
</Text>

const freshworks : JSX.Element = 
<Text>
    Johnny had to be the one who left the entry as a hint. Bubble's next stop was her former place of work, 
    Freshworks. She left in a hurry.
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
        element: freshworks,
        targetLat: 12.9695806,
        targetLong: 80.2437501,
        name: "Fresh Works",
        password: "freshworks"
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
