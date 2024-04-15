import React,{Component} from "react";
import FirstComponent from "./components/FirstComponent";
class AppDef extends Component{

    // componentDidMount() {
    //     alert("did mount AppDef")
    // }
    //
    // componentWillMount() {
    //     alert("will mount AppDef")
    // }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (nextState.count === 600) {
    //         return false
    //     }
    //     else return true
    // }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    // }


    state = {
        count : 100,
        isShow : false,
        textButton : 'ClickHide'
    }

    clickButton = (()=> {
        this.setState({
            count : this.state.count + 100
        })
    })

    clickShowHide = (() => {
        if (this.state.isShow === false) {
            this.setState({
                textButton : 'ClickShow',
                isShow : true
            })
        }else{
            this.setState({
                textButton : 'ClickHide',
                isShow : false
            })
        }
    })

    render() {
        return(
            <div className={'container'}>
                {/*<FirstComponent count={this.state.count}/>*/}
                <h1>{this.state.count}</h1>
                <button onClick={this.clickButton}>Click</button><br/> <br/>
                <button onClick={this.clickShowHide} className={'btn btn-success'}>{this.state.textButton}</button>
                {this.state.isShow ? '' : <FirstComponent/>}
            </div>
        )
    }
}

export default AppDef