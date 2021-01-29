import React, { Component } from "react";
import { CardDeck, Card, CardTitle,
  CardSubtitle, CardText, CardImg, Col} from  'reactstrap';

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <style>
          {`
            .Card{
              width: 30%;
              float: left;
              margin: 10%;
            }
            .CardImg{
              
            }
          `}
        </style>

        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Team</h2>
            <p>
              Our team is made up of a good mix of IT software developers as 
              well as Commerce and Marketing graduates. This 
              combination ensures a strong mix of business and technical knowledge, 
              experience and expertise, allowing us to build solutions that address
               both the commercial and technological needs of each client.
            </p>
          </div>
          <div id="row">
            <div className="centre">
              <div className="thumbnail">
                <CardDeck>
                    {this.props.data
                      ? this.props.data.map((d, i) => (
                        <Card>
                          <Col sm="8">
                          <CardImg top width="100%" src={d.img} alt="Card image cap" />
                          </Col>
                          <CardTitle tag="h5">{d.name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">{d.job}</CardSubtitle>
                          <CardText>{d.description}</CardText>
                        </Card>
                      ))
                      : "loading"}
                  </CardDeck>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
