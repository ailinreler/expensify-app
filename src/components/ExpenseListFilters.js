import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import uuid from 'uuid';

class ExpenseListFilters extends React.Component {
    state = { 
        calendarFocused: null
    }

    ondDatesChange = ( { startDate, endDate } ) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    render() { 
        return (  
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }} />
    
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    switch (e.target.value) {
                        case 'date':
                                this.props.dispatch(sortByDate());
                            break;
                        case 'amount':
                            this.props.dispatch(sortByAmount());                        
                            break;
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
    
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.ondDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    startDateId={uuid()}
                    endDateId={uuid()}
                />    
    
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);