```
import Dropdown, { DropdownItem, CheckboxItem, SubMenu } from './components/dropdown';

...
...
...

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
```