import "./ProgressBar.scss"

 export const ProgressBar = (props) => {
  const { completed } = props;

  const fillerStyles = {
    height: '100%',
    width: `${completed /2}%`,
    backgroundColor: 'red',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className="progressbar__container">
      <div className="progressbar__fillerStyles" style={fillerStyles}>
      </div>
    </div>
  );
};
  
 