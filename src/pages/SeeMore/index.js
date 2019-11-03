import React, {Component} from 'react'
import {Wrapper, StyledList, StyledContent} from './styles'
import {Container} from '../../components/Container/index'
import {GenButton} from '../../components/GenButton/styles'
import {Redirect} from 'react-router-dom'

export default class SeeMore extends Component {
  constructor () {
    super()
    this.state = {
      name: "Problemas nas Praias de Salvador",
      message:"Olah, meu caro senhor",
      answer:"SDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBDSDNDFSDHFDSHFFLDSJFJKSJFSHFUHSFSDFKJDSNDFLSFSDLKFSDLDSFKSDNFLSDFNSDFSNFJNFNSKFSFSDSDFNSJFLSDFNJSDFSKLFSLFDSFNSDJASDLAJDASLIDAHSDAJSDIOAHLDASKDHASDKUAHDASKLDJHADKJSAHDAJDHASDHSAFDSJSDKFSJBFSBD",
      // answer: "",
      owner: "Tiago Moreira",
      answBy: "Carlos Madeiro",
      creatDate: "19/04/2019",
      answDate: "25/08/2019",
      fileLink: "asdoasidjlsakndln",
      // fileLink: "",
      redirect: false
    }
  }

  componentDidMount() {

  }

  setRedirect = (e) => {
    this.setState({redirect:true})
  }

  render () {
    const {name, message, answer, owner, answBy, creatDate, answDate, fileLink, redirect} = this.state
    const {lastPage} = this.props
    return (
      <Container>
        {redirect &&
          <Redirect to={lastPage || "/pautas"} ></Redirect>
        }
        <Wrapper answered={answer}>
        <GenButton type="button" onClick={() => this.setRedirect()}>&lt;</GenButton>
        <h2>{name}</h2>
        <StyledList>
          <li>{creatDate}</li>
          <li>{answer ? answDate : '-'}</li>
        </StyledList>
        <StyledList>
          <li>{owner}</li>
          <li>{answer ? answBy : '-'}</li>
        </StyledList>
          {fileLink &&
            <p href={fileLink} className="linker"> Link de Arquivo </p>
          }
          <StyledContent>
            <p>{message}</p>
          </StyledContent>
          {!answer ?
            <h3>Ainda não houve resposta à sua proposta... :(</h3>
            :
            <StyledContent>
              <p>{answer}</p>
            </StyledContent>
            }
        </Wrapper>
      </Container>
    )
  }
}