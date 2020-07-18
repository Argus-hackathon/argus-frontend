// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

import instructionStyle
    from 'assets/jss/material-dashboard-pro-react/components/instructionStyle.jsx'
import cx from 'classnames'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem'
import PropTypes from 'prop-types'
import React from 'react'

function Instruction({...props}) {
    const {
        classes,
        title,
        text,
        image,
        className,
        imageClassName,
        imageAlt
    } = props
    const instructionClasses = cx({
        [classes.instruction]: true,
        [className]: className !== undefined
    })
    const pictureClasses = cx({
        [classes.picture]: true,
        [imageClassName]: imageClassName !== undefined
    })
    return (
        <div className={instructionClasses}>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                    <div className={pictureClasses}>
                        <img src={image} alt={imageAlt}
                             className={classes.image} />
                    </div>
                </GridItem>
            </GridContainer>
        </div>
    )
}

Instruction.defaultProps = {
    imageAlt: '...'
}

Instruction.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.node.isRequired,
    text: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    className: PropTypes.string,
    imageClassName: PropTypes.string
}

export default withStyles(instructionStyle)(Instruction)
