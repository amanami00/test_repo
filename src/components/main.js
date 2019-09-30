import React, { Component } from 'react';
import Slides from './slides';
import { Button, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import converter from 'number-to-words';

export class Main extends Component {

    renderDropdown = () => {
        const { onInputChange } = this.props;
        const slides = [...Array(20)].map((x, index) => {
            const count = index + 1;
            return (
                <option key={index} value={count}>{count}</option>
            );
        });
        return (
            <div className="row row-content">
                <div className="col-3 text-right">
                    <Label className="uname">Select Slides:</Label>
                </div>
                <div className="col-5 text-left">
                    <Input type="select" name="select" id="exampleSelect" onChange={ onInputChange }>
                        <option value=''>Select slides</option>
                        { slides }
                    </Input>
                </div>
            </div>
        ); 
    }

    renderSlides = () => {
        const { selectedSlides } = this.props;

        if (selectedSlides === '')
            return null;

        const selectItems = [...Array(parseInt(selectedSlides))].map((x, index) => {
            const num = converter.toWords(index+1);
            return {
                src: `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3E${num}%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E`,
                caption: `Slide ${index + 1}`,
            };
        });

        return(
            <Slides
                items={ selectItems }
            />
        );
    };

    renderModel = () => {
        const { isslidesSubmitted, toggle, selectedSlides } = this.props;
        return(
            <Modal isOpen={isslidesSubmitted} toggle={this.toggle}>
                <ModalHeader toggle={ toggle }>Slides Submission</ModalHeader>
                <ModalBody>
                    Total Slides: { selectedSlides }
                </ModalBody>
            </Modal>
        );
    };

    render() {
        const { onSubmit } = this.props;
        return(
            <div className="container Main">
                <div className="col-12">
                    <h4>Main Page</h4>
                </div>
                { this.renderDropdown() }
                { this.renderSlides() }
                <div className="row row-content">
                    <div className="col-12 text-center">
                        <Button onClick={ onSubmit }>Submit</Button>
                    </div>
                </div>
                { this.renderModel() }
            </div>
        );
    }

};

export default Main;
