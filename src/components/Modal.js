import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Default from '../helpers/default';

class Modal extends React.Component {
    constructor() {
        super();
        this.closeModal.bind();
        this.makeModal.bind();
    }
    closeModal() {
        this.props.closeModal(false);
    }
    makeModal() {
        if(this.props.isModal){
            return;
        }
        this.closeModal();
    }
    render() {
        return (
            <Fragment>
            {this.props.open &&        
                <div className="reveal-overlay" style={Object.assign({}, this.props.overlayStyle, Default.overlayRequiredStyle)} onClick={() => this.makeModal()}>
                    <div data-animate="slide-in-down slide-out-up" className={`${this.props.size} reveal`} style={{display: 'block'}}>
                        {!this.props.hideCloseButton && 
                            <button className="close-button" data-close aria-label="Close modal" type="button" onClick={() => this.closeModal()} >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        }
                        {this.props.children}
                    </div>
                </div>
            }
            </Fragment>
        );
    }
}
Modal.defaultProps = {
    open: false,
    isModal: false,
    hideCloseButton: false,
    size: 'small',
    overlayStyle: {}
}
Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    isModal: PropTypes.bool,
    hideCloseButton: PropTypes.bool,
    size: PropTypes.string,
    closeModal: PropTypes.func,
    overlayStyle: PropTypes.shape({})
  };
export default Modal;
