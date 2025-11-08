import classNames from 'classnames'
import "./Button.scss"

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className={classNames("button")}>
        <span className={classNames("button__text")}>{children}</span>
    </button>
  )
}

export default Button