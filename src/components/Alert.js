import React, {Component} from "react";
import drugData from "../data/drugData";

 class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideEffectsAspirinChildren: false,
            sideEffectAspirinDesc: '',
            showAlert: true,
        }
    }

     handleShowAlert = e => {
         this.setState({
             sideEffectsAspirinChildren: true,
             sideEffectAspirinDesc: drugData[4].sideEffectsAspirinChildren,
         })
     };

     hideInfo= e => {
         this.setState({
             sideEffectsAspirinChildren: false,
             sideEffectAspirinDesc: drugData[4].sideEffectsAspirinChildren,
         })
     };


     aspirinInfo = e => {
         if (this.state.sideEffectsAspirinChildren) {
             this.setState({
                 sideEffectsAspirinChildren: false,
             })
         } else {
             this.setState({
                 sideEffectsAspirinChildren: true,
             })
         }
     };
    render() {
        return (
            <div className='alert'>
                <p> Nie podawaj aspiryny poniżej 16 roku życia !</p>
                <button className='buttonAlert' onClick={this.handleShowAlert}>Dowiedz się dlaczego</button>
                <button className='buttonHideAlert' onClick={this.props.hideAlert}>x</button>
                {this.state.sideEffectsAspirinChildren && <div className="sideEffectsAspirinDesc">
                <div>{this.state.sideEffectAspirinDesc}
                <button className='buttonHideInfo' onClick={this.hideInfo}>Ukryj</button></div> </div>}
            </div>
        );
    }
}

export default Alert;