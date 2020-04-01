import React, {Component} from "react"
// import Header from "./components/Header"
// import MainContent from "./components/MainContent"
// import Footer from "./components/Footer"
// import MyApp from "./components/MyApp"
// import MyInfo from "./components/MyInfo"
// import productsData from "./components/vsschoolProducts"
// import Product from "./components/Product"
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

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: false,
//         }
//         // this.state = {
//         //     count: 0,
//         // }
//         this.handleClick= this.handleClick.bind(this)
//     }
//     //tambien se le puede pasar setState como prop a un componente
//     handleClick(){
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }

//     render() {
//         // let wordDisplay
//         // if (this.state.isLoggedIn === true) {
//         //     wordDisplay= "in"
//         // } else {
//         //     wordDisplay= "out"
//         // }
//         let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//         let displayText = this.state.isLoggedIn ? "You are logged in" : "You are logged out"

//         return(
//             <div>
//                 {/* <h1>Is state important? {this.state.answer}</h1> */}
//                 {/* <h1>{this.state.count}</h1> */}
//                 {/* <h2>You are currently logged {wordDisplay}</h2> */}
//                 <button onClick={this.handleClick} >{buttonText}</button>
//                 <h1>{displayText}</h1>
//             </div>
//         )
//     }
// }

//fetch - STAR WARS API
//https://swapi.co
//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }

//     componentDidMount(){
//         this.setState({loading: true})
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     loading: false,
//                     character: data
//                 })
//             })
//     }

//     render() {
//         const text = this.state.loading ? "Loading..." : this.state.character.name
//         return (
//             <div>
//                 <p>{text}</p>
//             </div>
//         )
//     }
// }

// class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             firstName: "",
//             lastName: "",
//             isFriendly: false,
//             gender: "",
//             favColor: "blue"
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(event){
//         const {name, value, type, checked} = event.target
//         type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
//     }

//     handleSubmit(){
//         console.log("Information received!")
//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit} >
//                 <input 
//                     type="text"
//                     value={this.state.firstName}
//                     name="firstName"
//                     placeholder= "First Name" 
//                     onChange={this.handleChange}
//                 />

//                 <br />

//                 <input 
//                     type="text"
//                     value={this.state.lastName}
//                     name="lastName" 
//                     placeholder= "Last Name" 
//                     onChange={this.handleChange}
//                 />

//                 <br />

//                 <textarea 
//                     value={"Default text"}
//                     onChange={this.handleChange}
//                 />

//                 <br />

//                 <label>
//                     <input 
//                         type="checkbox"
//                         name="isFriendly"
//                         checked={this.state.isFriendly}
//                         onChange={this.handleChange}
//                     /> Is friendly?
//                 </label>
//                 <br />

//                 <label>
//                     <input 
//                         type="radio"
//                         name="gender"
//                         value="Female"
//                         checked={this.state.gender === "female"}
//                         onChange={this.handleChange}
//                     /> Female
//                 </label>
//                 <br />
//                 <label>
//                     <input 
//                         type="radio"
//                         name="gender"
//                         value="Male"
//                         checked={this.state.gender === "male"}
//                         onChange={this.handleChange}
//                     /> Male
//                 </label>
//                 <br />

//                 <label>Choose your favorite color: </label>
//                 <select
//                     value={this.state.favColor}
//                     onChange={this.handleChange}
//                     name="favColor"
//                 >
//                     <option value="blue">Blue</option>
//                     <option value="green">Green</option>
//                     <option value="red">Red</option>
//                     <option value="orange">Orange</option>
//                     <option value="violet">Violet</option>
//                 </select>

//                 <h1>{this.state.firstName} {this.state.lastName} </h1>
//                 <h2>You are {this.state.gender}</h2>
//                 <h2>Your favorite color is {this.state.favColor} </h2>
//                 <button type="submit" >Submit</button>
//             </form>
//         )
//     }
// }

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

class App extends Component {
    constructor() {
        super()
        this.state= {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            dietaryRestrictions: [],
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <main>
                <form>
                    <input 
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />
                    <input 
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"/><
 
                       br />
                    <input 
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"/>
                    <br/>
                    
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        />Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        />Female
                    </label>

                    <br />
                        <select value="">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>

                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information: </h2>
                <p>Your name: {this.state.firstName} {this.state.lastName} </p>
                <p>Your age: {this.state.age} </p>
                <p>Your gender: {this.state.gender} </p>
                <p>Your destination: {this.state.destination} </p>
                <p>
                    Your dietary restrictions:
                    {}
                </p>
            </main>
        )
    }
}

export default App;