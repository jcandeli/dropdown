import React, { Component } from 'react';
import Dropdown, { DropdownItem, CheckboxItem, SubMenu } from './components/dropdown';

import './App.css';
import './components/dropdown/styles/Dropdown.css';

class App extends Component {
    onSelect(value) {
        console.log(value);
    }

    render() {
        return (
            <div>
                <div style={{ margin: '50px' }}>
                    <Dropdown placeholder="Select favorite rapper ..." onSelect={this.onSelect}>
                        <DropdownItem value="cole">
                            J Cole
                        </DropdownItem>

                        <CheckboxItem value="jay electron">
                            Jay Electronica
                        </CheckboxItem>

                        <CheckboxItem value="hove">
                            JAY-Z
                        </CheckboxItem>

                        <CheckboxItem value="Jay Prince">
                            Jay Prince
                        </CheckboxItem>
                    </Dropdown>
                </div>

                <div style={{ margin: '50px' }}>
                    <Dropdown placeholder="Select ..." onSelect={this.onSelect}>
                        <DropdownItem value="React">
                            React
                        </DropdownItem>

                        <DropdownItem value="Vue">
                            Vue
                        </DropdownItem>

                        <DropdownItem value="Ember">
                            Ember
                        </DropdownItem>

                        <DropdownItem value="Angular">
                            Angular
                        </DropdownItem>

                        <SubMenu label="Javascript Flavor">
                            <CheckboxItem value="TS">
                                Typescript
                            </CheckboxItem>

                            <CheckboxItem value="CS">
                                Coffeescript
                            </CheckboxItem>

                            <CheckboxItem value="ES6">
                                ES6
                            </CheckboxItem>

                            <CheckboxItem value="ES5">
                                ES5
                            </CheckboxItem>
                        </SubMenu>

                        <SubMenu label="Async Flavor">
                            <DropdownItem value="Saga">
                                Saga
                            </DropdownItem>

                            <DropdownItem value="Thunk">
                                Thunk
                            </DropdownItem>
                        </SubMenu>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default App;
