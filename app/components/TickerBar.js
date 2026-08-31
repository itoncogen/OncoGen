export default function TickerBar() {
    const items = [
        "Diferențierea in vitro a celulelor stem mezenchimale",
        "Fibroblastele peri-tumorale",
        "Biomarkeri și strategii terapeutice",
        "OncoGen este un centru de excelență specializat în cancer, alergii și medicină regenerativă.",
    ];

    return (
        <div className="ticker-bar">
            <div className="ticker-label">
                <span className="ticker-label-full">OncoGen News |</span>
                <span className="ticker-label-short">News |</span>
            </div>
            <div className="ticker-wrapper">
                <div className="ticker-track">
                    {[...items, ...items].map((item, idx) => (
                        <span key={idx} className="ticker-text">
                            <span className="ticker-bullet">•</span>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
