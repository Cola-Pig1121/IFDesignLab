"use client"
import React from "react"
import Hero from "./AdventureX1057/Hero"
import Intro from "./AdventureX1057/Intro"
import PosterSystem from "./AdventureX1057/PosterSystem"
import BuilderUp from "./AdventureX1057/BuilderUp"
import ClientInfo from "./AdventureX1057/ClientInfo"
import FooterLinks from "./AdventureX1057/FooterLinks"

export default function AdventureX1057() {
  return (
    <div className="mx-auto" style={{ width: 1440 }}>
      <Hero />
      <Intro />
      <PosterSystem />
      <BuilderUp />
      <ClientInfo />
      <FooterLinks />
    </div>
  )
}