import React,{ Component } from 'react';
import './App.css';
import Slider from './Slider/Slider';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Story from './Story/Story';
import Showcase from './Showcase/Showcase';
import Showmore from './Showmore/Showmore';
import Progress from './Progress/Progress';
import Plans from './Plans/Plans';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer';

class App extends Component {
	render(){

		const headstyle = {
			paddingTop:'20px',
			paddingBottom:'20px',
			color:'#917eb3'
		}

	return (
	    <div className="App">
	     <Header />
	     
	     <Banner />
	     <Services />
	     <Story />
	     <Showcase />
	     <Showmore />
	     <Progress />
	     <Plans />
	     <Testimonial />
	     <Footer />
	    </div>
	  );

	}
}

export default App;
