import React from "react"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import MyApp from "./components/MyApp"
import MyInfo from "./components/MyInfo"
import productsData from "./components/vsschoolProducts"
import Product from "./components/Product"
import "./style.css"

// function App(){
//     // const date = new Date();
//     // const hours = date.getHours();
//     // let timeOfDay;
//     // const styles= {
//     //     fontSize: "25px",
//     // }

//     // if(hours < 12){
//     //     timeOfDay= "morning"
//     //     styles.color = "#009dff"
//     // }else if(hours >= 12 && hours < 17){
//     //     timeOfDay= "afternoon"
//     //     styles.color = "#ff8000"
//     // }else{
//     //     timeOfDay= "night"
//     //     styles.color = "#13016b"
//     // }

//     const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)

//     return(
//         <div>
//             {/* <MyApp />
//             <MyInfo /> */}
//             <Header />
//             <MainContent />
//             {/* <Footer /> */}
//             {/* <h1 style={{color: "#ff8c00", backgroundColor: "#ff2d00"}}>Good {timeOfDay}!</h1> */}
//             {/* <h1 style={styles}>Good {timeOfDay}!</h1> */}
//             <div>
//                 {productComponents}
//             </div>
//         </div>
//     )
// }

class App extends React.Component {
    constructor() {
        super()
        // this.state = {
        //     name: "Sally",
        //     age: 19,
        // }
        this.state = {
            isLoggedIn: false,
        }
        // this.state = {
        //     count: 0,
        // }
        this.handleClick= this.handleClick.bind(this)
    }
    //tambien se le puede pasar setState como prop a un componente
    handleClick(){
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    render() {
        // let wordDisplay
        // if (this.state.isLoggedIn === true) {
        //     wordDisplay= "in"
        // } else {
        //     wordDisplay= "out"
        // }
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let displayText = this.state.isLoggedIn ? "You are logged in" : "You are logged out"

        return(
            <div>
                {/* <h1>Is state important? {this.state.answer}</h1> */}
                {/* <h1>{this.state.count}</h1> */}
                {/* <h2>You are currently logged {wordDisplay}</h2> */}
                <button onClick={this.handleClick} >{buttonText}</button>
                <h1>{displayText}</h1>
            </div>
        )
    }
}

// function handleClick(){
//     console.log("I was clicked!")
// }
// function handleHover(){
//     console.log("Hovered...")
// }

// function App() {
//     return (
//         <div>
//             <img onMouseOver={handleHover} src="https://www.fillmurray.com/200/100"/>
//             <br />
//             <br />
//             <button onClick={handleClick} >Click me</button>
//         </div>
//     )
// }

export default App;