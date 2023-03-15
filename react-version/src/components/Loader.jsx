import '../styles/Loader.css'

const Loader = () => {
  return (
    <div id="preloader">
        <div id="status">
            <div className="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
            </div>
        </div>
    </div>
  )
}

export default Loader