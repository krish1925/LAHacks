import React, { Component } from 'react';

export default class EventDetail extends Component {
    openUrl(url) {
        window.open(url, '_blank');
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <button onClick={() => window.history.back()}>
                        <span style={styles.link}>Back</span>
                    </button>
                    <button onClick={() => this.openUrl(this.props.url)}>
                        <span style={styles.link}>Full Details</span>
                    </button>
                </div>
                <div style={styles.body}>
                    <img
                        style={styles.detailImg}
                        src={this.props.img}
                        alt={this.props.title} />
                    <h1 style={styles.title}>{this.props.title}</h1>
                    <div style={styles.description}>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'white'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        color: 'blue',
        cursor: 'pointer'
    },
    detailImg: {
        height: 200,
        width: 200,
        borderRadius: 100,
        border: '1px solid black'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        padding: 5
    },
    description: {
        padding: 10
    }
};
