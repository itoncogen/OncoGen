export default function TickerBar() {
    const text = "Diferențierea in vitro a celulelor stem mezenchimale";

    return (
        <div className="ticker-bar">
            <div className="ticker-track">
                <span className="ticker-text">{text}</span>
                <span className="ticker-text">{text}</span>
                <span className="ticker-text">{text}</span>
            </div>
        </div>
    );
}
