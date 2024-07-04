import MoonLoader from "react-spinners/MoonLoader";

function Loader() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center position-fixed start-50 translate-middle" style={{ zIndex: 1050, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <MoonLoader
          color="#161515"
          loading={true}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
}

export default Loader;
