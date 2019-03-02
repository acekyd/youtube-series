import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 className="mainTitle">Hi! I'm Ace.</h1>
    <p className="subtitle">And I just learnt how to set up Gatsby on a Livestream</p>
    <p className="lowtext">Join me next time.</p>
  </Layout>
)

export default IndexPage
