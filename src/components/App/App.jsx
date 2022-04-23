import React from "react";
import Header from "../Headser/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require('@rstacruz/startup-name-generator')
class App extends React.Component{
    state = {
        headerText:"Name your Startup!",
        headerExpanded : 'true',
        suggestedNames : [],
    }


    handleInputChange = (inputText) => {
        this.setState({headerExpanded: !inputText})
        this.setState({ suggestedNames : inputText ? name(inputText) : []})
    };

    render(){
        return(
            <>
            <Header
            headerExpanded = {this.state.headerExpanded}
             headTitle = {this.state.headerText}/>
            <SearchBox onInputChange = {this.handleInputChange}/>
            <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
            </>
           
        )
    }
      
    

}

export default App