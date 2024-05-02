import React from 'react';

function HOC(Component) {
    const styles = { backgroundColor: 'blue', color: 'white' };
    const StyledComponent = (props) => {
        return < Component {...props} styles={styles} />;
    }
    console.log(StyledComponent)
    return StyledComponent;
}

export default HOC;
