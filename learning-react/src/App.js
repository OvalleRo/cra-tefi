import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import MyApp from "./components/MyApp"
import MyInfo from "./components/MyInfo"
import "./style.css"

function App(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles= {
        fontSize: "25px",
    }

    if(hours < 12){
        timeOfDay= "morning"
        styles.color = "#009dff"
    }else if(hours >= 12 && hours < 17){
        timeOfDay= "afternoon"
        styles.color = "#ff8000"
    }else{
        timeOfDay= "night"
        styles.color = "#13016b"
    }

    

    return(
        <div>
            {/* <MyApp />
            <MyInfo /> */}
            <Header />
            <MainContent />
            <Footer />
            {/* <h1 style={{color: "#ff8c00", backgroundColor: "#ff2d00"}}>Good {timeOfDay}!</h1> */}
            <h1 style={styles}>Good {timeOfDay}!</h1>
        </div>
    )
}

export default App;