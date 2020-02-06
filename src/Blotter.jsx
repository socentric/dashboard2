import './blotter.css';
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { setExpandedQuote } from './actions';

const Blotter = ({ rfqs, setExpandedQuote }) => {
  const { columnIds, columnSettings, quotes } = rfqs;
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          { 
            columnIds.map((colId, headerIndex) => {
              return (
                <th 
                  className={classnames(`${columnSettings[colId].type}`)} 
                  key={headerIndex}
                >
                  {columnSettings[colId].label}
                </th>
              )
            })
          }
        </tr>
      </thead>
      { 
        quotes.map((quote, quoteIndex) => {
          return (
            <tbody key={quoteIndex}>  
            {
              quote.legs.map((leg, legIndex) => {
                return (quote.isExpanded || legIndex === 2 || quote.legs.length === 1) && (
                  <tr key={`${quoteIndex}-${legIndex}`}>
                    
                    <td className={classnames('blotter_button-cell', {'row-child': legIndex !== quote.legs.length -1})}>
                      { 
                        legIndex > 1 && 
                          <button className="blotter_button" onClick={setExpandedQuote(quoteIndex)}>
                            {
                              quote.isExpanded ? 
                                <span className="material-icons" aria-hidden="true">expand_less</span> : 
                                <span className="material-icons" aria-hidden="true">keyboard_arrow_right</span>  
                            }
                          </button>
                      }
                    </td>

                    {
                      columnIds.map((colId, keyIndex) => {
                        return (
                          <td 
                            className={classnames(`${columnSettings[colId].type}`, `${columnSettings[colId].category}`, {'row-child': legIndex !== quote.legs.length -1})} 
                            nowrap="true" 
                            key={`${quoteIndex}-${legIndex}-${keyIndex}`}
                          >
                            {leg[colId]}
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }  
            </tbody>
          )
        })
      }
    </table>
  );
};

const mapStateToProps = state => ({
  rfqs: state.rfqs
})

const mapDispatchToProps = dispatch => ({
  setExpandedQuote: quoteIndex => () => dispatch(setExpandedQuote(quoteIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blotter);