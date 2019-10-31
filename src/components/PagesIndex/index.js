import React, {Component} from 'react'
import { PagesIndexList, PagesIndexWrapper, PageButton } from './styles';
import { npost } from 'q';


export default class PagesIndex extends Component {

  constructor() {
    super();
    this.state = {
      currPage: 1,
    }
  }

  componentDidMount() {
    this.setState({currPage:this.props.currPage})
  }

  createTable = () => {
    const {currPage} = this.state
    const {nPages} = this.props;
    const table = [];
    const sucNumber = (nPages - currPage)%5,
          prevNumber = (currPage - 1)%5,
          iniPage = currPage - prevNumber,
          lastPage = currPage + sucNumber;

    for (let i = iniPage; i < currPage; i++) {
      table.push(<li
        key={i} onClick={() => this.setState({currPage:i})}>
        <PageButton specialColor={(i===currPage)}>{i}</PageButton> </li>);
    }

    for (let i = currPage; i <= lastPage; i++) {
      table.push(<li
        key={i} onClick={() => this.setState({currPage:i})}>
        <PageButton specialColor={(i===currPage)}>{i}</PageButton> </li>)
    }

    return table;
  }

  modifyPage = (modifier) => {
    const {currPage} = this.state
    const {nPages} = this.props;
    if (currPage + modifier > nPages || currPage + modifier === 0)
      return;

    this.setState({currPage:currPage+modifier})
  }

  render()
  {
    const {currPage} = this.state
    const {nPages} = this.props;
    // console.log(currPage)
    return (
      <PagesIndexWrapper>
        <PageButton onClick={() => this.modifyPage(-1)}
        disabled={(currPage === 1)}
        > Anterior </PageButton>
      <PagesIndexList>
        {this.createTable()}
      </PagesIndexList>
        <PageButton onClick={() => this.modifyPage(1)}
        disabled={(currPage === nPages)}
        > Próximo </PageButton>
    </PagesIndexWrapper>
    )
  }
}