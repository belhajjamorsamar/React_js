import Recat , {Component}from 'react'

class Horloge extends Component{

    /*constructor(props){
        super(props);
        this.state={date :new Date()};
    }*/

    //******************ou bien ********************** */
    state=
    {
         date:new Date(), //tu peut ajouter des autre actions 
    }
componentDidMount(){
    setInterval(()=>this.setState({date:new Date()}),1000); // chaque seconde il va afficher tick dans lo console
}
    render(){
        return(
            <div>Horloge :{this.state.date.toLocaleTimeString()}</div>
        )

    }

}

export default Horloge;