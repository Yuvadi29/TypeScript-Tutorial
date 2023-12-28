
const HangmanDrawing = () => {
    return (
        <div style={{ position: "relative" }}>
            {/*Upper downward bar*/}
            <div style={{ height: "50px", width: "10px", background: "black", top: "0", right: "0", position: "absolute" }} />
            {/*Upper bar*/}
            <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />
            {/*Vertical straight bar*/}
            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
            {/* Bottom Bar */}
            <div style={{ height: "10px", width: "250px", background: "black" }} />
        </div>
    )
}

export default HangmanDrawing