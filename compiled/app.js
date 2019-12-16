// TODO


// class GroceryListItem extends React.Component {
// 	 constructor(props) {
//       super(props);
//       this.state = {done : false, hover: false}


//   }

//   onListClick(){
//   	this.setState({done :!this.state.done});
//   }
//   toggleHover() {
//   	this.setState({hover: !this.state.hover})
//   }
//   render(){
//   	  var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none', 
//       color: this.state.done ?  'red' : 'blue' 
//     };
//     var style = {
//       textDecoration: this.state.hover ? 'line-through' : 'none', 
//       color: this.state.hover ?  'red' : 'blue' 
//     };
//   	return(
//   		<li style={style}  onMouseEnter={this.toggleHover.bind(this)}   >{this.props.list}</li>
//   		);
//   }

// };
//  var GroceryList =  (props) => (

// 		<ul>
// 			{props.list.map(ele => <GroceryListItem list = {ele} /> )}

// 	    </ul>
// 			);
// ReactDOM.render(<GroceryList list={["Class 1","class 2","class 3"]}/>,document.getElementById('app'))

// )


// var App = () => (
// 		  <div>

// 		  <h2> testing react </h2> 
// 		  <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']} />

// 		  </div>

// )

// var TodoList = (props) => (
// 	<ul>
//         <li>{props.todos[0]} </li>
//         <li>{props.todos[1]} </li>
//         <li>{props.todos[2]} </li>
// 	 </ul>
// )
class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false,
			hover: false
		};
	}
	onListItemClick(event) {
		this.setState({
			done: !this.state.done,
			hover: !this.state.hover
		});
	}
	onMouseEnterrs(event) {
		this.setState({ hover: !this.state.hover });
	}
	render() {
		var style = {
			color: this.state.done ? 'red' : 'green',
			fontSize: this.state.hover ? 70 : 40
		};

		return React.createElement(
			'li',
			{ style: style, onMouseEnter: this.onMouseEnterrs.bind(this), onClick: this.onListItemClick.bind(this) },
			this.props.list
		);
	}
}

var GroceryList = props => React.createElement(
	'ul',
	null,
	props.lists.map(ele => React.createElement(GroceryListItem, { list: ele }))
);

// ReactDOM.render(<App />, document.getElementById("app"));

ReactDOM.render(React.createElement(GroceryList, { lists: ['efe', 33, 44, 32] }), document.getElementById("app"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJHcm9jZXJ5TGlzdEl0ZW0iLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImRvbmUiLCJob3ZlciIsIm9uTGlzdEl0ZW1DbGljayIsImV2ZW50Iiwic2V0U3RhdGUiLCJvbk1vdXNlRW50ZXJycyIsInJlbmRlciIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSIsImJpbmQiLCJsaXN0IiwiR3JvY2VyeUxpc3QiLCJsaXN0cyIsIm1hcCIsImVsZSIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFPQSxlQUFQLFNBQStCQyxNQUFNQyxTQUFyQyxDQUErQztBQUM5Q0MsYUFBWUMsS0FBWixFQUFtQjtBQUNuQixRQUFNQSxLQUFOOztBQUVBLE9BQUtDLEtBQUwsR0FBYTtBQUNaQyxTQUFNLEtBRE07QUFFWkMsVUFBTztBQUZLLEdBQWI7QUFLRTtBQUNDQyxpQkFBZ0JDLEtBQWhCLEVBQXVCO0FBQ3RCLE9BQUtDLFFBQUwsQ0FBYztBQUNiSixTQUFNLENBQUMsS0FBS0QsS0FBTCxDQUFXQyxJQURMO0FBRWJDLFVBQU8sQ0FBQyxLQUFLRixLQUFMLENBQVdFO0FBRk4sR0FBZDtBQUlIO0FBQ0RJLGdCQUFlRixLQUFmLEVBQXNCO0FBQ3JCLE9BQUtDLFFBQUwsQ0FBYyxFQUFFSCxPQUFPLENBQUMsS0FBS0YsS0FBTCxDQUFXRSxLQUFyQixFQUFkO0FBQ0E7QUFDREssVUFBUztBQUNBLE1BQUlDLFFBQVE7QUFDWEMsVUFBTyxLQUFLVCxLQUFMLENBQVdDLElBQVgsR0FBa0IsS0FBbEIsR0FBMEIsT0FEdEI7QUFFWFMsYUFBVSxLQUFLVixLQUFMLENBQVdFLEtBQVgsR0FBbUIsRUFBbkIsR0FBd0I7QUFGdkIsR0FBWjs7QUFLTixTQUVJO0FBQUE7QUFBQSxLQUFJLE9BQU9NLEtBQVgsRUFBa0IsY0FBYyxLQUFLRixjQUFMLENBQW9CSyxJQUFwQixDQUF5QixJQUF6QixDQUFoQyxFQUFnRSxTQUFTLEtBQUtSLGVBQUwsQ0FBcUJRLElBQXJCLENBQTBCLElBQTFCLENBQXpFO0FBQTJHLFFBQUtaLEtBQUwsQ0FBV2E7QUFBdEgsR0FGSjtBQUtIO0FBOUI4Qzs7QUFpQy9DLElBQUlDLGNBQWVkLEtBQUQsSUFFYjtBQUFBO0FBQUE7QUFDREEsT0FBTWUsS0FBTixDQUFZQyxHQUFaLENBQWdCQyxPQUFPLG9CQUFDLGVBQUQsSUFBaUIsTUFBUUEsR0FBekIsR0FBdkI7QUFEQyxDQUZMOztBQVdBOztBQUVBQyxTQUFTVixNQUFULENBQWdCLG9CQUFDLFdBQUQsSUFBYSxPQUFPLENBQUMsS0FBRCxFQUFPLEVBQVAsRUFBVSxFQUFWLEVBQWEsRUFBYixDQUFwQixHQUFoQixFQUF5RFcsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6RCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPXG5cblxuLy8gY2xhc3MgR3JvY2VyeUxpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vIFx0IGNvbnN0cnVjdG9yKHByb3BzKSB7XG4vLyAgICAgICBzdXBlcihwcm9wcyk7XG4vLyAgICAgICB0aGlzLnN0YXRlID0ge2RvbmUgOiBmYWxzZSwgaG92ZXI6IGZhbHNlfVxuXG5cbi8vICAgfVxuXG4vLyAgIG9uTGlzdENsaWNrKCl7XG4vLyAgIFx0dGhpcy5zZXRTdGF0ZSh7ZG9uZSA6IXRoaXMuc3RhdGUuZG9uZX0pO1xuLy8gICB9XG4vLyAgIHRvZ2dsZUhvdmVyKCkge1xuLy8gICBcdHRoaXMuc2V0U3RhdGUoe2hvdmVyOiAhdGhpcy5zdGF0ZS5ob3Zlcn0pXG4vLyAgIH1cbi8vICAgcmVuZGVyKCl7XG4vLyAgIFx0ICB2YXIgc3R5bGUgPSB7XG4vLyAgICAgICB0ZXh0RGVjb3JhdGlvbjogdGhpcy5zdGF0ZS5kb25lID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZScsIFxuLy8gICAgICAgY29sb3I6IHRoaXMuc3RhdGUuZG9uZSA/ICAncmVkJyA6ICdibHVlJyBcbi8vICAgICB9O1xuLy8gICAgIHZhciBzdHlsZSA9IHtcbi8vICAgICAgIHRleHREZWNvcmF0aW9uOiB0aGlzLnN0YXRlLmhvdmVyID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZScsIFxuLy8gICAgICAgY29sb3I6IHRoaXMuc3RhdGUuaG92ZXIgPyAgJ3JlZCcgOiAnYmx1ZScgXG4vLyAgICAgfTtcbi8vICAgXHRyZXR1cm4oXG4vLyAgIFx0XHQ8bGkgc3R5bGU9e3N0eWxlfSAgb25Nb3VzZUVudGVyPXt0aGlzLnRvZ2dsZUhvdmVyLmJpbmQodGhpcyl9ICAgPnt0aGlzLnByb3BzLmxpc3R9PC9saT5cbi8vICAgXHRcdCk7XG4vLyAgIH1cblxuLy8gfTtcbi8vICB2YXIgR3JvY2VyeUxpc3QgPSAgKHByb3BzKSA9PiAoXG5cbi8vIFx0XHQ8dWw+XG4vLyBcdFx0XHR7cHJvcHMubGlzdC5tYXAoZWxlID0+IDxHcm9jZXJ5TGlzdEl0ZW0gbGlzdCA9IHtlbGV9IC8+ICl9XG5cbi8vIFx0ICAgIDwvdWw+XG4vLyBcdFx0XHQpO1xuLy8gUmVhY3RET00ucmVuZGVyKDxHcm9jZXJ5TGlzdCBsaXN0PXtbXCJDbGFzcyAxXCIsXCJjbGFzcyAyXCIsXCJjbGFzcyAzXCJdfS8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuLy8gKVxuXG5cbi8vIHZhciBBcHAgPSAoKSA9PiAoXG4vLyBcdFx0ICA8ZGl2PlxuXG4vLyBcdFx0ICA8aDI+IHRlc3RpbmcgcmVhY3QgPC9oMj4gXG4vLyBcdFx0ICA8VG9kb0xpc3QgdG9kb3M9e1snTGVhcm4gUmVhY3QnLCAnQ3J1c2ggUmVjYXN0Lmx5JywgJ01heWJlIHNsZWVwJ119IC8+XG5cbi8vIFx0XHQgIDwvZGl2PlxuXHRcdFxuLy8gKVxuXG4vLyB2YXIgVG9kb0xpc3QgPSAocHJvcHMpID0+IChcbi8vIFx0PHVsPlxuLy8gICAgICAgICA8bGk+e3Byb3BzLnRvZG9zWzBdfSA8L2xpPlxuLy8gICAgICAgICA8bGk+e3Byb3BzLnRvZG9zWzFdfSA8L2xpPlxuLy8gICAgICAgICA8bGk+e3Byb3BzLnRvZG9zWzJdfSA8L2xpPlxuLy8gXHQgPC91bD5cbi8vIClcbmNsYXNzICBHcm9jZXJ5TGlzdEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRzdXBlcihwcm9wcyk7XG5cblx0dGhpcy5zdGF0ZSA9IHtcblx0XHRkb25lOiBmYWxzZSxcblx0XHRob3ZlcjogZmFsc2Vcblx0ICAgfVxuXG4gIH07XG4gICAgb25MaXN0SXRlbUNsaWNrKGV2ZW50KSB7XG5cdCAgICB0aGlzLnNldFN0YXRlKHtcblx0ICAgIFx0ZG9uZTogIXRoaXMuc3RhdGUuZG9uZSxcblx0ICAgIFx0aG92ZXI6ICF0aGlzLnN0YXRlLmhvdmVyXG5cdCAgICB9KTtcblx0fVxuXHRvbk1vdXNlRW50ZXJycyhldmVudCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBob3ZlcjogIXRoaXMuc3RhdGUuaG92ZXIgfSlcblx0fVxuXHRyZW5kZXIoKSB7XG4gICAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgIFx0Y29sb3I6IHRoaXMuc3RhdGUuZG9uZSA/ICdyZWQnIDogJ2dyZWVuJyxcbiAgICAgICAgICBcdGZvbnRTaXplOiB0aGlzLnN0YXRlLmhvdmVyID8gNzAgOiA0MFxuICAgICAgICAgIH07XG5cdFx0XG5cdCBcdCByZXR1cm4gKFxuXHQgICAgICAgIFxuXHQgICAgICAgPGxpIHN0eWxlPXtzdHlsZX0gb25Nb3VzZUVudGVyPXt0aGlzLm9uTW91c2VFbnRlcnJzLmJpbmQodGhpcyl9IG9uQ2xpY2s9e3RoaXMub25MaXN0SXRlbUNsaWNrLmJpbmQodGhpcyl9Pnt0aGlzLnByb3BzLmxpc3R9PC9saT4gIFxuXHQgICAgIFxuICAgICk7XG59XG5cdH1cblxudmFyIEdyb2NlcnlMaXN0ID0gKHByb3BzKSA9PiAoXG5cdFxuXHQgICAgPHVsPlxuXHRcdFx0e3Byb3BzLmxpc3RzLm1hcChlbGUgPT4gPEdyb2NlcnlMaXN0SXRlbSBsaXN0ID0ge2VsZX0gLz4gKX1cblxuXHQgICAgPC91bD5cblxuXG4pXG5cblxuLy8gUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTtcblxuUmVhY3RET00ucmVuZGVyKDxHcm9jZXJ5TGlzdCBsaXN0cz17WydlZmUnLDMzLDQ0LDMyXX0vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpO1xuXG5cblxuXG4iXX0=