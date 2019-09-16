import React from 'react'
import './modal.scss'

export default class Modal extends React.Component {
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
        // console.log(this.props.show);
        // if(this.props.show) {
        //     // this.setState({show: !this.props.show})
        //     this.props.show = !this.props.show
        // }
    };

    render() {
        if(!this.props.show){
            return null;
        }
        return <div id="Modal">
            <div className="modal-overlay"/>
            <div className="modal-content">
                <div className="modal-actions">
                    <div>
                        <h3>{this.props.title}</h3>
                    </div>
                    <div>
                        <i onClick={this.onClose} className="fas fa-times" />
                    </div>
                </div>
                <div className="content">{this.props.children}</div>
            </div>
        </div>;
    }
}