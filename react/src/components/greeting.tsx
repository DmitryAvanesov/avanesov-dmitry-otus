import React from 'react';

interface IProps {
  awesomeness: number;
}

interface IState { }

export class Greeting extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>HELLO</h1>
        <div>Your level of awesomeness is {this.props.awesomeness}%</div>
      </div>
    );
  }
}