import * as React from 'react'
export interface Stage {
    element: JSX.Element
    targetLat: number,
    targetLong: number,
    password: string
}

export const Stages : Stage[] = [
    {
        element: <h1>More supermarket</h1>,
        targetLat: 13.061422,
        targetLong:  80.196082,
        password: "more"
    },
    {
        element: <h1>Parvathi Bhavan</h1>,
        targetLat: 13.053175511577653,
        targetLong:   80.19190702286853,
        password: "hotel"
    }
]