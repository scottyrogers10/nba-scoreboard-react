import React from "react";
import "datejs";

const styles = {
    container: {
        position: "relative",
        height: "50px",
        width: "400px",
        backgroundColor: "#fff",
        borderRadius: "4px",
        margin: "8px 0",
        userSelect: "none"
    },
    prevBtn: {
        position: "absolute",
        textAlign: "center",
        cursor: "pointer",
        left: 0,
        width: "27%",
        height: "100%"
    },
    date: {
        position: "absolute",
        textAlign: "center",
        left: "27%",
        width: "46%",
        height: "100%",
        cursor: "default"
    },
    nextBtn: {
        position: "absolute",
        textAlign: "center",
        cursor: "pointer",
        left: "73%",
        width: "27%",
        height: "100%"
    },
    arrow: {
        height: "20px",
        width: "20px",
        verticalAlign: "middle"
    }
};

const DateSelector = props => {
    let date = props.date;
    let dayOfWeek = date.toString("dddd");
    let month = date.toString("MMM");
    let day = date.toString("dd");

    return (
        <div style={styles.container}>
            <div style={{lineHeight: "50px"}}>
                <div style={styles.prevBtn} onClick={() => { props.onDateChange(-1) } }>
                    <img style={styles.arrow} src={require("../assets/icons/arrow-left.png")} alt="left" />
                </div>
                <div style={styles.date}>{dayOfWeek + ", " + month + ". " + day}</div>
                <div style={styles.nextBtn} onClick={() => { props.onDateChange(1) } }>
                    <img style={styles.arrow} src={require("../assets/icons/arrow-right.png")} alt="right" />
                </div>
            </div>
        </div>
    );
};

export default DateSelector;