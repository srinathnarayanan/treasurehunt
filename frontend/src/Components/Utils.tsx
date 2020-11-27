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
    There once lived a cute, smart, confident, absolutely adorable crime fighting superhero called Bubble.
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
    Bubble picked up the call, only to hear a panicked Johnny Bravo. "Listen", he said. "Mojo Jojo has kidnapped me.
    I don't know how much time I have. I will try to send you clues about where he is taking me. Stuff only the 2 
    of us will know. Find me Bubble, before it's too late!". Johnny quickly cut the call, leaving Bubble reeling.
    She had to do one more superhero act before leaving the city.
<br/>
<br/>
    As she was gathering her thoughts, the first message arrived: 
    <b> "Separations are hard. This place has seen us separate so many times, but not without tantrums."</b>
</Text>

const alandur : JSX.Element = 
<Text>
    <img src="/images/alandur.jpg" style={{display: "block", height: 150, paddingRight: 5, margin: "auto"}}/>
    <br/>
    Bubble knew immediately what this place was. She was already there. She had just missed Johnny.
    <br/>
    <br/>
    She knew she had to hurry. As Bubble was searching the metro station, she tried to not be too conscpicuous.
    She thought about where Johnny might have left the next clue. It was then that she spotted a ticket vending machine,
    with something off. The ticket had been dispersed but had not been picked up. She took a look at it.
    Just as she had suspected, it was not just a ticket. It was the next clue.
    <br/>
    <br/> The back of the ticket had a simple rhetorical question and answer : 
    <b> "Do you know how we make it Work? By keeping it Fresh."</b>
</Text>

const freshworks : JSX.Element = 
<Text>
    <img src="/images/freshworks.webp" style={{display: "block", height: 150, paddingRight: 5, margin: "auto"}}/>
    <br/>
    The next place was one that gave her pangs of nostalgia. It was Freshworks.
    <br/>
    <br/>
    Once at her former place of work, Bubble tried to get into the building but was stopped by a guard. she was asked to 
    write an entry in a book kept at the entrance that was used to contact trace folks who visited the building and ended 
    by testing positive for COVID-19. As she was writing her name, she spotted an intriguing entry written a few rows above. 
    The name simply read 
    <b> "Bubl"</b> and the address line read <b>"No. 5000, Cost-of-getting-to-know-the-real-you Lane, Cabana Avenue, Chennai"</b>
</Text>

const kipling : JSX.Element = 
<Text>
    <img src="/images/kipling.jpg" style={{display: "block", height: 150, paddingRight: 5, margin: "auto"}}/>
    <br/>
    This place was one of many memories. The quintessential date spot - Kipling Cafe.
    <br/>
    <br/>
    Bubble once again started looking for hints. Just as she was about to enter, a receptionist stopped her and asked if she
    had a reservation. When she said that she didn't and told her name to make one, the receptionist paused. He said "Funny. There
    seems to be another reservation here for that name already. A cabana infact". Bubble asked which one it was. The receptionist's
    simply replied: <b>"S2"</b>
</Text>

const s2 : JSX.Element = 
<Text>
    <img src="/images/s2.jpg" style={{display: "block", height: 150, paddingRight: 5, margin: "auto"}}/>
    <br/>
    S2 was a place close to Bubble and Johnny's heart... for more reasons than one. 
    <br/>
    <br/>
    Once at S2, Bubble started looking around. She saw multiple posters for old movies that were being played to get the audiences
    back to theatres. 2 of them, places next to each other, seemed odd. She went closer to take a look, and knew immediately where
    to go next.
    <br/>
    <br/>
    <img src="/images/poster.jpg" style={{display: "block", height: 250, paddingRight: 5, margin: "auto"}}/>

</Text>

const fbg : JSX.Element = 
<Text>
    <img src="/images/fbg.jfif" style={{display: "block", height: 150, paddingRight: 5, margin: "auto"}}/>
    <br/>
    This was a place that Bubble had infact introduced to Johnny - Fresh Baked Goodness. The Theobroma cake from here was legendary.
    <br/>
    <br/>
    FBG was her favourtie place for desserts. She had to resist her temptation to treat herself to some cake, especially after seeing
    a very inviting, but rather weirdly worded poster. The poster outside the store read 
    <b> "Can't makeup your mind? If you are worried 
        about death by chocolate, or about the last time you saw your waist, you should probably go for the reall tiny chocolate cake. 
        It will most certainly make you go OMG!"</b>
</Text>

const sandys : JSX.Element = 
<Text>
    <img src="/images/sandys.jpg" style={{display: "block", height: 150, paddingRight: 5, margin: "auto"}}/>
    <br/>
    From a dessert place Bubble introduced to Johnny, it was time to head to one he had introduced to her.
    <br/>
    <br/>
    <img src="/images/mojojojo.jpg" style={{float: "right", height: 150}}/>
    Little did she know what would await her there. A final frontier to cross. As she came into Sandy's, she saw Mojo Jojo sitting there,
    waiting for her. She went calmly, sat opposite him, and asked in a measured manned - "where is Johnny?". Mojo Jojo replied in an equally
    calm manner, <b> "First, let's play a game shall we?"</b>
</Text>

export const gamesitry : JSX.Element = 
<Text>
    <img src="/images/gameistry.jfif" style={{display: "block", height: 150, paddingRight: 5, margin: "auto"}}/>
    <br/>
    After having beaten up Mojo Jojo, Bubbles quickly left for Gameistry, hoping she was not too late.
    <br/>
    <br/>
    She went into gameistry and it was all dark. Suddenly the lights came on and everyone yelled "Suprise!". It took her some time to register
    what had happenned. Johnny came out of hiding, gave her a big bear hug and said "Since you are leaving the city, we thought we would throw 
    you a surprise treasure hunt, taking you around the city that you love so much! Mojo Jojo was in on it from the beginning!". Bubble was 
    smiling and replied "I figured, the clues were too obvious!". Johnny smirked. "Hope you had a great time, Kate Bucket 2.0. Also, always remember.
    Irrespetive of where you go..."
    <br/>
    <br/>
    <img src="/images/chennai.jfif" style={{display: "block", height: 250, paddingRight: 5, margin: "auto"}}/>
    
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
        element: s2, 
        targetLat: 12.995251796457207,
        targetLong: 80.25588772639064,
        name: "S2 Thyagaraja",
        password: "s2"
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
