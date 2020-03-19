import React from "react"
import NavBar from "./components/NavBar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import MyApp from "./components/MyApp"
import MyInfo from "./components/MyInfo"

function App(){
    return(
        <div>
            <MyApp />
            <MyInfo />
            <NavBar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App;