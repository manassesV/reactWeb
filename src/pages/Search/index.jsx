import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import SearchAPI from '../../service/search';
import '../../index.css'


class Search extends Component {
    constructor() {
        super();
        this.onSearch = this.onSearch.bind(this);

        this.state = {
            datas: []
        }
    }

    onSearch(event) {
        const value = event.currentTarget.value;
        var self = this;

        var search = new SearchAPI();
      


        search.get(value, function(dados){
            self.setState({
                datas: dados
           });
        })

            
    }

    renderItem(item){

        if(item != null){
            return(
          
                <tr className="trtable">
                    <Link
                    to={`product/${item.id}`}
                    className="texttable"
                    >
                    <td  key={item.id} className="mdl-cell--12-col">
                       <div class="mdl-grid">
                          <div class="mdl-cell mdl-cell--3-col"><span>{item.id}</span></div>
                          <div class="mdl-cell mdl-cell--7-col"><span >{item.title}</span></div>
                          <div class="mdl-cell mdl-cell--2-col">
                             <img  src={item.thumbnail}   className="img"  />
                             </div>
                         </div>
                    </td>
                    </Link>
                </tr>
        
                )
        }else{
            return(
                <p>test</p>
            )
        }
        
    }

    
    render() {
        return (
            <Fragment >
                <div className="mdl-grid">
                    <header className="mdl-cell--12-col" >
                        <div className="mdl-layout__header-row">
                           <div className="mdl-layout-spacer"></div>
                                <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable
                                    mdl-textfield--floating-label">
                                    <label className="mdl-button mdl-js-button mdl-button--icon"
                                        >
                                        <i id="blue" className="material-icons">search</i>
                                    </label>
                                    <input id="search" className="mdl-textfield__input " type="text" name="sample"
                                            onChange={this.onSearch}/>
                                </div>
                        </div>
                        </header>
                        <table className="mdl-cell--12-col mdl-cell--4-col-phone  mdl-shadow--2dp">
                            <tbody className="mdl-cell--12-col">

                                {  this.state.datas.map(this.renderItem) } 
                            </tbody>
                        </table>
                </div>
            </Fragment>
        
        );
    }
}

export default Search;