import './App.css';
import React, { Component } from 'react';
import Person from './component/Person';
import img from './component/khaled.jpg';

class App extends Component {
	constructor() {
		super();
		this.state = {
			fullName: 'Benouada Khaled',
			bio: ' Mechatronics enginner , Full Stack Developer , Skills trainer ,filled with energy, ready to invest in new opportunities. ',
			imgSrc: img,
			profession: 'Looking for New opportunity',
			show: true,
		};
	}
	showData = () => {
		this.setState({
			...this.state,
			show: !this.state.show,
		});
	};

	render() {
		return (
			<div className="App  App-header">
				<button onClick={this.showData}>Show Data</button>
				{this.state.show ? (
					<Person
						name={this.state.fullName}
						bio={this.state.bio}
						imgSrc={this.state.imgSrc}
						profession={this.state.profession}
					></Person>
				) : (
					'profile not found'
				)}
			</div>
		);
	}
}

export default App;
