class InterestsSelectionPaneButton extends React.Component{
    constructor(props){
        super(props);
        this.state={
            backgroundColor: 'white',
            isClicked: false,
            ctr: 0
        }
    }
    changeBackground(e){
        e.preventDefault();
        if(this.state.isClicked){
            return;
        }
        else{
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
    }
    clickHandler(e){
        console.log('asd');
        if(this.state.isClicked){
            this.props.selectedInterests.splice(this.props.selectedInterests.indexOf(this.props.interestId),1);
            this.setState({
                backgroundColor: 'white',
                isClicked: false,
                color: 'black'
            });
        }
        else{
            this.props.selectedInterests.unshift(this.props.interestId);
            this.setState({
                backgroundColor: colorPalette.quaternary,
                color: colorPalette.secondary,
                isClicked: true
            });
        }
        console.log(this.props.selectedInterests);
    }
    render(){
        return(
            <div style={{
                fontSize:'90%',
                position: 'absolute',
                width: '25%',
                left: this.props.left,
                top:this.props.top,
                backgroundColor: this.state.backgroundColor,
                color: this.state.color,
                textAlign: 'center',
                padding: this.props.padding || '1%',
                cursor: 'pointer',
                fontFamily: 'ubuntu',
                borderRadius: '10px',
                borderColor: colorPalette.secondary,
                borderWidth: '2px',
                borderStyle: 'solid',
                position:'relative'
            }}
            onClick={this.clickHandler.bind(this)}
            onMouseEnter={this.changeBackground.bind(this)}
            onMouseLeave={this.changeBackground.bind(this)}>
               <b>{this.props.text}</b>
            </div>
        );
    }
}

class InterestsSelectionPane extends React.Component{
    constructor(props){
        super(props);
        this.availableInterests=[];
        this.state={
            fetched: false
        };
        this.selectedInterests=[];
    }
    categoryClickHandler(){
        this.state={
            backgroundColor: colorPalette.secondary
        }
    }
    componentWillMount(){
        this.getInterests().then(
            function(){
                this.setState({
                    fetched: true
                });
            }.bind(this)
        ).catch(
            function(){
                this.setState({
                    fetched: false
                });
                console.log('Some kind of error generated');
            }.bind(this)
        );
    }

    async getInterests(){
        var response=await fetch('http://localhost:5000/getInterests');
        response=await response.json()  
        this.availableInterests=response.availableInterests;
        console.log('Available Interests\n',this.availableInterests);
        return response;
    }
    async submitCategories(){
        var body={}
        body['interests']=this.selectedInterests;
        var res=await fetch('http://localhost:5000/postCategories',{
            method: 'POST',
            mode: 'cors',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(body),
            credentials: 'same-origin'
        });
        console.log(res);
    }
    render(){
        var elm=<div style={{
            width: '30%',
            height: '70%',
            fontFamily: 'ubuntu',
            textAlign: 'center'
        }}>
            <h1 style={{
                position: 'absolute',
                left: '25%',
                top: '12%',
                textAlign: 'center'
            }}>
                What are you into ?  
            </h1>
            <div style={{
                position: 'absolute',
                backgroundColor: colorPalette.primary,
                width:'30%',
                height: '53%',
                fontFamily: 'ubuntu',
                borderRadius: '10px',
                overflowY: 'scroll',
                overflowX: 'hidden',
                left: this.props.left || '20%',
                top: this.props.top || '20%'
            }}
            onWheel={()=>console.log('scrolling')}>
                
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='3%' top='14%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[0] && this.availableInterests[0][0]} text={this.availableInterests[0] && this.availableInterests[0][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='37%' top='7%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[1] && this.availableInterests[1][0]} text={this.availableInterests[1] && this.availableInterests[1][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='70%' top='0%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[2] && this.availableInterests[2][0]} text={this.availableInterests[2] && this.availableInterests[2][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='3%'  top='14%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[3] && this.availableInterests[3][0]} text={this.availableInterests[3] && this.availableInterests[3][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='37%' top='7%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[4] && this.availableInterests[4][0]} text={this.availableInterests[4] && this.availableInterests[4][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='70%' top='0%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[5] && this.availableInterests[5][0]} text={this.availableInterests[5] && this.availableInterests[5][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='3%' top='14%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[6] && this.availableInterests[6][0]} text={this.availableInterests[6] && this.availableInterests[6][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='37%' top='7%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[7] && this.availableInterests[7][0]} text={this.availableInterests[7] && this.availableInterests[7][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='70%' top='0%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[8] && this.availableInterests[8][0]} text={this.availableInterests[8] && this.availableInterests[8][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='3%' top='14%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[9] && this.availableInterests[9][0]} text={this.availableInterests[9] && this.availableInterests[9][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='37%' top='7%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[10] && this.availableInterests[10][0]} text={this.availableInterests[10] && this.availableInterests[10][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='70%' top='0%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[11] && this.availableInterests[11][0]} text={this.availableInterests[11] && this.availableInterests[11][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='3%' top='14%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[0] && this.availableInterests[12][0]} text={this.availableInterests[12] && this.availableInterests[12][1]}/>
                <InterestsSelectionPaneButton className="InterestsSelectionPaneButton" left='37%' top='7%' selectedInterests={this.selectedInterests} interestId={this.availableInterests[0] && this.availableInterests[13][0]} text={this.availableInterests[13] && this.availableInterests[13][1]}/>
            </div>
                <TopBannerButton clickHandler={this.submitCategories.bind(this)} left='32%' top='75%' text='Submit'/>
            </div>
        return this.state.fetched && elm;
    }
}