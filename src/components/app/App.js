import React, { Component } from 'react';
import Modal from '../modal';
import ModalOptions from '../modalOptions';

import './App.css';


export default class App extends Component {
  modalOptions = {};
  
  constructor(props) {
    super(props);
    this.state = {
      isModal: false,
    }

    this.textLabel = React.createRef();
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
    this.onAddLabel = this.onAddLabel.bind(this);
    this.onDelLabel = this.onDelLabel.bind(this);
    this.onEditLabel = this.onEditLabel.bind(this);
  }

  onAddLabel({value}) {
    this.onToggleModal(false);
    this.textLabel.current.textContent = value;
    this.onAlertModal(`Строка ${value} добавлена`);
  }

  onDelLabel({value}) {
    this.onToggleModal(false);
    this.textLabel.current.textContent = '';
    this.onAlertModal(`Строка ${value} удалена`);
  }

  onEditLabel({value}) {
    this.onToggleModal(false);
    this.textLabel.current.textContent = value;
    this.onAlertModal(`Строка ${value} изменена`);
  }

  /* Блок методов для модального окна */

  onOpenModal(e) {
    const target = e.nativeEvent.target;
    if (target.tagName === 'LABEL') {
      this.modalOptions = new ModalOptions({
        modalTitle: 'Редактировать строку',
        cancelTitle: 'Закрыть',
        actionTitle: 'Сохранить',
        isValue: target.textContent,
        onClose: this.onToggleModal,
        onAction: this.onEditLabel,
        isBody: true,
        isFooter: true,
      });
    }

    if (target.tagName === 'BUTTON' && target.id === 'btnAdd') {
      this.modalOptions = new ModalOptions({
        modalTitle: 'Добавить строку',
        cancelTitle: 'Закрыть',
        actionTitle: 'Добавить',
        onClose: this.onToggleModal,
        onAction: this.onAddLabel,
        isTitle: true,
        isBody: true,
        isFooter: true,
      });
    } else if (target.tagName === 'BUTTON' && target.id === 'btnDel') {
      this.modalOptions = new ModalOptions({
        modalTitle: 'Удалить строку',
        cancelTitle: 'Закрыть',
        actionTitle: 'Удалить',
        isValue: this.textLabel.current.textContent,
        onClose: this.onToggleModal,
        onAction: this.onDelLabel,
        isTitle: true,
        isBody: true,
        isFooter: true,
        inputReadOnly: true,
      });
    }

    this.onToggleModal(true);
  }

  onAlertModal(message = 'Текст сообщения!') {
    this.modalOptions = new ModalOptions({
      isTitle: true,
      modalTitle: message,
      onClose: this.onToggleModal,
    });
    
    this.onToggleModal(true);
  }

  onToggleModal(flag) {
    this.setState(
      ({isModal}) => isModal !== flag ? {isModal : flag} : null      
    )
  }
  
  render() {
    return (
      <div className="app container-fluid">
        <header className="app-header">
          <button
            id="btnAdd"
            type="button"
            className="btn btn-primary"
            onClick={this.onOpenModal}
          >Добавить строку</button>
          <button
            id="btnDel"
            type="button"
            className="btn btn-primary"
            onClick={this.onOpenModal}
          >Удалить строку</button>
        <label
          onClick={this.onOpenModal}
          ref={this.textLabel}
        ></label>
        </header>
        {this.state.isModal &&
          <Modal 
            propsModal = {this.modalOptions}
          >
          </Modal>
        }
      </div>
    );
  }
  
}
