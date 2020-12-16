import React from 'react';
import Modal from 'react-modal';

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

export const Question = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className="question-box">
                <div className="container">
                    <div className="row align-center">
                        <div className="text">Do you have any questions? <span className="sbold">Ask us!</span> </div>
                        <p onClick={openModal} className="bt magnificPopup">Contact us</p>
                    </div>
                </div>
            </div>


            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div id="modal-question" className="modal mfp-hide">
                    <form className="form-question">
                        <div className="modal-ttl">Заголовок формы</div>
                        <div className="form-body row align-center">
                            <input type="text" placeholder="Ваше имя" />
                            <input type="text" placeholder="Телефон" className="mask-phone" />
                            <textarea placeholder="Ваш комментарий"></textarea>
                            <button className="bt">Задать вопрос</button>
                            <a href="" className="link-cancel">Отмена</a>
                        </div>
                        <div className="form-thank">
                            Спасибо за заявку! Мы свяжемся с вами в ближайшее время.
        </div>
                        <div className="agree">
                            Нажимая кнопку “задать вопрос” я соглашаюсь <a href="https://pp1.ru/privacy-policy" target="blank">с политикой конфиденциальности и обработкой персональных даннах</a>
                        </div>
                    </form>
                </div>
            </Modal>



        </>

    )
}