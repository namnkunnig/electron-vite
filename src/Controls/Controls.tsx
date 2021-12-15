import { IoStopOutline, IoCloseSharp, IoRemoveSharp } from 'react-icons/io5'
import css from './Controls.module.sass'

function closeApp() {
  window.electron.ipcRenderer.myClose()
}

export default function Foo() {
  return (
    <div className={css.bar}>
      <div className={css.dragarea} />
      <div className={css.controls}>
        <button type="button" className={`${css.control} ${css.minimize}`}>
          <IoRemoveSharp />
        </button>
        <button type="button" className={`${css.control} ${css.restore}`}>
          <IoStopOutline />
        </button>
        <button type="button" onClick={() => closeApp()} className={`${css.control} ${css.close}`}>
          <IoCloseSharp />
        </button>
      </div>
    </div>
  )
}
