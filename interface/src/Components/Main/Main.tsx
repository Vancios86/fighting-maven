import "./Main.css"

const Main = () => {
    return (
        <div className="main-display">
            <div className="next-event">
                <h3>Next event</h3>
                <div className="next-event-container"></div>
            </div>
            <div className="previous-event">
                <h3>Previous event</h3>
                <div className="previous-event-container"></div>
            </div>

        </div>
    )
}

export default Main;