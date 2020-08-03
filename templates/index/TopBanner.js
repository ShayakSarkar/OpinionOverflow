var colorPalette={
    primary: '#ffe0f7',
    secondary: '#fe91ca',
    tertiary: '#d3dbff',
    quaternary: '#251f44'
}
class TopBannerButton extends React.Component{
    constructor(props){
        super(props);
        console.log('yolo',this.props.clickHandler)
        this.state={
            backgroundColor: 'white',
            ctr: 0
        };
    }
    changeBackground(){
        if(this.state.ctr%2==0){
            this.setState({
                backgroundColor: colorPalette.secondary,
                ctr: 1
            });
        }
        else{
            this.setState({
                backgroundColor: 'white',
                ctr: 0
            });
        }
    }
    render(){
        return(
            <div style={{
                fontSize:'90%',
                position: 'absolute',
                left: this.props.left,
                top:this.props.top,
                backgroundColor: this.state.backgroundColor,
                fontColor: 'blue',
                textAlign: 'center',
                padding: this.props.padding || '1%',
                cursor: 'pointer',
                fontFamily: 'ubuntu',
                borderRadius: '10px',
                borderColor: colorPalette.secondary,
                borderWidth: '2px',
                borderStyle: 'solid'
            }}
            onClick={this.props.clickHandler}
            onMouseEnter={this.changeBackground.bind(this)}
            onMouseLeave={this.changeBackground.bind(this)}>
               <b>{this.props.text}</b>
            </div>
        );
    }
}
class Heading extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.children);
        return(
            <div style={{
                position: 'absolute',
                fontFamily: 'ubuntu',
                textAlign: 'center',
                background: colorPalette.primary,
                color: colorPalette.quaternary,
                padding: '2%',
                fontSize: '250%',
                borderRadius: '10px',
                top: '-15%',
                left: '36%'
            }}>
                <b>Opinion Overflow</b>
            </div>
        )
    }
}

class TopBanner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isSigningUp: false
        };
    }
    scrollHandler(e){
        e.preventDefault();
    }
    signupClick(){
        this.setState({
            isSigningUp: true
        });
    }
    loginClick(){
        console.log('You wanna log in');
    }
    categoriesClick(){
        console.log('You wanna view the categories');
    }
    peopleClick(){
        console.log('You wanna view the people');
    }
    writeablogClick(){
        console.log('You wanna write a blog');
    }
    render(){
        return(
            <div style={{backgroundColor: colorPalette.primary,
                height: '22%',
                position: 'absolute',
                position: 'fixed',
                top: '0%',
                borderRadius: '10px',
                width: '100%'
            }}>
                
                <Heading/>
                <TopBannerButton opacity={this.state.isSigningUp&&'0.5' + !this.state.isSigningUp&&'1'} clickHandler={this.loginClick.bind(this)} top='5%' left='75%' text='login'/>
                <TopBannerButton opacity={this.state.opacity&&'0.5' + !this.state.isSigningUp&&'1'} clickHandler={this.signupClick.bind(this)}top='5%' left='82.25%' text='sign up'/>
                <TopBannerButton opacity={this.state.opacity&&'0.5' + !this.state.isSigningUp&&'1'} clickHandler={this.categoriesClick.bind(this)} top='60%' left='30%' padding='1%' text='categories'/>
                <TopBannerButton opacity={this.state.opacity&&'0.5' + !this.state.isSigingUp&&'1'} clickHandler={this.peopleClick.bind(this)} top='60%' left='45%' padding='1%' text='people'/>
                <TopBannerButton opacity={this.state.opacity&&'0.5' + !this.state.isSigningUp&&'1'} clickHandler={this.writeablogClick.bind(this)} top='60%' left='60%' padding='1%' text='write a blog'/>
                
            </div>
        ); 
    }
}
