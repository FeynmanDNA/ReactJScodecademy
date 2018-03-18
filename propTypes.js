//propTypes are uesful for two reasons
//prop validation (for console)
//documentation

//If a component class expects a prop, 
//then you can give that component class a propType!

// This propTypes object should have
// one property for each expected prop:
// declare the propTypes after the close of component declaration
// since it is static property
// The value of each property in propTypes should fit this pattern:
// React.PropTypes.expected-data-type-goes-here
// Notice the difference in capitalization between the 
// propTypes object and React.PropTypes!
MessageDisplayer.propTypes = {
  message: React.PropTypes.string
};
//If you add .isRequired to a propType, then you will get 
//a console warning if that prop isn't sent.

//value of propTypes is an object, not a function!
