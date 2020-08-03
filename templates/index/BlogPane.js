class BlogPane extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                
                <Blog top='45%'/>
                <Blog top='80%'/>
                <Blog top='115%'/>
                <Blog top='150%'/>
                <Blog top='185%'/>
                <div style={{
                    position: 'absolute',
                    position: 'fixed',
                    fontFamily: 'ubuntu',
                    fontSize: '50px',
                    top: '20%',
                    backgroundColor: 'fafafa',
                    backgroundOpacity: '1.00',
                    padding: '3% 0% 0.6% 3.2%',
                    left: '6.63%',
                    width: '63.2%',
                    fontWeight: 'bolder',
                    borderStyle: 'solid',
                    borderColor: 'white white #e0e0e0 white',
                    borderWidth: '2px',
                    borderRadius: '10px'
                }}>
                The Top "Opinion Based Questions"
                </div>
            </div>
        )
    }
}

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state={
            backgroundColor: 'white',
            ctr: 0
        }
    }
    changeBackground(){
        console.log('detected');
        if(this.state.ctr==0){
            this.setState({
                backgroundColor: '#f0f0f0',
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
    clickHandler(e){
        e.preventDefault();
        console.log('You wanna view the blog');
    }
    render(){
        return(
            <div style={{
                position: 'absolute',
                top: this.props.top || '25%',
                left: this.props.left || '10%',
                fontFamily: 'ubuntu',
                backgroundColor: this.state.backgroundColor,
                padding: '0% 0% 1% 2%',
                width: '58%',
                borderRadius: '10px',
                cursor: 'pointer'
            }}
            onClick={this.clickHandler.bind(this)}
            onMouseEnter={this.changeBackground.bind(this)}
            onMouseLeave={this.changeBackground.bind(this)}
            >
                <h1>
                    The Heading of the Blog
                </h1>
                <h2>
                    Author Name
                </h2>
                <div style={{
                    width: '90%'
                }}>
                    A lot of content.A lot of content.A lot of content.A lot of content.A lot of content.A lot of content.A lot of content.
                    A lot of content.A lot of content.A lot of content.A lot of content.A lot of content.A lot of content.A lot of content.
                    A lot of content.A lot of content.A lot of content.A lot of content.A lot of content  .....
                    <span style={{color: colorPalette.quaternary}}>(click to read more)</span>
                </div>
            </div>
        )
    }
}