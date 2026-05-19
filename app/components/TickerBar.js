export default function TickerBar() {
    const text = "OncoGen este un centru de excelență în cercetare cu preocupări în cancer, alergii și medicina regenerativă.";

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
