export default class ModalOptions {
  constructor(property) {
    this.modalTitle = property.modalTitle || ''; //Заголовок модального окна
    this.cancelTitle = property.cancelTitle || 'Отмена'; //Заголовок кнопки закрытия/отмены действия модального окна
    this.actionTitle = property.actionTitle || 'Сохранить'; //Заголовок кнопки действия модального окна
    this.onClose = property.onClose || null; //Коллбэк закрытия модального окна
    this.onAction = property.onAction || null; //Коллбэк действия модального окна
    this.inputReadOnly = property.inputReadOnly; //Запрет редактирования элемента Input модального окна
    this.isValue = property.isValue || ''; //Строка передаваемая в input модального окна
    this.isTitle = property.isTitle; //Видимость элемента title модального окна
    this.isBody = property.isBody; //Видимость элемента body модального окна
    this.isFooter = property.isFooter; //Видимость элемента footer модального окна
  }
}
