import style from '../form/form.module.css'


const Modal = (props) => {

  const {open, onClose} = props;

  if(!open) return null;

  return (
      <div className={style.overlay}>
        <section className={style.popup}>
          <button className={style.btnModal} onClick={onClose} >&times;</button>
          <fieldset className={style.fieldSet}>
            <legend>Kontakta oss</legend>
            <form action="">
              <div >
                  <label className={style.label} htmlFor="Name">Name: </label>
                  <input className={style.input} id="Name" type="text" placeholder="Name" />
                </div>
                <div >
                  <label className={style.label} htmlFor="email">Email: </label>
                  <input className={style.input} id="email" type="email" placeholder="Email" />
                </div>
                <div>
                  <label className={style.label} htmlFor="Ordernumber">Ordernumber: </label>
                  <input className={style.input} id="Ordernumber" type="text" placeholder="Ordernumber" />
                </div>
              <textarea className={style.textArea} name="" id="" cols="30" rows="10"></textarea>
              <div className={style.btnFlex}>
                <button className={style.btnModal} onClick={() => {alert('Hello you sent it good job!')}}>Send</button>
              </div>
            </form>
          </fieldset>
        </section>
      </div>
  )
}

export default Modal;