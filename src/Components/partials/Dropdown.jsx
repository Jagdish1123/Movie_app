import PropTypes from 'prop-types';

function Dropdown({ title, options, func }) {
  return (
    <div className="select">
      <select onChange={func} defaultValue="" name="format" id="format">
        <option value="" disabled>{title}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired, // Title of the dropdown
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of options for the dropdown
  func: PropTypes.func.isRequired, // Function to handle the onChange event
};

export default Dropdown;
