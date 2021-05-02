import React from 'react';
import Modal from 'react-modal';
import "./ModalAbout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const ModalAbout = ({ modalIsOpen, closeModal }) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="mb-5 modal-btn" onClick={closeModal}><FontAwesomeIcon className="close-icon" icon={faTimes} /></button>

                <div className="bars" style={{ width: '500px' }}>
                    <div className="javascript">
                        <h4>Javascript</h4>
                        <div className="progress mb-3">
                            <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="react">
                    <h4>React</h4>
                    <div class="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div className="node">
                    <h4>Node</h4>
                    <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                    <div className="Wordpress">
                    <h4>Wordpress</h4>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                </div>

            </Modal>
        </div>
    );
};

export default ModalAbout;