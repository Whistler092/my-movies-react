import React, { Component } from 'react';
import ActorsList from './actors-list';

class Actors extends Component{

    constructor(props){
        super(props);

        this.state = {
            actors: null
        }
    }

    componentDidMount(){
        this.loadActors();
    }
    getFileNameOnly(filePath) {
        return filePath.split('/').pop().split('.').shift();
    }
    loadActors(){
        const requireContext = require.context('./actors', false, /\.json$/);
        console.log("requireContext", requireContext);
        const json = [];
        requireContext.keys().forEach((key) => {
            const obj = requireContext(key);
            //const simpleKey = this.getFileNameOnly(key);
            json.push(obj);
        });
        
        
        this.setState({actors: json});
    }

    renderActorsList(actors){
        console.log(actors);
        
        return actors.map(act => 
                <ActorsList key={act.name}
                    name={act.name} 
                    birthdate={act.birthdate}
                    birthplace={act.birthplace}
                    birthname={act.birthname}/>)
    }
        

    render(){ 
        const { actors } =  this.state ;
        
        return (
        <div>
            <h1>Actors</h1>
            {
                actors ?
                    <ul className="demo-list-item mdl-list">
                        {this.renderActorsList(actors)}
                    </ul>
                     :                                   
                    <p>Cargando ...</p>
            }
        </div>
    )}
}

export default Actors;
