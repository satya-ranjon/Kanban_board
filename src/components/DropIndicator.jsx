import PropTypes from "prop-types";

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

DropIndicator.propTypes = {
  beforeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  column: PropTypes.string.isRequired,
};

export default DropIndicator;
