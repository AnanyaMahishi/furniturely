import React from "react";
import { BrowserRouter as Router,Route,Routes,Link } from "react-router-dom"; //Browser router helps browser store history associated with router
import Home from "./Home";
import About from "./About";
import Support from "./Support";
import StyledLink from './style';

class App extends React.Component{
	render(){
		return(
			<Router>
				<div> <StyledLink to ="/"> Home </StyledLink></div>
				<div> <StyledLink to ="/about"> About </StyledLink></div>
				<div> <StyledLink to ="/support"> Support </StyledLink></div>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/about" element={<About/>}/>
				<Route path="/support" element={<Support/>}/>
			</Routes>	
			</Router>
		)
	}
}
export default App;
