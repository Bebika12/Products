import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions';
import { bindActionCreators} from 'redux';

//Component
import ProductList from '../component/home/ProductList';

class Home extends Component{

    componentDidMount(){
        this.props.getProducts()
    }
    render(){
        return(
            <div>
                <ProductList latestData={this.props.articles.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getProducts},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home) ;