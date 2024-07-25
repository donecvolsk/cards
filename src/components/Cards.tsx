import React from "react"

interface CardsProps {
    image?: string,
    children: React.ReactNode,
  }

export function Cards({children, image}: CardsProps) {
    return (
        <div className="card">
            {image ? <img src={image} className="img" alt="basket"></img>: <></>}        
            {children}
        </div>        
    )
}