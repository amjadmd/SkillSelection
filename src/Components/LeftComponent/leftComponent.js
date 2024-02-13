import '../LeftComponent/leftComponent.scss';
// import RightArrow from '../../right-arrow.svg';

function LeftComponent() {
    return (
      <>
        <div className="left-component-heading">School Level</div>
        <div className="component-body-container">
          <div className="left-component-body-container-level">
            <div>Level 0</div><div>{'->'}</div>
            {/* <RightArrow/> */}
          </div>
        </div>
      </>
    )
  }
  
export default LeftComponent