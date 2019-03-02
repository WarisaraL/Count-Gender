import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    
    state = { users: [] };

    async onCountGender() {
        const response = await axios.get('https://uinames.com/api/?amount=50');
        this.setState({ users: response.data });
    }
    
    componentWillMount() {
        this.onCountGender();
    }

    
    render() {
        var countMale = 0;
        var countFemale = 0;
        
        this.state.users.forEach( user => {
            if (user.gender === 'male') {
                countMale = countMale + 1;
            }
            else if (user.gender === 'female') {
                countFemale = countFemale + 1;
            }
        });
        
        if ( countMale > 0 && countMale > 0){
            if (countMale === countFemale) {
                    return <p>Love is in the air</p>
            }
            else {
                    return <p>Single life choose me</p>
            }
        }
        else {
            return <p>Loading...</p>
        }
        
    }
            
}


ReactDOM.render(<App />, document.querySelector('#root'))