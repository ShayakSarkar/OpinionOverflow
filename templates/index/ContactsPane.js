class ContactsPane extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div> 
                <Contact left='75%' top='40%' text='shayaksarkar2000@gmail.com'/>
                <Contact left='75%' top='50%' text='shayak.sarkar2018@vitbhopal.ac.in'/>
                <Contact left='75%' top='60%' text='shayak.sarkar2018@vitbhopal.ac.in'/>
                <h1 style={{
                    position: 'absolute',
                    position: 'fixed',
                    left: '76%',
                    top: '25%',
                    fontFamily: 'ubuntu'
                    
                }}>
                    Contact Us
                </h1>
            </div>
        );
    }
}
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color: 'black',
            ctr:1
        }
    }
    changeColor(){
        if(this.state.ctr%2!=0){
            this.setState({
                color: 'red',
                ctr: 0
            });
        }
        else{
            this.setState({
                color: 'black',
                ctr: 1
            });
        }
    }
    clickHandler(e){
        console.log('You wanna send a mail to',this.props.text);
        e.preventDefault();

    }
    render(){
        return(
            <div style={{
                position: 'absolute',
                position: 'fixed',
                fontFamily: 'ubuntu',
                left: this.props.left,
                top: this.props.top,
                cursor: 'pointer',
                fontSize: '110%',
                color: this.state.color
            }}
            onMouseEnter={this.changeColor.bind(this)}
            onMouseLeave={this.changeColor.bind(this)}
            onClick={this.clickHandler.bind(this)}>
                <img style={{
                    width: '10%'
                }}
                src='templates/index/mailicon.png'/>
                <div style={{
                    position: 'absolute',
                    left: '14%',
                    top: '25%'
                }}>
                    {this.props.text}
                </div>
            </div>
        );
    }
}