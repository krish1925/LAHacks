import React, { Component } from 'react';
import Geocoder from 'react-geocoder';
import EStyleSheet from 'react-extended-stylesheet';

EStyleSheet.build();

//Normally wouldn't store my token this way if this were a production app :)
const API_TOKEN = '<API_KEY_HERE>';
const SEARCH_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const ds = {
    cloneWithRows: (data) => ({ dataSource: data })
};

export default class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([]),
            eventType: '',
            city: ''
        };
        this.renderRow = this.renderRow.bind(this);
        this.showDetails = this.showDetails.bind(this);
        this.renderSeparator = this.renderSeparator.bind(this);
    }

    searchEvents(category, city) {
        Geocoder.geocodeAddress(city).then(geoCodeResponse => {
            let position = geoCodeResponse[0].position;
            let locationString = `&location.latitude=${position.lat}&location.longitude=${position.lng}`;
            let FETCH_URL = `${SEARCH_URL}?q=${category}${locationString}`;

            fetch(FETCH_URL, {
                method: 'GET',
                headers: {
                    'Authorization': API_TOKEN
                }
            })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON);
                this.setState({dataSource: ds.cloneWithRows(responseJSON.events)});
            });
        }).catch((err) => console.log('Error', err));
    }

    renderRow(rowData) {
        const defaultImage = 'https://pixabay.com/static/uploads/photo/2015/02/13/09/47/question-634903__180.png';
        let image = rowData.logo ? rowData.logo.url : defaultImage;

        return (
            <div style={styles.row}>
                <img style={styles.rowLogo}
                    src={image} alt=""/>
                <div style={styles.rowDetails}>
                    <p>
                        {rowData.name.text.length > 30 ?
                            `${rowData.name.text.substring(0,30)}...` :
                            rowData.name.text
                        }
                    </p>
                    <button onClick={() => this.showDetails(rowData)} style={styles.link}>more details</button>
                </div>
            </div>
        );
    }

    showDetails(rowData) {
        console.log(rowData);
    }

    renderSeparator(sectionID, rowID) {
        return (
            <div style={styles.separator} key={sectionID + rowID} />
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <h1 style={styles.title}>Event Search</h1>
                <div style={styles.form}>
                    <input style={styles.input}
                        placeholder='kind of event...'
                        onChange={(event) => this.setState({eventType: event.target.value})}/>
                    <input style={styles.input}
                        placeholder='city...'
                        onChange={(event) => this.setState({city: event.target.value})}/>
                </div>
                <button style={styles.button}
                    onClick={() =>
                    this.searchEvents(this.state.eventType, this.state.city)}>
                    Search
                </button>
                <div style={styles.list}>
                    {this.state.dataSource.dataSource.map((rowData, index) =>(
    <div key={index}>
    {this.renderRow(rowData)}
    {this.renderSeparator('section', index)}
    </div>
    ))}
    </div>
    </div>
    );
    }
    }

    const styles = EStyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
    },
    title: {
    fontSize: '2rem',
    marginVertical: '2rem'
    },
    form: {
    flexDirection: 'row',
    marginVertical: '1rem'
    },
    input: {
    flex: 1,
    height: '2.5rem',
    borderWidth: '1px',
    borderColor: 'gray',
    borderRadius: '5px',
    padding: '0.5rem',
    marginRight: '1rem'
    },
    button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem',
    borderRadius: '5px',
    marginTop: '1rem'
    },
    list: {
    alignSelf: 'stretch',
    marginVertical: '1rem'
    },
    row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '0.5rem'
    },
    rowLogo: {
    width: '50px',
    height: '50px',
    borderRadius: '25px'
    },
    rowDetails: {
    marginLeft: '1rem'
    },
    link: {
    color: '#2196F3',
    textDecorationLine: 'underline'
    },
    separator: {
    height: '1px',
    backgroundColor: 'gray',
    marginVertical: '0.5rem'
    }
    });
